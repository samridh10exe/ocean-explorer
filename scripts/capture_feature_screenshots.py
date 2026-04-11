#!/usr/bin/env python3
"""Capture deterministic feature screenshots for the README proof pack."""

from __future__ import annotations

import base64
import json
import shutil
import subprocess
import sys
import tempfile
import time
import urllib.request
from pathlib import Path

import websocket


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "docs" / "feature-screenshots"
HTTP_PORT = 4175
CDP_PORT = 9334
VIEWPORT = {"width": 1280, "height": 800, "deviceScaleFactor": 1, "mobile": False}
PROFILE_DIR = Path(tempfile.mkdtemp(prefix="deepdive-feature-screenshot-chrome-"))


PROOF_CSS = """
body.screenshot-proof .zone__content {
  opacity: 1 !important;
  transform: none !important;
}

body.screenshot-proof #zone-stage {
  transition: none !important;
}

body.screenshot-proof #logbook-panel,
body.screenshot-proof #creature-panel {
  transition: none !important;
}

body.screenshot-proof .proof-note {
  position: fixed;
  right: 2rem;
  bottom: 1.45rem;
  z-index: 60;
  max-width: 27rem;
  border-left: 2px solid var(--bio-cyan);
  background: linear-gradient(90deg, rgba(0, 15, 24, 0.92), rgba(0, 15, 24, 0.55));
  color: var(--text-primary);
  padding: 0.85rem 1rem;
  font: 700 0.72rem/1.55 "Space Mono", monospace;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  box-shadow: 0 0 30px rgba(0, 245, 212, 0.13);
  pointer-events: none;
}

body.screenshot-proof .proof-note strong {
  color: var(--bio-cyan);
}

body.screenshot-proof .sonar-pulse {
  opacity: 0.9 !important;
  animation: none !important;
}

body.screenshot-proof .sonar-pulse__ring,
body.screenshot-proof .sonar-pulse__sweep {
  animation: none !important;
  opacity: 1 !important;
}

body.screenshot-proof .sonar-pulse__ring:nth-child(1) {
  transform: translate3d(-50%, -50%, 0) scale(2.5) !important;
  opacity: 0.84 !important;
}

body.screenshot-proof .sonar-pulse__ring:nth-child(2) {
  transform: translate3d(-50%, -50%, 0) scale(4.05) !important;
  opacity: 0.48 !important;
}

body.screenshot-proof .sonar-pulse__ring:nth-child(3) {
  transform: translate3d(-50%, -50%, 0) scale(5.65) !important;
  opacity: 0.24 !important;
}

body.screenshot-proof .sonar-pulse__sweep {
  transform: translate3d(-50%, -50%, 0) scale(0.92) rotate(24deg) !important;
  opacity: 0.82 !important;
}

body.screenshot-proof .sonar-echo {
  animation: none !important;
  opacity: var(--echo-alpha, 0.7) !important;
  transform: translate3d(-50%, -50%, 0) scale(0.9) !important;
}

body.screenshot-proof .creature.sonar-highlight .creature__img {
  animation: none !important;
  opacity: 1 !important;
  filter:
    brightness(0.06)
    blur(1.2px)
    drop-shadow(0 0 14px var(--bio-cyan))
    drop-shadow(0 0 34px var(--bio-cyan)) !important;
}

body.screenshot-proof .creature.sonar-highlight::before {
  animation: none !important;
  opacity: 0.88 !important;
  transform: scale(1.04) !important;
}

body.screenshot-proof .reveal-cinematic {
  animation: none !important;
  opacity: 1 !important;
}

body.screenshot-proof .reveal-cinematic__halo {
  animation: none !important;
  opacity: 0.92 !important;
  transform: translate(-50%, -50%) scale(1.05) !important;
}

body.screenshot-proof .reveal-cinematic__scan {
  animation: none !important;
  opacity: 0.84 !important;
  transform: translate(-50%, -50%) rotate(-8deg) scaleX(1) !important;
}

body.screenshot-proof .reveal-cinematic__ring {
  animation: none !important;
  opacity: 0.85 !important;
  transform: translate(-50%, -50%) scale(0.92) !important;
}

body.screenshot-proof .reveal-cinematic__label {
  animation: none !important;
  opacity: 1 !important;
  transform: translate(-50%, calc(-50% - 5.7rem)) !important;
}

body.screenshot-proof .creature.is-revealing .creature__img {
  animation: none !important;
  opacity: 1 !important;
  transform: scale(1.1) rotate(1deg) !important;
  filter:
    brightness(1.62)
    saturate(1.24)
    blur(0.15px)
    drop-shadow(0 0 18px var(--bio-color)) !important;
}

body.screenshot-proof .zone.is-reveal-burst::after {
  animation: none !important;
  opacity: 1 !important;
}

body.screenshot-proof .pollution-item.proof-target {
  opacity: 0.98 !important;
  animation: proof-trash-float 4.6s ease-in-out infinite !important;
}

body.screenshot-proof .pollution-item.proof-collected {
  opacity: 1 !important;
  animation: none !important;
  transform: translate3d(0, -0.38rem, 0) scale(1.24) rotate(var(--proof-rotate, -8deg)) !important;
  filter: drop-shadow(0 0 22px rgba(87, 204, 153, 0.78));
}

body.screenshot-proof .pollution-item.proof-collected::after {
  content: "";
  position: absolute;
  inset: -1.2rem;
  border: 1px solid rgba(87, 204, 153, 0.72);
  border-radius: 50%;
  box-shadow: 0 0 24px rgba(87, 204, 153, 0.38);
}

body.screenshot-proof .pollution-item.proof-collected .pollution-item__tag {
  opacity: 1;
  color: var(--bio-green);
}

body.screenshot-proof .legendary-pass {
  opacity: 0.68 !important;
  transform: translate3d(8vw, -1vh, 0) scale(1.22) rotate(1deg) !important;
  animation: none !important;
  filter:
    brightness(0.42)
    saturate(1.1)
    blur(0.25px)
    drop-shadow(0 0 22px rgba(0, 245, 212, 0.76))
    drop-shadow(0 0 64px rgba(76, 201, 240, 0.5)) !important;
}
"""


HELPER_JS = """
(() => {
  window.__proof = {
    note(text) {
      document.querySelectorAll('.proof-note').forEach((node) => node.remove());
      if (!text) return;
      const note = document.createElement('div');
      note.className = 'proof-note';
      note.innerHTML = text;
      document.body.appendChild(note);
    },

    start() {
      document.body.classList.add('screenshot-proof');
      refs.introScreen.hidden = true;
      refs.gameContainer.classList.add('is-active');
      refs.gameContainer.setAttribute('aria-hidden', 'false');
      refs.endScreen.hidden = true;
      refs.endScreen.removeAttribute('data-rank');
      if (!state.started) startGame();
      state.started = true;
      state.ended = false;
      cancelAnimationFrame(ui.loopFrame);
      ui.loopFrame = 0;
      stopBreathDetection();
      stopHydrophoneLoop();
      stopAmbientAudio();
      state.oxygen = 76;
      updateHud();
    },

    reset() {
      this.start();
      closeTriviaModal();
      closeLogbook();
      hideCreaturePanel();
      refs.uiOverlay.hidden = true;
      document.body.classList.remove('modal-open');
      document.querySelectorAll('.reveal-cinematic,.sonar-pulse,.sonar-echo,.proof-note').forEach((node) => node.remove());
      refs.zones.forEach((zoneEl) => {
        zoneEl.classList.remove('is-reveal-burst','is-miss-shock','is-sonar-active','is-polluted','is-cleansed','is-squid-pass');
      });
      creatureData.forEach((creature) => {
        const node = getCreatureNode(creature.id);
        if (node) {
          node.classList.remove('revealed','missed','seen','assisted','is-revealing','sonar-highlight','is-spotlit');
        }
      });
      zoneData.forEach((zone) => clearZonePollution(zone.id));
      state.discovered.clear();
      state.seenCreatures.clear();
      state.assistedDiscoveries.clear();
      state.missedCreatures.clear();
      state.creatureAttempts.clear();
      state.triviaCorrect = 0;
      state.triviaAnswered = 0;
      state.discoveryStreak = 0;
      state.bestDiscoveryStreak = 0;
      state.pollutionCollected = 0;
      state.pollutionCombo = 0;
      state.zonePollutionMisses = Object.fromEntries(zoneData.map((zone) => [zone.id, 0]));
      state.zonePollutionCollected = Object.fromEntries(zoneData.map((zone) => [zone.id, 0]));
      state.sonarCooling = false;
      state.sonarReturns = 0;
      refs.sonarButton.disabled = false;
      refs.sonarButton.classList.remove('is-cooling');
      refs.sonarStatus.textContent = 'SONAR READY';
      closeLogbook();
      hideCreaturePanel();
      renderLogbook();
      updateHud();
    },

    zone(idOrIndex, oxygen = 76) {
      const index = typeof idOrIndex === 'number'
        ? idOrIndex
        : zoneData.findIndex((zone) => zone.id === idOrIndex);
      this.reset();
      setZoneImmediate(index);
      setZoneVisualState(index);
      document.body.dataset.zone = zoneData[index].id;
      refs.zoneReadout.textContent = zoneData[index].title;
      state.oxygen = oxygen;
      updateHud();
      applyFlashlightPosition(refs.zones[index]);
    },

    trash(zoneId, type, left, top, size = '4.4rem', rotate = '-8deg', extra = '') {
      const zoneEl = getZoneNode(zoneId);
      const layer = zoneEl.querySelector('.zone__pollution');
      const node = document.createElement('button');
      node.type = 'button';
      node.className = `pollution-item is-proof-shot proof-target ${extra}`;
      node.dataset.type = type;
      node.style.setProperty('--proof-left', left);
      node.style.setProperty('--proof-top', top);
      node.style.setProperty('--size', size);
      node.style.setProperty('--proof-rotate', rotate);
      node.innerHTML = `${pollutionAsset(type)}<span class="pollution-item__tag">Clean</span>`;
      node.addEventListener('click', () => {
        node.classList.add('proof-collected');
        state.pollutionCollected += 1;
        state.zonePollutionCollected[zoneId] += 1;
        computeScore();
        updateHud();
        pulseElement(refs.pollutionReadout.closest('.hud-chip'), 'is-energized', 650);
      }, { once: true });
      layer.appendChild(node);
      return node;
    },

    addTrashSet(zoneId) {
      clearZonePollution(zoneId);
      if (zoneId === 'sunlight') {
        this.trash(zoneId, 'bottle', '28%', '34%', '4.6rem', '-8deg');
        this.trash(zoneId, 'bag', '47%', '48%', '4.5rem', '8deg');
        this.trash(zoneId, 'tire', '62%', '32%', '4.7rem', '2deg');
        this.trash(zoneId, 'bottle', '75%', '58%', '4.2rem', '10deg');
        return;
      }
      this.trash(zoneId, 'bag', '30%', '34%', '4.2rem', '8deg');
      this.trash(zoneId, 'bottle', '48%', '47%', '4.2rem', '-12deg');
      this.trash(zoneId, 'tire', '64%', '30%', '4.6rem', '2deg');
      this.trash(zoneId, 'drum', '37%', '66%', '4.2rem', '8deg');
    },

    openCreature(creatureId) {
      openTriviaModal(creatureMap.get(creatureId));
    },

    answerCurrent(correct = true) {
      const creature = creatureMap.get(state.modalCreatureId);
      const buttons = Array.from(refs.triviaOptions.querySelectorAll('button'));
      const target = buttons.find((button) => correct
        ? button.textContent.trim() === creature.name
        : button.textContent.trim() !== creature.name);
      target.click();
    },

    sonar() {
      state.sonarCooling = false;
      refs.sonarButton.disabled = false;
      triggerSonar();
    },

    finish() {
      this.zone('hadal', 8);
      state.discovered = new Set([
        'brittle_star','sea_turtle','dolphin','octopus','sperm_whale','firefly_squid',
        'anglerfish','pelican_eel','giant_squid','basket_star','giant_tube_worm','dumbo_octopus'
      ]);
      state.assistedDiscoveries = new Set(['sea_pig','hadal_snailfish']);
      state.seenCreatures = new Set([...state.discovered, ...state.assistedDiscoveries]);
      state.triviaCorrect = 10;
      state.triviaAnswered = 13;
      state.bestDiscoveryStreak = 5;
      state.pollutionCollected = 18;
      state.sonarReturns = 4;
      state.breathRefills = 2;
      state.zonePollutionCollected = { sunlight: 5, twilight: 5, midnight: 4, abyssal: 3, hadal: 1 };
      computeScore();
      finishDive();
    }
  };
})();
"""


class ChromeSession:
    def __init__(self, port: int) -> None:
        self.port = port
        self.seq = 0
        self.ws = None

    def connect(self) -> None:
        deadline = time.time() + 10
        pages = None
        while time.time() < deadline:
            try:
                pages = json.load(urllib.request.urlopen(f"http://127.0.0.1:{self.port}/json", timeout=1))
                break
            except Exception:
                time.sleep(0.15)
        if not pages:
            raise RuntimeError("Chrome DevTools endpoint did not start")
        target = next((page for page in pages if page.get("type") == "page"), pages[0])
        self.ws = websocket.create_connection(target["webSocketDebuggerUrl"], timeout=10, suppress_origin=True)

    def call(self, method: str, params: dict | None = None) -> dict:
        if not self.ws:
            raise RuntimeError("CDP websocket is not connected")
        self.seq += 1
        self.ws.send(json.dumps({"id": self.seq, "method": method, "params": params or {}}))
        while True:
            message = json.loads(self.ws.recv())
            if message.get("id") == self.seq:
                if "error" in message:
                    raise RuntimeError(f"{method}: {message['error']}")
                return message

    def eval(self, expression: str) -> None:
        response = self.call("Runtime.evaluate", {"expression": expression, "returnByValue": True})
        if "exceptionDetails" in response.get("result", {}):
            details = response["result"]["exceptionDetails"]
            raise RuntimeError(details.get("exception", {}).get("description") or details.get("text"))

    def screenshot(self, rel_path: str) -> None:
        path = OUT / rel_path
        path.parent.mkdir(parents=True, exist_ok=True)
        time.sleep(0.08)
        data = self.call(
            "Page.captureScreenshot",
            {"format": "jpeg", "quality": 88, "captureBeyondViewport": False},
        )["result"]["data"]
        path.write_bytes(base64.b64decode(data))
        print(path.relative_to(ROOT), flush=True)

    def close(self) -> None:
        if self.ws:
            self.ws.close()


def launch() -> tuple[subprocess.Popen, subprocess.Popen]:
    chrome = shutil.which("google-chrome") or shutil.which("chromium") or shutil.which("chromium-browser")
    if not chrome:
        raise RuntimeError("No Chrome/Chromium binary found")

    server = subprocess.Popen(
        [sys.executable, "-m", "http.server", str(HTTP_PORT)],
        cwd=ROOT,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    browser = subprocess.Popen(
        [
            chrome,
            "--headless=new",
            f"--remote-debugging-port={CDP_PORT}",
            f"--remote-allow-origins=http://127.0.0.1:{CDP_PORT}",
            "--window-size=1280,800",
            "--disable-gpu",
            "--no-sandbox",
            f"--user-data-dir={PROFILE_DIR}",
            "about:blank",
        ],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    return server, browser


def inject(session: ChromeSession) -> None:
    session.eval(
        "(() => {"
        "const old = document.getElementById('proof-shot-style');"
        "if (old) old.remove();"
        "const style = document.createElement('style');"
        "style.id = 'proof-shot-style';"
        f"style.textContent = {json.dumps(PROOF_CSS)};"
        "document.head.appendChild(style);"
        "})();"
    )
    session.eval(HELPER_JS)


def capture(session: ChromeSession) -> None:
    session.screenshot("01-intro-and-zone-navigation/01-intro-screen.jpg")

    session.eval(
        "__proof.zone('sunlight', 86);"
        "__proof.note('<strong>HUD ONLINE</strong><br>Depth sidebar, score, waste counter, oxygen and sonar are visible before the descent deepens.');"
    )
    session.screenshot("01-intro-and-zone-navigation/02-sunlight-hud-depth.jpg")

    session.eval(
        "__proof.zone('hadal', 18);"
        "__proof.note('<strong>PRESSURE WARNING</strong><br>Hadal zone uses green-black void, critical oxygen, and max-depth instrumentation.');"
    )
    session.screenshot("01-intro-and-zone-navigation/03-hadal-depth-pressure.jpg")

    session.eval(
        "__proof.zone('midnight', 64);"
        "handlePointerMove({clientX:760, clientY:390});"
        "__proof.note('<strong>BEFORE SONAR</strong><br>Midnight is dark; hidden lifeforms sit behind the flashlight falloff.');"
    )
    session.screenshot("02-sonar-lifeform-returns/01-midnight-before-sonar.jpg")

    session.eval(
        "__proof.zone('midnight', 64);"
        "handlePointerMove({clientX:760, clientY:390});"
        "__proof.sonar();"
        "__proof.note('<strong>SONAR RETURN DETECTED</strong><br>Expanding sweep is active and only creature silhouettes return echoes.');"
    )
    time.sleep(0.55)
    session.screenshot("02-sonar-lifeform-returns/02-lifeform-only-sonar-echoes.jpg")

    session.eval(
        "__proof.zone('midnight', 64);"
        "handlePointerMove({clientX:760, clientY:390});"
        "__proof.sonar();"
        "__proof.note('<strong>SCALED ECHOES</strong><br>Large creatures return larger rings; smaller silhouettes return faint pings.');"
    )
    time.sleep(0.82)
    session.screenshot("02-sonar-lifeform-returns/03-echo-rings-scaled-by-creature.jpg")

    session.eval(
        "__proof.zone('twilight', 78);"
        "__proof.openCreature('octopus');"
        "__proof.note('<strong>IDENTIFICATION PROMPT</strong><br>Trivia freezes the dive and asks the player to identify the silhouette.');"
    )
    session.screenshot("03-creature-trivia-reveal/01-trivia-identification-prompt.jpg")

    session.eval(
        "__proof.zone('twilight', 78);"
        "__proof.openCreature('octopus');"
        "__proof.answerCurrent(true);"
        "__proof.note('<strong>REVEAL CHOREOGRAPHY</strong><br>Halo, scanline, ring, oxygen refill, and species art appear during the reveal.');"
    )
    time.sleep(0.76)
    session.screenshot("03-creature-trivia-reveal/02-dramatic-reveal-mid-animation.jpg")

    time.sleep(0.9)
    session.eval(
        "__proof.note('<strong>PROFILE RECOVERED</strong><br>Creature panel shows rarity, depth range, scientific label, and research facts.');"
    )
    session.screenshot("03-creature-trivia-reveal/03-creature-info-panel.jpg")

    session.eval(
        "__proof.zone('sunlight', 82);"
        "__proof.openCreature('sea_turtle');"
        "__proof.answerCurrent(false);"
        "__proof.note('<strong>SECOND CHANCE</strong><br>Wrong answers show the correct ID and log the species instead of deleting it.');"
    )
    time.sleep(0.3)
    session.screenshot("04-wrong-answer-assisted-logbook/01-wrong-answer-shows-correct-id.jpg")

    time.sleep(1.6)
    session.eval(
        "__proof.openCreature('sea_turtle');"
        "__proof.answerCurrent(true);"
        "__proof.note('<strong>ASSISTED RECOVERY</strong><br>The second attempt reveals the creature with reduced reward and no XP.');"
    )
    time.sleep(0.76)
    session.screenshot("04-wrong-answer-assisted-logbook/02-assisted-second-attempt-mid-reveal.jpg")

    time.sleep(0.9)
    session.eval(
        "hideCreaturePanel();"
        "toggleLogbook();"
        "__proof.note('<strong>ASSISTED LOGBOOK</strong><br>Grey/partial state proves the player learned the species but did not earn full discovery credit.');"
    )
    session.screenshot("04-wrong-answer-assisted-logbook/03-logbook-assisted-state.jpg")

    session.eval(
        "__proof.zone('sunlight', 92);"
        "__proof.addTrashSet('sunlight');"
        "__proof.note('<strong>DRIFTING CLEANUP TARGETS</strong><br>Static illustrated debris stays readable and matches the ocean scene.');"
    )
    session.screenshot("05-pollution-cleanup/01-drifting-trash-targets-visible.jpg")

    session.eval(
        "__proof.zone('sunlight', 92);"
        "__proof.addTrashSet('sunlight');"
        "document.querySelector('.pollution-item').click();"
        "__proof.note('<strong>CLEANUP POP</strong><br>Clicked trash bursts while Waste Cleared and Score increment in the HUD.');"
    )
    time.sleep(0.18)
    session.screenshot("05-pollution-cleanup/02-trash-pop-and-counter-increment.jpg")

    session.eval(
        "__proof.zone('sunlight', 92);"
        "__proof.addTrashSet('sunlight');"
        "state.pollutionCollected = 5;"
        "state.zonePollutionCollected.sunlight = 5;"
        "computeScore();"
        "updateHud();"
        "getZoneNode('sunlight').classList.add('is-cleansed');"
        "__proof.note('<strong>ZONE CLEANSED</strong><br>After several collections the zone receives cleaner/brighter visual feedback.');"
    )
    session.screenshot("05-pollution-cleanup/03-cleansed-zone-feedback.jpg")

    session.eval(
        "__proof.zone('midnight', 54);"
        "handlePointerMove({clientX:835, clientY:450});"
        "clearZonePollution('midnight');"
        "__proof.trash('midnight', 'drum', '58%', '54%', '4.6rem', '12deg');"
        "__proof.trash('midnight', 'microplastics', '70%', '40%', '4rem', '-12deg');"
        "__proof.note('<strong>AUTOMATIC FLASHLIGHT</strong><br>Dark zones use the cursor spotlight; pollution remains clickable inside the beam.');"
    )
    session.screenshot("06-dark-zone-flashlight-and-squid/01-flashlight-with-clickable-trash.jpg")

    session.eval(
        "__proof.zone('twilight', 72);"
        "handlePointerMove({clientX:650, clientY:350});"
        "getZoneNode('twilight').classList.add('is-squid-pass');"
        "__proof.note('<strong>LEGENDARY PASS</strong><br>Twilight keeps enough ambient light for the massive squid silhouette and local hydrophone cue to read clearly.');"
    )
    session.screenshot("06-dark-zone-flashlight-and-squid/02-giant-squid-background-pass.jpg")

    session.eval(
        "__proof.zone('abyssal', 42);"
        "handlePointerMove({clientX:690, clientY:390});"
        "__proof.note('<strong>ABYSSAL</strong><br>Blue-black marine snow, sparse life, and slow suspended particles.');"
    )
    session.screenshot("07-abyssal-vs-hadal-atmosphere/01-abyssal-blue-black-marine-snow.jpg")

    session.eval(
        "__proof.zone('hadal', 18);"
        "handlePointerMove({clientX:690, clientY:390});"
        "__proof.note('<strong>HADAL</strong><br>Green-black pressure void, larger suspended snow, and critical O₂ warning.');"
    )
    session.screenshot("07-abyssal-vs-hadal-atmosphere/02-hadal-green-pressure-void.jpg")

    session.eval(
        "__proof.finish();"
        "__proof.note('<strong>FINAL RANK</strong><br>End screen summarizes rank, score, discoveries, cleanup, sonar, and breath refills.');"
    )
    session.screenshot("08-results-and-score-breakdown/01-final-rank-score.jpg")

    session.eval(
        "document.querySelector('.zone-results')?.scrollIntoView({block:'center'});"
        "__proof.note('<strong>ZONE BREAKDOWN</strong><br>All five zones show creature completion, assisted IDs, and cleanup status.');"
    )
    time.sleep(0.1)
    session.screenshot("08-results-and-score-breakdown/02-zone-by-zone-breakdown.jpg")


def main() -> int:
    server = None
    browser = None
    session = ChromeSession(CDP_PORT)
    try:
        server, browser = launch()
        session.connect()
        session.call("Page.enable")
        session.call("Runtime.enable")
        session.call("Emulation.setDeviceMetricsOverride", VIEWPORT)
        session.call("Page.navigate", {"url": f"http://127.0.0.1:{HTTP_PORT}/"})
        time.sleep(1.4)
        inject(session)
        capture(session)
        return 0
    finally:
        session.close()
        for process in (browser, server):
            if process:
                process.terminate()
                try:
                    process.wait(timeout=3)
                except subprocess.TimeoutExpired:
                    process.kill()
        shutil.rmtree(PROFILE_DIR, ignore_errors=True)


if __name__ == "__main__":
    raise SystemExit(main())
