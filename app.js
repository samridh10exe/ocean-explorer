const zoneData = [
  {
    id: "sunlight",
    title: "Sunlight Zone",
    scientific: "Epipelagic",
    depthLabel: "0–200 m",
    targetDepth: 40,
    depthMarker: 2,
    description:
      "Light still reaches this layer. Caustic beams flicker overhead, and recognizable silhouettes move through clear blue water.",
    particleType: "surface",
    particleCount: 34,
    pollutionTypes: ["bottle", "takeout-box", "tire", "line"],
    oxygenDrainMultiplier: 0.72,
  },
  {
    id: "twilight",
    title: "Twilight Zone",
    scientific: "Mesopelagic",
    depthLabel: "200–1000 m",
    targetDepth: 620,
    depthMarker: 24,
    description:
      "The glow from above begins to fail. Bioluminescent sparks appear, and each reveal feels like turning on a light in the dark.",
    particleType: "bio",
    particleCount: 36,
    pollutionTypes: ["gear", "tire", "line"],
    oxygenDrainMultiplier: 0.94,
  },
  {
    id: "midnight",
    title: "Midnight Zone",
    scientific: "Bathypelagic",
    depthLabel: "1000–4000 m",
    targetDepth: 2450,
    depthMarker: 49,
    description:
      "No sunlight survives here. Creatures announce themselves with lures, flashes, and impossible outlines suspended in black water.",
    particleType: "bio",
    particleCount: 42,
    pollutionTypes: ["drum", "microplastics"],
    oxygenDrainMultiplier: 1.18,
  },
  {
    id: "abyssal",
    title: "Abyssal Zone",
    scientific: "Abyssopelagic",
    depthLabel: "4000–6000 m",
    targetDepth: 5100,
    depthMarker: 74,
    description:
      "Marine snow drifts through a pressure-crushed quiet. The scene is almost empty until a hidden body turns and catches the dark.",
    particleType: "snow",
    particleCount: 54,
    pollutionTypes: ["debris", "microplastics"],
    oxygenDrainMultiplier: 1.42,
  },
  {
    id: "hadal",
    title: "Hadal Zone",
    scientific: "Hadalpelagic",
    depthLabel: "6000–11000 m",
    targetDepth: 10920,
    depthMarker: 98,
    description:
      "The trench is a void. The instrument stack strains, the oxygen alarm never settles, and life appears only as a ghostly interruption of the black.",
    particleType: "snow",
    particleCount: 32,
    pollutionTypes: ["container", "microplastics"],
    oxygenDrainMultiplier: 1.86,
  },
];

const creatureData = [
  {
    id: "brittle_star",
    zone: "sunlight",
    name: "Brittle Star",
    rarity: "Common",
    depthRange: "0–200 m",
    zoneLabel: "Epipelagic Shelf",
    facts: [
      "A close relative of starfish, but built with whip-fast arms instead of a rigid star body.",
      "Can drop an arm to escape a predator and regenerate it later.",
      "Moves by rowing its limbs rather than gliding on tube feet.",
    ],
    wrongAnswers: ["Sea Urchin", "Velvet Crab"],
    assetPath: "assets/sunlight_brittle_star.png",
    idleAnimation: "stationary",
    bioColor: "var(--bio-blue)",
    points: 5,
    position: { top: "68%", left: "18%", width: "clamp(6rem, 9vw, 8.5rem)" },
  },
  {
    id: "sea_turtle",
    zone: "sunlight",
    name: "Sea Turtle",
    rarity: "Common",
    depthRange: "0–200 m",
    zoneLabel: "Epipelagic Migrator",
    facts: [
      "Sea turtles trace lineages back more than 200 million years.",
      "Their shells grow with them throughout life, recording age in layered scutes.",
      "Depending on species, they feed on seagrass, jellyfish, crabs, and even floating debris.",
    ],
    wrongAnswers: ["Freshwater Snapper", "Leatherback Lizard"],
    assetPath: "assets/sunlight_turtle.png",
    idleAnimation: "fish",
    bioColor: "var(--bio-blue)",
    points: 5,
    position: { top: "46%", left: "57%", width: "clamp(9rem, 16vw, 12rem)" },
  },
  {
    id: "dolphin",
    zone: "sunlight",
    name: "Dolphin",
    rarity: "Common",
    depthRange: "0–200 m",
    zoneLabel: "Surface Hunter",
    facts: [
      "Some species can leap more than twenty feet into the air.",
      "Dolphins can recognize themselves in a mirror and use signature whistles like names.",
      "They hold some of the longest social memories known in the ocean.",
    ],
    wrongAnswers: ["Porpoise", "Beluga Whale"],
    assetPath: "assets/sunlight_dolphin.png",
    idleAnimation: "fish",
    bioColor: "var(--bio-blue)",
    points: 5,
    position: { top: "24%", left: "28%", width: "clamp(12rem, 22vw, 16rem)" },
  },
  {
    id: "octopus",
    zone: "twilight",
    name: "Octopus",
    rarity: "Common",
    depthRange: "200–1000 m",
    zoneLabel: "Mesopelagic Cephalopod",
    facts: [
      "Octopuses can squeeze through gaps barely larger than their beaks.",
      "Their skin can change both color and texture to match nearby surfaces.",
      "All species are venomous, though only a handful are dangerous to humans.",
    ],
    wrongAnswers: ["Cuttlefish", "Squid"],
    assetPath: "assets/twilight_octopus.png",
    idleAnimation: "cephalopod",
    bioColor: "var(--bio-blue)",
    points: 5,
    position: { top: "58%", left: "22%", width: "clamp(10rem, 18vw, 15rem)" },
  },
  {
    id: "sperm_whale",
    zone: "twilight",
    name: "Sperm Whale",
    rarity: "Rare",
    depthRange: "200–1000 m",
    zoneLabel: "Mesopelagic Apex Diver",
    facts: [
      "Sperm whales dive toward the midnight zone to hunt giant squid and other deep prey.",
      "Females travel in pods, while mature males spend much of the year alone.",
      "Their sonar clicks are among the loudest biological sounds on Earth.",
    ],
    wrongAnswers: ["Blue Whale", "Humpback Whale"],
    assetPath: "assets/twilight_sperm_whale.png",
    idleAnimation: "whale",
    bioColor: "var(--bio-blue)",
    points: 7,
    position: { top: "16%", left: "4%", width: "clamp(19rem, 34vw, 30rem)" },
  },
  {
    id: "firefly_squid",
    zone: "twilight",
    name: "Firefly Squid",
    rarity: "Common",
    depthRange: "200–1000 m",
    zoneLabel: "Mesopelagic Bioluminescent",
    facts: [
      "Its body flashes with blue light produced by dense photophores.",
      "The glow can confuse predators, attract mates, and help it hunt in dim water.",
      "When vast schools rise at night, the sea surface can shimmer like a star field.",
    ],
    wrongAnswers: ["Jewel Squid", "Hatchetfish"],
    assetPath: "assets/twilight_firefly_squid.png",
    idleAnimation: "jelly",
    bioColor: "var(--bio-amber)",
    points: 5,
    position: { top: "54%", left: "70%", width: "clamp(8rem, 12vw, 10rem)" },
  },
  {
    id: "anglerfish",
    zone: "midnight",
    name: "Anglerfish",
    rarity: "Rare",
    depthRange: "1000–4000 m",
    zoneLabel: "Bathypelagic Lure Hunter",
    facts: [
      "Its lure can be hidden or illuminated on command to bait prey in darkness.",
      "The teeth are recurved inward, making escape nearly impossible once prey is bitten.",
      "In several species, tiny males fuse permanently onto the much larger female.",
    ],
    wrongAnswers: ["Dragonfish", "Viperfish"],
    assetPath: "assets/midnight_anglerfish.png",
    idleAnimation: "fish",
    bioColor: "var(--bio-amber)",
    points: 7,
    position: { top: "53%", left: "20%", width: "clamp(8.5rem, 12vw, 10rem)" },
  },
  {
    id: "pelican_eel",
    zone: "midnight",
    name: "Pelican Eel",
    rarity: "Rare",
    depthRange: "1000–4000 m",
    zoneLabel: "Bathypelagic Ambush Eel",
    facts: [
      "Its lower jaw forms a huge pouch that can balloon to swallow prey larger than expected.",
      "A glowing tail organ may lure animals into range from the darkness below.",
      "Its body looks fragile, but it is perfectly suited to the pressure and scarcity of deep water.",
    ],
    wrongAnswers: ["Moray Eel", "Ribbon Eel"],
    assetPath: "assets/midnight_pelican_eel.png",
    idleAnimation: "eel",
    bioColor: "var(--bio-cyan)",
    points: 7,
    position: { top: "42%", left: "61%", width: "clamp(11rem, 16vw, 13rem)" },
  },
  {
    id: "giant_squid",
    zone: "midnight",
    name: "Giant Squid",
    rarity: "Legendary",
    depthRange: "1000–4000 m",
    zoneLabel: "Bathypelagic Giant",
    facts: [
      "The largest confirmed individuals stretch well beyond forty feet in total length.",
      "Its eyes are the biggest in the animal kingdom, built to catch faint movement in black water.",
      "Scars on sperm whales hint at a long-running clash between these giants below the lightless sea.",
    ],
    wrongAnswers: ["Colossal Squid", "Humboldt Squid"],
    assetPath: "assets/midnight_giant_squid.png",
    idleAnimation: "cephalopod",
    bioColor: "var(--bio-cyan)",
    points: 10,
    position: { top: "22%", left: "34%", width: "clamp(18rem, 36vw, 30rem)" },
    hitbox: { inset: "-18% -10% -24%" },
  },
  {
    id: "basket_star",
    zone: "abyssal",
    name: "Basket Star",
    rarity: "Rare",
    depthRange: "4000–6000 m",
    zoneLabel: "Abyssal Echinoderm",
    facts: [
      "Its branching arms split again and again into an intricate feeding net.",
      "Basket stars depend on passing currents to deliver edible particles.",
      "When disturbed, the whole animal folds inward like a living knot.",
    ],
    wrongAnswers: ["Sea Spider", "Sea Pen"],
    assetPath: "assets/abyssal_basket_star.png",
    idleAnimation: "stationary",
    bioColor: "var(--bio-blue)",
    points: 7,
    position: { top: "62%", left: "25%", width: "clamp(7rem, 9vw, 8rem)" },
  },
  {
    id: "sea_pig",
    zone: "abyssal",
    name: "Sea Pig",
    rarity: "Common",
    depthRange: "4000–6000 m",
    zoneLabel: "Abyssal Sediment Grazer",
    facts: [
      "Sea pigs are deep-sea cucumbers that stride across mud on tube-like feet.",
      "They gather in large herds wherever organic fallout collects on the seafloor.",
      "Their translucent bodies can reveal internal structures when light passes through.",
    ],
    wrongAnswers: ["Sea Cucumber", "Sea Slug"],
    assetPath: "assets/abyssal_sea_pig.png",
    idleAnimation: "stationary",
    bioColor: "var(--bio-blue)",
    points: 5,
    position: { top: "56%", left: "64%", width: "clamp(8rem, 10vw, 9rem)" },
  },
  {
    id: "giant_tube_worm",
    zone: "hadal",
    name: "Giant Tube Worm",
    rarity: "Rare",
    depthRange: "6000–11000 m",
    zoneLabel: "Hadal Vent Colony",
    facts: [
      "Tube worms thrive near hydrothermal vents where sunlight never reaches.",
      "They can grow several feet tall and live without a mouth or digestive system.",
      "Symbiotic bacteria inside the body turn vent chemicals into food.",
    ],
    wrongAnswers: ["Polychaete Worm", "Bristle Worm"],
    assetPath: "assets/hadal_tube_worm.png",
    idleAnimation: "worm",
    bioColor: "var(--bio-green)",
    points: 7,
    position: { top: "42%", left: "16%", width: "clamp(6rem, 9vw, 8rem)" },
  },
  {
    id: "dumbo_octopus",
    zone: "hadal",
    name: "Dumbo Octopus",
    rarity: "Legendary",
    depthRange: "6000–11000 m",
    zoneLabel: "Hadal Cephalopod",
    facts: [
      "The ear-like fins on its head inspired the Dumbo nickname.",
      "It is among the deepest-living octopuses ever observed.",
      "Instead of tearing prey apart, it swallows small animals whole.",
    ],
    wrongAnswers: ["Flapjack Octopus", "Vampire Squid"],
    assetPath: "assets/hadal_dumbo_octopus.png",
    idleAnimation: "cephalopod",
    bioColor: "var(--bio-green)",
    points: 10,
    position: { top: "38%", left: "58%", width: "clamp(7rem, 9vw, 8rem)" },
  },
  {
    id: "hadal_snailfish",
    zone: "hadal",
    name: "Hadal Snailfish",
    rarity: "Common",
    depthRange: "6000–11000 m",
    zoneLabel: "Hadal Trench Specialist",
    facts: [
      "This soft-bodied fish survives pressures that would crush most vertebrates.",
      "Its body chemistry is tuned to keep proteins working under extreme compression.",
      "Scientists have filmed snailfish living deeper than nearly any other fish on Earth.",
    ],
    wrongAnswers: ["Hadal Amphipod", "Sea Angel"],
    assetPath: "assets/hadal_snailfish.png",
    idleAnimation: "fish",
    bioColor: "var(--bio-blue)",
    points: 5,
    position: { top: "65%", left: "74%", width: "clamp(9rem, 12vw, 10rem)" },
  },
];

const pollutionPalette = {
  bottle: { main: "#8d9188", shade: "#5d625d", line: "#343a36", alpha: 0.76 },
  "takeout-box": { main: "#878a80", shade: "#5b5d55", line: "#30332e", alpha: 0.76 },
  tire: { main: "#383b35", shade: "#20241f", line: "#111410", alpha: 0.78 },
  line: { main: "#726d63", shade: "#4c4a45", line: "#2e302e", alpha: 0.72 },
  gear: { main: "#6d7069", shade: "#464941", line: "#252924", alpha: 0.78 },
  drum: { main: "#6f7047", shade: "#4c3f2d", line: "#27281d", rust: "#8a4f34", alpha: 0.82 },
  microplastics: { main: "#898b82", shade: "#63665e", line: "#3f443d", alpha: 0.68 },
  debris: { main: "#676759", shade: "#48483e", line: "#262820", rust: "#76523a", alpha: 0.8 },
  container: { main: "#5e5f4c", shade: "#3f4034", line: "#20231d", rust: "#7a4632", alpha: 0.76 },
};

const pollutionSpritePaths = {
  bottle: "assets/pollution/bottle2idle.png",
  "takeout-box": "assets/pollution/boxidle.png",
  tire: "assets/pollution/tireidle.png",
  gear: "assets/pollution/fishing-hook.png",
};

const pollutionZoneSettings = {
  sunlight: { initial: 8, respawn: 360, duration: [8.5, 12.5], size: [3.2, 5.0], drift: [-10, 14] },
  twilight: { initial: 5, respawn: 680, duration: [12.5, 17.5], size: [3.4, 5.4], drift: [-14, 10] },
  midnight: { initial: 3, respawn: 1200, duration: [17.5, 24], size: [3.0, 4.8], drift: [-8, 8] },
  abyssal: { initial: 2, respawn: 1800, duration: [24, 32], size: [2.6, 4.4], drift: [-5, 5] },
  hadal: { initial: 2, respawn: 2400, duration: [30, 40], size: [2.4, 4.2], drift: [-3, 3] },
};

const pollutionTypeSettings = {
  bottle: { sizeBoost: 1.05 },
  "takeout-box": { sizeBoost: 1.08 },
  tire: { sizeBoost: 1.02 },
  line: { sizeBoost: 1.1 },
  gear: { sizeBoost: 0.95 },
  drum: { sizeBoost: 1.1 },
  microplastics: { sizeBoost: 0.72 },
};

const SONAR_ACTIVE_MS = 1700;
const SONAR_COOLDOWN_MS = 4200;
const BREATH_THRESHOLD = 0.075;
const BREATH_HOLD_MS = 360;
const BREATH_COOLDOWN_MS = 4600;
const BREATH_OXYGEN_REWARD = 14;
const ASSISTED_OXYGEN_REWARD = 6;
const FLASHLIGHT_ZONES = new Set(["midnight", "abyssal", "hadal"]);
const SQUID_PASS_ZONE = "twilight";
const SQUID_PASS_DELAY_MS = 10000;
const SQUID_PASS_DURATION_MS = 22000;
const SQUID_PASS_AUDIO_PATH = "assets/audio/noaa_bloop.wav";

const ambientAudioProfiles = {
  sunlight: {
    master: 0.18,
    filterFrequency: 1300,
    noise: 0.16,
    rumble: 0.028,
    drift: 0.03,
    eventType: "bubble",
    eventEvery: [2200, 4200],
  },
  twilight: {
    master: 0.23,
    filterFrequency: 920,
    noise: 0.19,
    rumble: 0.045,
    drift: 0.045,
    eventType: "bubble",
    eventEvery: [3600, 6200],
  },
  midnight: {
    master: 0.27,
    filterFrequency: 560,
    noise: 0.18,
    rumble: 0.078,
    drift: 0.055,
    eventType: "whale",
    eventEvery: [7600, 12800],
  },
  abyssal: {
    master: 0.29,
    filterFrequency: 380,
    noise: 0.16,
    rumble: 0.095,
    drift: 0.04,
    eventType: "pressure",
    eventEvery: [9000, 15000],
  },
  hadal: {
    master: 0.32,
    filterFrequency: 270,
    noise: 0.14,
    rumble: 0.12,
    drift: 0.035,
    eventType: "pressure",
    eventEvery: [6500, 11800],
  },
};

const state = {
  started: false,
  ended: false,
  currentZone: 0,
  currentDepth: 0,
  oxygen: 100,
  score: 0,
  triviaCorrect: 0,
  pollutionCollected: 0,
  pollutionCombo: 0,
  discovered: new Set(),
  seenCreatures: new Set(),
  assistedDiscoveries: new Set(),
  missedCreatures: new Set(),
  creatureAttempts: new Map(),
  zonePollutionMisses: Object.fromEntries(zoneData.map((zone) => [zone.id, 0])),
  zonePollutionCollected: Object.fromEntries(zoneData.map((zone) => [zone.id, 0])),
  transitionLocked: false,
  triviaState: "idle",
  modalCreatureId: null,
  particleSeeded: false,
  zoneTargetIndex: 0,
  bestDiscoveryStreak: 0,
  discoveryStreak: 0,
  logbookFilter: "all",
  sonarCooling: false,
  sonarReturns: 0,
  breathCooling: false,
  breathLevel: 0,
  breathPeak: 0,
  breathHoldMs: 0,
  breathRefills: 0,
  flashlightX: 52,
  flashlightY: 52,
  tiltNavigationCooling: false,
  orientationEnabled: false,
  audioEnabled: false,
  squidEasterEggShown: false,
};

const ui = {
  cleanup: [],
  pollutionCleanup: new Map(),
  pollutionTimers: new Map(),
  sonarTimers: new Set(),
  breathStream: null,
  breathContext: null,
  breathAnalyser: null,
  breathData: null,
  breathFrame: 0,
  lastBreathTimestamp: 0,
  breathCooldownTimer: 0,
  hydrophoneContext: null,
  hydrophoneGain: null,
  hydrophoneTimer: 0,
  ambientFilter: null,
  ambientNoiseGain: null,
  ambientRumbleGain: null,
  ambientDriftGain: null,
  ambientNoiseSource: null,
  ambientRumbleOsc: null,
  ambientDriftOsc: null,
  squidCueAudio: null,
  squidPassDelayTimer: 0,
  squidPassTimer: 0,
  tiltTimer: 0,
  depthAnimationFrame: 0,
  loopFrame: 0,
  lastTimestamp: 0,
  touchStartY: 0,
};

const refs = {
  introScreen: document.querySelector("#intro-screen"),
  startButton: document.querySelector("#start-button"),
  gameContainer: document.querySelector("#game-container"),
  zoneStage: document.querySelector("#zone-stage"),
  zones: Array.from(document.querySelectorAll(".zone")),
  depthReadout: document.querySelector("#depth-readout"),
  depthScaleMarker: document.querySelector("#depth-scale-marker"),
  o2Readout: document.querySelector("#o2-readout"),
  o2Fill: document.querySelector("#o2-fill"),
  o2Meter: document.querySelector(".o2-meter"),
  zoneReadout: document.querySelector("#zone-readout"),
  scoreReadout: document.querySelector("#score-readout"),
  pollutionReadout: document.querySelector("#pollution-readout"),
  breathChip: document.querySelector("#breath-chip"),
  breathReadout: document.querySelector("#breath-readout"),
  sonarButton: document.querySelector("#sonar-button"),
  sonarStatus: document.querySelector("#sonar-status"),
  announcer: document.querySelector("#announcer"),
  triviaModal: document.querySelector("#trivia-modal"),
  triviaZone: document.querySelector("#trivia-zone"),
  triviaTitle: document.querySelector("#trivia-title"),
  triviaPrompt: document.querySelector("#trivia-prompt"),
  triviaOptions: document.querySelector("#trivia-options"),
  triviaFeedback: document.querySelector("#trivia-feedback"),
  triviaClose: document.querySelector("#trivia-close"),
  logbookButton: document.querySelector("#logbook-button"),
  logbookPanel: document.querySelector("#logbook-panel"),
  logbookClose: document.querySelector("#logbook-close"),
  logbookGrid: document.querySelector("#logbook-grid"),
  rarityFilterButtons: Array.from(document.querySelectorAll(".rarity-filter")),
  creaturePanel: document.querySelector("#creature-panel"),
  creaturePanelClose: document.querySelector("#creature-panel-close"),
  creaturePanelZone: document.querySelector("#creature-panel-zone"),
  creaturePanelName: document.querySelector("#creature-panel-name"),
  creaturePanelDepth: document.querySelector("#creature-panel-depth"),
  creaturePanelRarity: document.querySelector("#creature-panel-rarity"),
  creaturePanelFacts: document.querySelector("#creature-panel-facts"),
  uiOverlay: document.querySelector("#ui-overlay"),
  endScreen: document.querySelector("#end-screen"),
  endTitle: document.querySelector("#end-title"),
  endScore: document.querySelector("#end-score"),
  endBreakdown: document.querySelector("#end-breakdown"),
  shareButton: document.querySelector("#share-button"),
  shareFeedback: document.querySelector("#share-feedback"),
  restartButton: document.querySelector("#restart-button"),
};

const creatureMap = new Map(creatureData.map((creature) => [creature.id, creature]));
const zoneMap = new Map(zoneData.map((zone) => [zone.id, zone]));

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  seedZones();
  renderCreatures();
  renderLogbook();
  bindStaticEvents();
  setZoneVisualState(0);
  animateDepthReadout(0, zoneData[0].targetDepth, zoneData[0].depthMarker);
  updateHud();
}

function bindStaticEvents() {
  on(refs.startButton, "click", startGame);
  on(window, "wheel", handleWheel, { passive: false });
  on(window, "keydown", handleKeydown);
  on(window, "pointermove", handlePointerMove, { passive: true });
  on(window, "touchstart", handleTouchStart, { passive: true });
  on(window, "touchend", handleTouchEnd, { passive: true });
  on(refs.zoneStage, "transitionend", handleTransitionEnd);
  on(refs.triviaClose, "click", closeTriviaModal);
  on(refs.sonarButton, "click", triggerSonar);
  on(refs.breathChip, "click", startBreathDetection);
  on(refs.logbookButton, "click", toggleLogbook);
  on(refs.logbookClose, "click", closeLogbook);
  refs.rarityFilterButtons.forEach((button) => {
    on(button, "click", () => setLogbookFilter(button.dataset.rarity));
  });
  on(refs.creaturePanelClose, "click", hideCreaturePanel);
  on(refs.uiOverlay, "click", () => {
    closeLogbook();
    closeTriviaModal();
  });
  on(refs.shareButton, "click", copyShareText);
  on(refs.restartButton, "click", restartGame);
  on(document, "visibilitychange", handleVisibilityChange);
}

function seedZones() {
  refs.zones.forEach((zoneEl) => {
    const zone = zoneMap.get(zoneEl.dataset.zone);
    zoneEl.querySelector(".zone__eyebrow").textContent = zone.scientific;
    zoneEl.querySelector(".zone__title").textContent = zone.title;
    zoneEl.querySelector(".zone__depth").textContent = zone.depthLabel;
    zoneEl.querySelector(".zone__description").textContent = zone.description;
    createParticles(zoneEl, zone);
  });
}

function renderCreatures() {
  refs.zones.forEach((zoneEl) => {
    const layer = zoneEl.querySelector(".zone__creatures");
    layer.innerHTML = "";
    const creatures = creatureData.filter((creature) => creature.zone === zoneEl.dataset.zone);
    creatures.forEach((creature, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `creature creature--${creature.idleAnimation} ${creature.zone !== "sunlight" ? "bioluminescent" : ""}`;
      button.dataset.creatureId = creature.id;
      button.setAttribute("aria-label", `Unknown silhouette in ${zoneMap.get(creature.zone).title}`);
      button.style.setProperty("--top", creature.position.top);
      button.style.setProperty("--left", creature.position.left);
      button.style.setProperty("--width", creature.position.width);
      if (creature.hitbox) {
        button.style.setProperty("--hitbox-inset", creature.hitbox.inset);
      }
      button.style.setProperty("--bio-color", creature.bioColor);
      button.style.setProperty("--delay", `${index * 0.6}s`);
      button.innerHTML = `
        <span class="creature__hint" aria-hidden="true">?</span>
        <img class="creature__img" src="${creature.assetPath}" alt="" draggable="false" />
      `;
      on(button, "click", () => handleCreatureClick(creature.id));
      layer.appendChild(button);
    });
    if (zoneEl.dataset.zone === SQUID_PASS_ZONE) {
      renderLegendaryPass(layer);
    }
  });
}

function renderLegendaryPass(layer) {
  const giantSquid = creatureMap.get("giant_squid");
  const pass = document.createElement("div");
  pass.className = "legendary-pass";
  pass.setAttribute("aria-hidden", "true");
  pass.innerHTML = `<img src="${giantSquid.assetPath}" alt="" draggable="false" />`;
  layer.appendChild(pass);
}

function renderLogbook() {
  refs.logbookGrid.innerHTML = "";
  refs.rarityFilterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.rarity === state.logbookFilter);
    button.setAttribute("aria-pressed", String(button.dataset.rarity === state.logbookFilter));
  });

  const visibleCreatures = creatureData.filter(
    (creature) => state.logbookFilter === "all" || creature.rarity === state.logbookFilter
  );

  visibleCreatures.forEach((creature) => {
    const found = state.discovered.has(creature.id);
    const assisted = state.assistedDiscoveries.has(creature.id);
    const seen = state.seenCreatures.has(creature.id) || assisted;
    const visibleName = found || seen ? creature.name : "Undiscovered";
    const status = found ? "Profile recovered" : assisted ? "Assisted ID // no XP" : seen ? "Signal logged // retry" : "Silhouette only";
    const card = document.createElement("article");
    card.className = `logbook-card ${found ? "is-found" : assisted ? "is-assisted" : seen ? "is-seen" : ""}`;
    card.dataset.rarity = creature.rarity;
    card.innerHTML = `
      <div class="logbook-card__art">
        <img src="${creature.assetPath}" alt="${visibleName === "Undiscovered" ? "Undiscovered creature" : visibleName}" />
      </div>
      <p class="logbook-card__name">${visibleName}</p>
      <p class="logbook-card__meta">${zoneMap.get(creature.zone).title} • ${creature.rarity}</p>
      <p class="logbook-card__status">${status}</p>
    `;
    refs.logbookGrid.appendChild(card);
  });
}

function startGame() {
  if (state.started) {
    return;
  }
  startBreathDetection();
  enableOrientationInput();
  enableHydrophoneAudio();
  resumeAudioSystems();
  state.started = true;
  refs.introScreen.hidden = true;
  refs.gameContainer.classList.add("is-active");
  refs.gameContainer.setAttribute("aria-hidden", "false");
  setZoneImmediate(0);
  startLoop();
  activateZone(zoneData[0].id);
  refs.startButton.blur();
  announce(`${zoneData[0].title}. Oxygen online.`);
}

function startLoop() {
  cancelAnimationFrame(ui.loopFrame);
  ui.lastTimestamp = 0;
  const tick = (timestamp) => {
    if (!state.started || state.ended) {
      return;
    }
    if (!ui.lastTimestamp) {
      ui.lastTimestamp = timestamp;
    }
    const delta = timestamp - ui.lastTimestamp;
    ui.lastTimestamp = timestamp;

    if (!document.hidden && state.triviaState === "idle") {
      const drain = (delta / 3000) * zoneData[state.currentZone].oxygenDrainMultiplier;
      setOxygen(state.oxygen - drain);
    }

    ui.loopFrame = requestAnimationFrame(tick);
  };
  ui.loopFrame = requestAnimationFrame(tick);
}

function handleVisibilityChange() {
  if (document.hidden) {
    ui.lastTimestamp = 0;
  }
}

async function startBreathDetection() {
  if (!window.isSecureContext) {
    refs.breathReadout.textContent = "HTTPS mic";
    refs.breathChip.classList.add("is-muted");
    return;
  }

  if (!navigator.mediaDevices?.getUserMedia || ui.breathAnalyser) {
    if (!navigator.mediaDevices?.getUserMedia) {
      refs.breathReadout.textContent = "No mic";
      refs.breathChip.classList.add("is-muted");
    }
    return;
  }

  refs.breathReadout.textContent = "Request";
  refs.breathChip.classList.remove("is-muted");
  try {
    const stream = await requestBreathStream();
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      refs.breathReadout.textContent = "No audio";
      refs.breathChip.classList.add("is-muted");
      stream.getTracks().forEach((track) => track.stop());
      return;
    }

    ui.breathStream = stream;
    ui.breathContext = new AudioContextClass();
    if (ui.breathContext.state === "suspended") {
      await ui.breathContext.resume();
    }
    const source = ui.breathContext.createMediaStreamSource(stream);
    ui.breathAnalyser = ui.breathContext.createAnalyser();
    ui.breathAnalyser.fftSize = 1024;
    ui.breathAnalyser.smoothingTimeConstant = 0.68;
    ui.breathData = new Uint8Array(ui.breathAnalyser.fftSize);
    source.connect(ui.breathAnalyser);
    refs.breathReadout.textContent = "Listening";
    refs.breathChip.classList.remove("is-muted");
    refs.breathChip.classList.add("is-listening");
    tickBreathDetection(0);
  } catch (error) {
    refs.breathReadout.textContent = error?.name === "NotAllowedError" ? "Mic blocked" : "Tap retry";
    refs.breathChip.classList.add("is-muted");
  }
}

async function requestBreathStream() {
  try {
    return await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false,
      },
    });
  } catch (error) {
    if (error?.name === "NotAllowedError") {
      throw error;
    }
    return navigator.mediaDevices.getUserMedia({ audio: true });
  }
}

function tickBreathDetection(timestamp) {
  if (!ui.breathAnalyser || state.ended) {
    return;
  }

  ui.breathAnalyser.getByteTimeDomainData(ui.breathData);
  let sumSquares = 0;
  for (let index = 0; index < ui.breathData.length; index += 1) {
    const normalized = (ui.breathData[index] - 128) / 128;
    sumSquares += normalized * normalized;
  }

  const level = Math.sqrt(sumSquares / ui.breathData.length);
  const delta = ui.lastBreathTimestamp ? timestamp - ui.lastBreathTimestamp : 16;
  ui.lastBreathTimestamp = timestamp;
  state.breathLevel = level;
  state.breathPeak = Math.max(level, state.breathPeak * 0.96);
  refs.breathChip.style.setProperty("--breath-level", clamp(level / 0.22, 0, 1).toFixed(3));

  if (state.started && !document.hidden && !state.breathCooling && level > BREATH_THRESHOLD) {
    state.breathHoldMs += delta;
    refs.breathReadout.textContent = "Hold";
    if (state.breathHoldMs >= BREATH_HOLD_MS) {
      refillOxygenFromBreath();
    }
  } else if (!state.breathCooling) {
    state.breathHoldMs = Math.max(0, state.breathHoldMs - delta * 1.4);
    refs.breathReadout.textContent = level > BREATH_THRESHOLD * 0.62 ? "Signal" : "Listening";
  }

  ui.breathFrame = requestAnimationFrame(tickBreathDetection);
}

function refillOxygenFromBreath() {
  state.breathCooling = true;
  state.breathHoldMs = 0;
  state.breathRefills += 1;
  setOxygen(state.oxygen + BREATH_OXYGEN_REWARD);
  refs.breathReadout.textContent = "Breath";
  refs.breathChip.classList.add("is-breath-detected");
  refs.o2Meter.classList.add("is-breath-refill");
  renderBubbleBurst();
  announce(`Breath detected. Oxygen refilled by ${BREATH_OXYGEN_REWARD} percent.`);

  window.setTimeout(() => {
    refs.breathChip.classList.remove("is-breath-detected");
    refs.o2Meter.classList.remove("is-breath-refill");
  }, 1300);

  clearTimeout(ui.breathCooldownTimer);
  ui.breathCooldownTimer = window.setTimeout(() => {
    state.breathCooling = false;
    refs.breathReadout.textContent = "Listening";
  }, BREATH_COOLDOWN_MS);
}

function renderBubbleBurst() {
  const bubbleLayer = document.createElement("div");
  bubbleLayer.className = "o2-bubble-burst";
  for (let index = 0; index < 16; index += 1) {
    const bubble = document.createElement("span");
    bubble.style.setProperty("--bubble-x", `${-1.2 + Math.random() * 2.4}rem`);
    bubble.style.setProperty("--bubble-y", `${-1.5 - Math.random() * 5.2}rem`);
    bubble.style.setProperty("--bubble-size", `${0.24 + Math.random() * 0.42}rem`);
    bubble.style.setProperty("--bubble-delay", `${Math.random() * 120}ms`);
    bubbleLayer.appendChild(bubble);
  }
  refs.o2Meter.appendChild(bubbleLayer);
  const removeLayer = () => bubbleLayer.remove();
  bubbleLayer.addEventListener("animationend", removeLayer, { once: true });
}

function handleWheel(event) {
  if (!state.started || state.ended || state.transitionLocked || state.triviaState !== "idle" || isPanelOpen()) {
    return;
  }
  if (Math.abs(event.deltaY) < 18) {
    return;
  }
  event.preventDefault();
  if (event.deltaY > 0) {
    navigateToZone(state.currentZone + 1);
  } else {
    navigateToZone(state.currentZone - 1);
  }
}

function handleKeydown(event) {
  if (!state.started || state.ended) {
    return;
  }

  if (event.key === "Escape") {
    closeTriviaModal();
    closeLogbook();
    hideCreaturePanel();
    return;
  }

  if (state.transitionLocked || state.triviaState !== "idle" || isPanelOpen()) {
    return;
  }

  if (event.key === " ") {
    event.preventDefault();
    triggerSonar();
    return;
  }

  if (["ArrowDown", "PageDown"].includes(event.key)) {
    event.preventDefault();
    navigateToZone(state.currentZone + 1);
  }
  if (["ArrowUp", "PageUp"].includes(event.key)) {
    event.preventDefault();
    navigateToZone(state.currentZone - 1);
  }
}

function handlePointerMove(event) {
  if (!state.started || state.ended) {
    return;
  }
  updateFlashlightPosition(event.clientX, event.clientY);
}

function updateFlashlightPosition(clientX, clientY) {
  const zoneId = zoneData[state.currentZone]?.id;
  if (!FLASHLIGHT_ZONES.has(zoneId)) {
    return;
  }
  const sidebarOffset = window.innerWidth > 900 ? 192 : 92;
  const stageWidth = Math.max(1, window.innerWidth - sidebarOffset);
  state.flashlightX = clamp(((clientX - sidebarOffset) / stageWidth) * 100, 0, 100);
  state.flashlightY = clamp((clientY / window.innerHeight) * 100, 0, 100);
  applyFlashlightPosition();
}

function applyFlashlightPosition(activeZone = refs.zones[state.currentZone]) {
  if (!activeZone) {
    return;
  }
  activeZone.style.setProperty("--spotlight-x", `${state.flashlightX}%`);
  activeZone.style.setProperty("--spotlight-y", `${state.flashlightY}%`);
}

async function enableOrientationInput() {
  if (!("DeviceOrientationEvent" in window)) {
    return;
  }

  try {
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      const permission = await DeviceOrientationEvent.requestPermission();
      if (permission !== "granted") {
        return;
      }
    }
    if (!state.orientationEnabled) {
      on(window, "deviceorientation", handleDeviceOrientation, { passive: true });
      state.orientationEnabled = true;
    }
  } catch (error) {
    state.orientationEnabled = false;
  }
}

function handleDeviceOrientation(event) {
  if (!state.started || state.ended || state.transitionLocked || state.triviaState !== "idle" || isPanelOpen()) {
    return;
  }

  const beta = typeof event.beta === "number" ? event.beta : 0;
  const gamma = typeof event.gamma === "number" ? event.gamma : 0;
  const zoneId = zoneData[state.currentZone]?.id;
  if (FLASHLIGHT_ZONES.has(zoneId)) {
    const nextX = 50 + gamma * 1.4;
    const nextY = 50 + (beta - 35) * 1.05;
    state.flashlightX = clamp(nextX, 8, 92);
    state.flashlightY = clamp(nextY, 12, 88);
    applyFlashlightPosition();
  }

  if (state.tiltNavigationCooling || Math.abs(beta) < 42) {
    return;
  }

  state.tiltNavigationCooling = true;
  if (beta > 42) {
    navigateToZone(state.currentZone + 1);
  } else if (beta < -42) {
    navigateToZone(state.currentZone - 1);
  }

  clearTimeout(ui.tiltTimer);
  ui.tiltTimer = window.setTimeout(() => {
    state.tiltNavigationCooling = false;
  }, 1600);
}

function handleTouchStart(event) {
  ui.touchStartY = event.changedTouches[0]?.clientY ?? 0;
}

function handleTouchEnd(event) {
  if (!state.started || state.ended || state.transitionLocked || state.triviaState !== "idle" || isPanelOpen()) {
    return;
  }
  const touchEndY = event.changedTouches[0]?.clientY ?? 0;
  const deltaY = ui.touchStartY - touchEndY;
  if (Math.abs(deltaY) < 40) {
    return;
  }
  if (deltaY > 0) {
    navigateToZone(state.currentZone + 1);
  } else {
    navigateToZone(state.currentZone - 1);
  }
}

function navigateToZone(nextIndex) {
  if (nextIndex < 0 || nextIndex >= zoneData.length || nextIndex === state.currentZone) {
    return;
  }
  deactivateZone(zoneData[state.currentZone].id);
  state.transitionLocked = true;
  state.zoneTargetIndex = nextIndex;
  document.body.classList.add("is-transitioning");
  refs.zoneStage.style.transform = `translate3d(0, -${nextIndex * 100}vh, 0)`;
  animateDepthReadout(state.currentDepth, zoneData[nextIndex].targetDepth, zoneData[nextIndex].depthMarker);
  setZoneVisualState(nextIndex);
}

function handleTransitionEnd(event) {
  if (event.target !== refs.zoneStage || event.propertyName !== "transform") {
    return;
  }
  state.currentZone = state.zoneTargetIndex;
  state.transitionLocked = false;
  document.body.classList.remove("is-transitioning");
  activateZone(zoneData[state.currentZone].id);
  announce(`${zoneData[state.currentZone].title}. Depth ${Math.round(state.currentDepth)} meters.`);
}

function activateZone(zoneId) {
  const zone = zoneMap.get(zoneId);
  refs.zoneReadout.textContent = zone.title;
  document.body.dataset.zone = zone.id;
  spawnPollution(zoneId);
  if (zoneId === "hadal") {
    refs.o2Meter.classList.add("is-warning");
  }
}

function deactivateZone(zoneId) {
  clearZonePollution(zoneId);
  clearSonarHighlights(zoneId);
  if (zoneId === SQUID_PASS_ZONE && !state.squidEasterEggShown) {
    clearSquidPassDelay();
  }
}

function setZoneImmediate(index) {
  state.currentZone = index;
  state.zoneTargetIndex = index;
  refs.zoneStage.style.transform = `translate3d(0, -${index * 100}vh, 0)`;
  setZoneVisualState(index);
  state.currentDepth = zoneData[index].targetDepth;
  refs.depthReadout.textContent = `${Math.round(state.currentDepth)} m`;
  refs.depthScaleMarker.style.top = `${zoneData[index].depthMarker}%`;
  refs.zoneReadout.textContent = zoneData[index].title;
}

function setZoneVisualState(activeIndex) {
  refs.zones.forEach((zoneEl, index) => {
    zoneEl.classList.toggle("is-active", index === activeIndex);
    zoneEl.classList.toggle("is-hadal-alert", zoneEl.dataset.zone === "hadal" && activeIndex === 4);
    zoneEl.classList.toggle("has-flashlight", index === activeIndex && FLASHLIGHT_ZONES.has(zoneEl.dataset.zone));
  });
  applyFlashlightPosition(refs.zones[activeIndex]);
  updateHydrophoneForZone(zoneData[activeIndex]?.id);
}

function enableHydrophoneAudio() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass || ui.hydrophoneContext) {
    return;
  }

  try {
    ui.hydrophoneContext = new AudioContextClass();
    ui.hydrophoneGain = ui.hydrophoneContext.createGain();
    ui.hydrophoneGain.gain.value = 0.0001;
    ui.hydrophoneGain.connect(ui.hydrophoneContext.destination);
    createAmbientAudioBed(ui.hydrophoneContext);
    state.audioEnabled = true;
  } catch (error) {
    state.audioEnabled = false;
  }
}

function resumeAudioSystems() {
  if (ui.hydrophoneContext?.state === "suspended") {
    ui.hydrophoneContext
      .resume()
      .then(() => {
        applyAmbientAudioProfile(zoneData[state.currentZone]?.id);
        startHydrophoneLoop();
      })
      .catch(() => {
        state.audioEnabled = false;
      });
  }
}

function updateHydrophoneForZone(zoneId) {
  if (!state.started) {
    return;
  }

  if (zoneId === SQUID_PASS_ZONE && !state.squidEasterEggShown) {
    scheduleSquidEasterEggPass();
  }

  if (!state.audioEnabled || !ui.hydrophoneContext) {
    return;
  }

  applyAmbientAudioProfile(zoneId);
  startHydrophoneLoop();
}

function scheduleSquidEasterEggPass() {
  if (ui.squidPassDelayTimer) {
    return;
  }

  ui.squidPassDelayTimer = window.setTimeout(() => {
    ui.squidPassDelayTimer = 0;
    if (state.started && !state.ended && zoneData[state.currentZone]?.id === SQUID_PASS_ZONE) {
      triggerSquidEasterEggPass();
    }
  }, SQUID_PASS_DELAY_MS);
}

function triggerSquidEasterEggPass() {
  const passZone = getZoneNode(SQUID_PASS_ZONE);
  if (!passZone) {
    return;
  }

  state.squidEasterEggShown = true;
  passZone.classList.add("is-squid-pass");
  playSquidEasterEggCue();
  clearTimeout(ui.squidPassTimer);
  ui.squidPassTimer = window.setTimeout(() => {
    passZone.classList.remove("is-squid-pass");
    ui.squidPassTimer = 0;
  }, SQUID_PASS_DURATION_MS);
}

function clearSquidPassDelay() {
  clearTimeout(ui.squidPassDelayTimer);
  ui.squidPassDelayTimer = 0;
}

function playSquidEasterEggCue() {
  if (!state.audioEnabled) {
    return;
  }

  try {
    if (!ui.squidCueAudio) {
      ui.squidCueAudio = new Audio(SQUID_PASS_AUDIO_PATH);
      ui.squidCueAudio.preload = "auto";
    }
    ui.squidCueAudio.pause();
    ui.squidCueAudio.currentTime = 0;
    ui.squidCueAudio.volume = 0.42;
    const playPromise = ui.squidCueAudio.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }
  } catch (error) {
    // Audio is optional; visual easter egg should never fail because sound is blocked.
  }
}

function stopSquidEasterEggCue() {
  clearSquidPassDelay();
  clearTimeout(ui.squidPassTimer);
  ui.squidPassTimer = 0;
  refs.zones.forEach((zoneEl) => zoneEl.classList.remove("is-squid-pass"));
  if (!ui.squidCueAudio) {
    return;
  }
  ui.squidCueAudio.pause();
  ui.squidCueAudio.currentTime = 0;
}

function startHydrophoneLoop() {
  if (!ui.hydrophoneContext || ui.hydrophoneTimer) {
    return;
  }
  if (ui.hydrophoneContext.state === "suspended") {
    resumeAudioSystems();
    return;
  }
  scheduleHydrophoneClick(400);
}

function scheduleHydrophoneClick(delay) {
  clearTimeout(ui.hydrophoneTimer);
  ui.hydrophoneTimer = window.setTimeout(() => {
    ui.hydrophoneTimer = 0;
    const zoneId = zoneData[state.currentZone]?.id;
    if (!ambientAudioProfiles[zoneId] || !state.started || state.ended) {
      return;
    }
    playHydrophoneClick();
    const [minDelay, maxDelay] = ambientAudioProfiles[zoneId].eventEvery;
    scheduleHydrophoneClick(minDelay + Math.random() * (maxDelay - minDelay));
  }, delay);
}

function playHydrophoneClick() {
  const context = ui.hydrophoneContext;
  if (!context || !ui.hydrophoneGain) {
    return;
  }

  const profile = ambientAudioProfiles[zoneData[state.currentZone]?.id] || ambientAudioProfiles.sunlight;
  if (profile.eventType === "bubble") {
    playBubbleCluster(context, profile);
    return;
  }
  if (profile.eventType === "pressure") {
    playPressureCreak(context, profile);
    return;
  }
  playDistantMoan(context, profile);
}

function createAmbientAudioBed(context) {
  const noiseBuffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
  const channel = noiseBuffer.getChannelData(0);
  let brown = 0;
  for (let index = 0; index < channel.length; index += 1) {
    brown = brown * 0.985 + (Math.random() * 2 - 1) * 0.015;
    channel[index] = brown * 2.4;
  }

  ui.ambientFilter = context.createBiquadFilter();
  ui.ambientFilter.type = "lowpass";
  ui.ambientFilter.frequency.value = 900;
  ui.ambientFilter.Q.value = 0.72;

  ui.ambientNoiseGain = context.createGain();
  ui.ambientNoiseGain.gain.value = 0.0001;
  ui.ambientNoiseSource = context.createBufferSource();
  ui.ambientNoiseSource.buffer = noiseBuffer;
  ui.ambientNoiseSource.loop = true;
  ui.ambientNoiseSource.connect(ui.ambientFilter);
  ui.ambientFilter.connect(ui.ambientNoiseGain);
  ui.ambientNoiseGain.connect(ui.hydrophoneGain);
  ui.ambientNoiseSource.start();

  ui.ambientRumbleGain = context.createGain();
  ui.ambientRumbleGain.gain.value = 0.0001;
  ui.ambientRumbleOsc = context.createOscillator();
  ui.ambientRumbleOsc.type = "sine";
  ui.ambientRumbleOsc.frequency.value = 42;
  ui.ambientRumbleOsc.connect(ui.ambientRumbleGain);
  ui.ambientRumbleGain.connect(ui.hydrophoneGain);
  ui.ambientRumbleOsc.start();

  ui.ambientDriftGain = context.createGain();
  ui.ambientDriftGain.gain.value = 0.0001;
  ui.ambientDriftOsc = context.createOscillator();
  ui.ambientDriftOsc.type = "triangle";
  ui.ambientDriftOsc.frequency.value = 86;
  ui.ambientDriftOsc.connect(ui.ambientDriftGain);
  ui.ambientDriftGain.connect(ui.hydrophoneGain);
  ui.ambientDriftOsc.start();
}

function applyAmbientAudioProfile(zoneId) {
  const context = ui.hydrophoneContext;
  const profile = ambientAudioProfiles[zoneId] || ambientAudioProfiles.sunlight;
  if (!context || !ui.hydrophoneGain || !ui.ambientFilter) {
    return;
  }

  const now = context.currentTime;
  rampAudioParam(ui.hydrophoneGain.gain, profile.master, now, 1.1);
  rampAudioParam(ui.ambientFilter.frequency, profile.filterFrequency, now, 1.35);
  rampAudioParam(ui.ambientNoiseGain.gain, profile.noise, now, 1.4);
  rampAudioParam(ui.ambientRumbleGain.gain, profile.rumble, now, 1.4);
  rampAudioParam(ui.ambientDriftGain.gain, profile.drift, now, 1.4);
  rampAudioParam(ui.ambientRumbleOsc.frequency, zoneId === "hadal" ? 31 : zoneId === "abyssal" ? 36 : 43, now, 1.6);
  rampAudioParam(ui.ambientDriftOsc.frequency, zoneId === "sunlight" ? 118 : zoneId === "twilight" ? 92 : 64, now, 1.6);
}

function playBubbleCluster(context, profile) {
  for (let index = 0; index < 5; index += 1) {
    const start = context.currentTime + index * 0.055 + Math.random() * 0.04;
    const bubbleGain = context.createGain();
    const bubble = context.createOscillator();
    const filter = context.createBiquadFilter();
    bubble.type = "sine";
    bubble.frequency.setValueAtTime(180 + Math.random() * 90, start);
    bubble.frequency.exponentialRampToValueAtTime(92 + Math.random() * 38, start + 0.42);
    filter.type = "lowpass";
    filter.frequency.value = profile.filterFrequency + 500;
    bubbleGain.gain.setValueAtTime(0.0001, start);
    bubbleGain.gain.exponentialRampToValueAtTime(0.04, start + 0.05);
    bubbleGain.gain.exponentialRampToValueAtTime(0.0001, start + 0.52);
    bubble.connect(filter);
    filter.connect(bubbleGain);
    bubbleGain.connect(ui.hydrophoneGain);
    bubble.start(start);
    bubble.stop(start + 0.58);
  }
}

function playDistantMoan(context) {
  const now = context.currentTime;
  const pulseGain = context.createGain();
  const lowOsc = context.createOscillator();
  const shimmerOsc = context.createOscillator();
  lowOsc.type = "sine";
  shimmerOsc.type = "sine";
  lowOsc.frequency.setValueAtTime(92 + Math.random() * 16, now);
  lowOsc.frequency.exponentialRampToValueAtTime(42, now + 3.4);
  shimmerOsc.frequency.setValueAtTime(138 + Math.random() * 24, now + 0.2);
  shimmerOsc.frequency.exponentialRampToValueAtTime(72, now + 2.4);
  pulseGain.gain.setValueAtTime(0.0001, now);
  pulseGain.gain.exponentialRampToValueAtTime(0.08, now + 0.8);
  pulseGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.6);
  lowOsc.connect(pulseGain);
  shimmerOsc.connect(pulseGain);
  pulseGain.connect(ui.hydrophoneGain);
  lowOsc.start(now);
  shimmerOsc.start(now + 0.2);
  lowOsc.stop(now + 4.8);
  shimmerOsc.stop(now + 3.8);
}

function playPressureCreak(context) {
  const now = context.currentTime;
  const creakGain = context.createGain();
  const creak = context.createOscillator();
  const filter = context.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = zoneData[state.currentZone]?.id === "hadal" ? 240 : 360;
  creak.type = "sawtooth";
  creak.frequency.setValueAtTime(64 + Math.random() * 20, now);
  creak.frequency.exponentialRampToValueAtTime(26, now + 2.2);
  creakGain.gain.setValueAtTime(0.0001, now);
  creakGain.gain.exponentialRampToValueAtTime(0.045, now + 0.35);
  creakGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.7);
  creak.connect(filter);
  filter.connect(creakGain);
  creakGain.connect(ui.hydrophoneGain);
  creak.start(now);
  creak.stop(now + 2.8);
}

function rampAudioParam(param, value, now, timeConstant) {
  param.cancelScheduledValues(now);
  param.setTargetAtTime(value, now, timeConstant);
}

function animateDepthReadout(from, to, markerPosition) {
  cancelAnimationFrame(ui.depthAnimationFrame);
  const start = performance.now();
  const duration = 1200;
  const tick = (timestamp) => {
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = easeOutCubic(progress);
    state.currentDepth = from + (to - from) * eased;
    refs.depthReadout.textContent = `${Math.round(state.currentDepth)} m`;
    refs.depthScaleMarker.style.top = `${markerPosition}%`;
    if (progress < 1) {
      ui.depthAnimationFrame = requestAnimationFrame(tick);
    }
  };
  ui.depthAnimationFrame = requestAnimationFrame(tick);
}

function handleCreatureClick(creatureId) {
  if (!state.started || state.ended || state.triviaState !== "idle") {
    return;
  }
  if (state.discovered.has(creatureId) || state.assistedDiscoveries.has(creatureId)) {
    return;
  }
  const creature = creatureMap.get(creatureId);
  if (zoneData[state.currentZone].id !== creature.zone) {
    return;
  }
  openTriviaModal(creature);
}

function openTriviaModal(creature) {
  state.triviaState = "prompted";
  state.modalCreatureId = creature.id;
  refs.triviaZone.textContent = `${zoneMap.get(creature.zone).title} // ${creature.rarity}`;
  refs.triviaPrompt.textContent = "Identify the creature hiding in silhouette.";
  refs.triviaFeedback.textContent = "";
  refs.triviaFeedback.className = "modal__feedback";
  refs.triviaOptions.innerHTML = "";

  const options = shuffleArray([creature.name, ...creature.wrongAnswers]).slice(0, 3);
  options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "ui-button modal__option";
    button.textContent = option;
    button.addEventListener("click", () => answerTrivia(option), { once: true });
    refs.triviaOptions.appendChild(button);
  });

  refs.triviaModal.hidden = false;
  refs.uiOverlay.hidden = false;
  document.body.classList.add("modal-open");
}

function closeTriviaModal() {
  if (refs.triviaModal.hidden) {
    return;
  }
  refs.triviaModal.hidden = true;
  state.triviaState = "idle";
  state.modalCreatureId = null;
  if (!refs.logbookPanel.classList.contains("is-open")) {
    refs.uiOverlay.hidden = true;
    document.body.classList.remove("modal-open");
  }
}

function answerTrivia(choice) {
  if (!state.modalCreatureId) {
    return;
  }
  const creature = creatureMap.get(state.modalCreatureId);
  const correct = choice === creature.name;
  const attempts = state.creatureAttempts.get(creature.id) || 0;
  const assisted = attempts > 0 || state.seenCreatures.has(creature.id);
  state.triviaState = "answered";

  refs.triviaOptions.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
    if (button.textContent === creature.name) {
      button.classList.add(correct ? "is-answer-correct" : "is-answer-revealed");
    } else if (button.textContent === choice) {
      button.classList.add("is-answer-wrong");
    }
  });

  refs.triviaFeedback.textContent = correct
    ? assisted
      ? "Assisted identification restored. No creature XP awarded."
      : "Confirmed. Creature profile restored."
    : `Incorrect. Correct ID: ${creature.name}. Signal logged for a second attempt.`;
  refs.triviaFeedback.className = `modal__feedback ${correct ? "is-correct" : "is-wrong"}`;

  if (correct) {
    if (assisted) {
      state.assistedDiscoveries.add(creature.id);
      state.seenCreatures.add(creature.id);
      revealCreature(creature.id, { assisted: true });
      setOxygen(state.oxygen + ASSISTED_OXYGEN_REWARD);
    } else {
      state.discovered.add(creature.id);
      state.triviaCorrect += 1;
      state.discoveryStreak += 1;
      state.bestDiscoveryStreak = Math.max(state.bestDiscoveryStreak, state.discoveryStreak);
      revealCreature(creature.id);
      setOxygen(state.oxygen + getOxygenReward(creature.rarity));
    }
    window.setTimeout(() => showCreaturePanel(creature), 240);
    announce(assisted ? `${creature.name} assisted identification restored.` : `${creature.name} identified.`);
  } else {
    state.creatureAttempts.set(creature.id, attempts + 1);
    state.seenCreatures.add(creature.id);
    state.discoveryStreak = 0;
    markCreatureSeen(creature.id);
    hideCreaturePanel();
    announce(`${creature.name} logged as unknown. Second attempt available.`);
  }

  computeScore();
  renderLogbook();
  window.setTimeout(closeTriviaModal, correct ? 620 : 1650);
}

function revealCreature(creatureId, options = {}) {
  const node = getCreatureNode(creatureId);
  if (!node) {
    return;
  }
  const creature = creatureMap.get(creatureId);
  const zoneNode = getZoneNode(creature.zone);
  node.classList.add("is-revealing");
  node.classList.add("revealed");
  node.classList.toggle("assisted", Boolean(options.assisted));
  node.classList.remove("seen");
  node.setAttribute("aria-label", creature.name);
  if (zoneNode) {
    zoneNode.style.setProperty("--reveal-x", creature.position.left);
    zoneNode.style.setProperty("--reveal-y", creature.position.top);
    zoneNode.style.setProperty("--reveal-color", creature.bioColor);
    zoneNode.classList.add("is-reveal-burst");
    renderRevealCinematic(zoneNode, creature);
    window.setTimeout(() => zoneNode.classList.remove("is-reveal-burst"), 1700);
  }
  pulseElement(node, "is-spotlit", 1900);
  window.setTimeout(() => node.classList.remove("is-revealing"), 1250);
  pulseElement(refs.scoreReadout.closest(".hud-chip"), "is-energized", 900);
  pulseElement(refs.o2Meter, "is-refill", 1100);
}

function renderRevealCinematic(zoneNode, creature) {
  zoneNode.querySelectorAll(".reveal-cinematic").forEach((node) => node.remove());
  const overlay = document.createElement("div");
  overlay.className = `reveal-cinematic reveal-cinematic--${creature.rarity.toLowerCase()}`;
  overlay.style.setProperty("--reveal-color", creature.bioColor);
  overlay.style.setProperty("--reveal-x", creature.position.left);
  overlay.style.setProperty("--reveal-y", creature.position.top);
  overlay.innerHTML = `
    <span class="reveal-cinematic__halo"></span>
    <span class="reveal-cinematic__scan"></span>
    <span class="reveal-cinematic__ring"></span>
    <span class="reveal-cinematic__label">IDENTIFIED // ${creature.rarity}</span>
  `;
  const cleanup = (event) => {
    if (event.target === overlay) {
      overlay.remove();
    }
  };
  overlay.addEventListener("animationend", cleanup, { once: true });
  zoneNode.appendChild(overlay);
}

function markCreatureSeen(creatureId) {
  const node = getCreatureNode(creatureId);
  if (!node) {
    return;
  }
  node.classList.add("seen");
  node.querySelector(".creature__hint").textContent = "!";
  node.setAttribute("aria-label", `Seen signal: ${creatureMap.get(creatureId).name}. Second attempt available.`);
  pulseElement(getZoneNode(creatureMap.get(creatureId).zone), "is-miss-shock", 1200);
}

function showCreaturePanel(creature) {
  refs.creaturePanel.style.setProperty("--panel-accent", creature.bioColor);
  refs.creaturePanelZone.textContent = `${zoneMap.get(creature.zone).title} // ${creature.zoneLabel}`;
  refs.creaturePanelName.textContent = creature.name;
  refs.creaturePanelDepth.textContent = creature.depthRange;
  refs.creaturePanelRarity.textContent = creature.rarity;
  refs.creaturePanelFacts.innerHTML = creature.facts.map((fact) => `<li>${fact}</li>`).join("");
  refs.creaturePanel.classList.add("is-open");
  pulseElement(refs.creaturePanel, "is-spotlit", 1000);
}

function hideCreaturePanel() {
  refs.creaturePanel.classList.remove("is-open");
}

function toggleLogbook() {
  if (refs.logbookPanel.classList.contains("is-open")) {
    closeLogbook();
  } else {
    openLogbook();
  }
}

function openLogbook() {
  refs.logbookPanel.classList.add("is-open");
  refs.logbookPanel.setAttribute("aria-hidden", "false");
  refs.logbookButton.setAttribute("aria-expanded", "true");
  refs.uiOverlay.hidden = false;
  document.body.classList.add("panel-open");
}

function closeLogbook() {
  refs.logbookPanel.classList.remove("is-open");
  refs.logbookPanel.setAttribute("aria-hidden", "true");
  refs.logbookButton.setAttribute("aria-expanded", "false");
  if (refs.triviaModal.hidden) {
    refs.uiOverlay.hidden = true;
    document.body.classList.remove("panel-open");
  }
}

function setLogbookFilter(rarity) {
  state.logbookFilter = rarity || "all";
  renderLogbook();
}

function triggerSonar() {
  if (
    !state.started ||
    state.ended ||
    state.sonarCooling ||
    state.transitionLocked ||
    state.triviaState !== "idle" ||
    isPanelOpen()
  ) {
    return;
  }

  const zone = zoneData[state.currentZone];
  const zoneEl = getZoneNode(zone.id);
  if (!zoneEl) {
    return;
  }

  state.sonarCooling = true;
  state.sonarReturns += 1;
  refs.sonarButton.disabled = true;
  refs.sonarButton.classList.add("is-cooling");

  const hiddenCreatures = Array.from(zoneEl.querySelectorAll(".creature:not(.revealed):not(.missed)"));
  const returnCount = hiddenCreatures.length;
  const lifeLabel = hiddenCreatures.length === 1 ? "LIFEFORM" : "LIFEFORMS";

  zoneEl.classList.add("is-sonar-active");
  hiddenCreatures.forEach((node) => {
    setSonarDelay(node);
    node.classList.add("sonar-highlight");
    renderSonarEcho(zoneEl, node);
  });
  renderSonarPulse(zoneEl, returnCount);

  refs.sonarStatus.textContent = returnCount
    ? `SONAR RETURN DETECTED // ${hiddenCreatures.length} ${lifeLabel}`
    : "SONAR RETURN CLEAR // NO NEARBY TARGETS";
  announce(refs.sonarStatus.textContent);
  pulseElement(refs.sonarStatus, "is-detected", 1200);
  pulseElement(refs.sonarButton, "is-energized", 900);

  const activeTimer = window.setTimeout(() => {
    clearSonarHighlights(zone.id);
    ui.sonarTimers.delete(activeTimer);
  }, SONAR_ACTIVE_MS);
  ui.sonarTimers.add(activeTimer);

  const cooldownTimer = window.setTimeout(() => {
    state.sonarCooling = false;
    refs.sonarButton.disabled = false;
    refs.sonarButton.classList.remove("is-cooling");
    refs.sonarStatus.textContent = "SONAR READY";
    ui.sonarTimers.delete(cooldownTimer);
  }, SONAR_COOLDOWN_MS);
  ui.sonarTimers.add(cooldownTimer);
}

function renderSonarPulse(zoneEl, returnCount) {
  zoneEl.querySelectorAll(".sonar-pulse").forEach((node) => node.remove());
  const pulse = document.createElement("div");
  pulse.className = "sonar-pulse";
  pulse.style.setProperty("--return-intensity", returnCount > 0 ? "1" : "0.58");
  pulse.innerHTML = `
    <span class="sonar-pulse__ring"></span>
    <span class="sonar-pulse__ring"></span>
    <span class="sonar-pulse__ring"></span>
    <span class="sonar-pulse__sweep"></span>
  `;
  const removePulse = () => pulse.remove();
  pulse.addEventListener("animationend", removePulse, { once: true });
  zoneEl.appendChild(pulse);
}

function renderSonarEcho(zoneEl, targetNode) {
  const { x, y } = getTargetPosition(targetNode);
  const profile = getSonarEchoProfile(targetNode);
  const echo = document.createElement("span");
  echo.className = "sonar-echo sonar-echo--creature";
  echo.style.setProperty("--echo-x", `${x}%`);
  echo.style.setProperty("--echo-y", `${y}%`);
  echo.style.setProperty("--echo-size", profile.size);
  echo.style.setProperty("--echo-alpha", profile.alpha);
  echo.style.setProperty("--echo-strength", profile.strength);
  echo.style.setProperty("--echo-glow", profile.glow);
  echo.style.setProperty("--sonar-delay", targetNode.style.getPropertyValue("--sonar-delay") || "120ms");
  echo.style.setProperty("--echo-color", "var(--bio-cyan)");
  echo.setAttribute("aria-hidden", "true");
  zoneEl.appendChild(echo);
}

function getSonarEchoProfile(targetNode) {
  const creature = creatureMap.get(targetNode.dataset.creatureId);
  if (!creature) {
    return { size: "5rem", alpha: "0.56", strength: "58%", glow: "38%" };
  }

  if (["sperm_whale", "giant_squid"].includes(creature.id)) {
    return { size: "11rem", alpha: "0.86", strength: "86%", glow: "66%" };
  }
  if (creature.rarity === "Legendary") {
    return { size: "8.8rem", alpha: "0.76", strength: "78%", glow: "58%" };
  }
  if (creature.rarity === "Rare") {
    return { size: "6.6rem", alpha: "0.64", strength: "66%", glow: "46%" };
  }
  return { size: "4.8rem", alpha: "0.48", strength: "52%", glow: "34%" };
}

function setSonarDelay(node) {
  const { x, y } = getTargetPosition(node);
  const distance = Math.hypot(x - 50, y - 50);
  const delay = clamp((distance / 72) * 980, 80, 1100);
  node.style.setProperty("--sonar-delay", `${delay.toFixed(0)}ms`);
}

function getTargetPosition(node) {
  const left = parseFloat(node.style.getPropertyValue("--left"));
  const top = parseFloat(node.style.getPropertyValue("--top"));
  const sonarY = parseFloat(node.style.getPropertyValue("--sonar-y"));
  return {
    x: Number.isFinite(left) ? left : 50,
    y: Number.isFinite(top) ? top : Number.isFinite(sonarY) ? sonarY : 48,
  };
}

function clearSonarHighlights(zoneId) {
  const zoneEl = getZoneNode(zoneId);
  if (!zoneEl) {
    return;
  }
  zoneEl.classList.remove("is-sonar-active");
  zoneEl.querySelectorAll(".sonar-highlight").forEach((node) => node.classList.remove("sonar-highlight"));
  zoneEl.querySelectorAll(".sonar-pulse, .sonar-echo").forEach((node) => node.remove());
}

function spawnPollution(zoneId) {
  clearZonePollution(zoneId);
  const zoneEl = getZoneNode(zoneId);
  if (!zoneEl) {
    return;
  }
  const layer = zoneEl.querySelector(".zone__pollution");
  const timeouts = new Set();
  ui.pollutionTimers.set(zoneId, timeouts);
  const settings = pollutionZoneSettings[zoneId] || pollutionZoneSettings.sunlight;

  const spawnOne = () => {
    if (zoneData[state.currentZone].id !== zoneId || state.ended) {
      return;
    }
    const zone = zoneMap.get(zoneId);
    const type = zone.pollutionTypes[Math.floor(Math.random() * zone.pollutionTypes.length)];
    const typeSettings = pollutionTypeSettings[type] || {};
    const size = randomBetween(settings.size[0], settings.size[1]) * (typeSettings.sizeBoost || 1);
    const duration = randomBetween(settings.duration[0], settings.duration[1]);
    const drift = randomBetween(settings.drift[0], settings.drift[1]);
    const node = document.createElement("button");
    node.type = "button";
    node.className = "pollution-item";
    node.dataset.type = type;
    node.setAttribute("aria-label", `Collect drifting ${type.replace("-", " ")}`);
    node.style.setProperty("--left", `${8 + Math.random() * 80}%`);
    node.style.setProperty("--size", `${size.toFixed(2)}rem`);
    node.style.setProperty("--duration", `${duration.toFixed(2)}s`);
    node.style.setProperty("--drift", `${drift.toFixed(2)}vw`);
    node.style.setProperty("--tilt", `${randomBetween(-10, 10).toFixed(1)}deg`);
    node.style.setProperty("--sonar-y", `${12 + Math.random() * 76}%`);
    node.innerHTML = `${pollutionAsset(type)}<span class="pollution-item__tag">Clean</span>`;

    const handleCollect = () => {
      node.removeEventListener("click", handleCollect);
      node.removeEventListener("animationend", handleMiss);
      node.classList.add("is-collected");
      state.pollutionCollected += 1;
      state.zonePollutionCollected[zoneId] += 1;
      state.pollutionCombo += 1;
      computeScore();
      updateZonePollutionMood(zoneId);
      updateHud();
      pulseElement(refs.pollutionReadout.closest(".hud-chip"), "is-energized", 650);
      pulseElement(node, "sonar-highlight", 360);
      const finalizeCollect = () => {
        node.removeEventListener("animationend", finalizeCollect);
        node.remove();
        const nextTimeout = window.setTimeout(spawnOne, settings.respawn);
        timeouts.add(nextTimeout);
      };
      node.addEventListener("animationend", finalizeCollect, { once: true });
    };

    const handleMiss = () => {
      cleanupNode();
      state.pollutionCombo = 0;
      state.zonePollutionMisses[zoneId] += 1;
      updateZonePollutionMood(zoneId);
      const nextTimeout = window.setTimeout(spawnOne, settings.respawn + 260);
      timeouts.add(nextTimeout);
    };

    const cleanupNode = () => {
      node.removeEventListener("click", handleCollect);
      node.removeEventListener("animationend", handleMiss);
      node.remove();
    };

    node.addEventListener("click", handleCollect, { once: true });
    node.addEventListener("animationend", handleMiss, { once: true });
    layer.appendChild(node);
  };

  for (let index = 0; index < settings.initial; index += 1) {
    const timeoutId = window.setTimeout(spawnOne, index * settings.respawn);
    timeouts.add(timeoutId);
  }
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function clearZonePollution(zoneId) {
  const timers = ui.pollutionTimers.get(zoneId);
  if (timers) {
    timers.forEach((timeoutId) => clearTimeout(timeoutId));
    timers.clear();
  }
  const zoneEl = getZoneNode(zoneId);
  if (zoneEl) {
    zoneEl.querySelector(".zone__pollution").innerHTML = "";
  }
}

function updateZonePollutionMood(zoneId) {
  const zoneEl = getZoneNode(zoneId);
  if (!zoneEl) {
    return;
  }
  zoneEl.classList.toggle("is-polluted", state.zonePollutionMisses[zoneId] >= 5);
  zoneEl.classList.toggle("is-cleansed", state.zonePollutionCollected[zoneId] >= 5);
}

function computeScore() {
  const creaturePossible = creatureData.reduce((total, creature) => total + creature.points, 0);
  const creaturePoints = Array.from(state.discovered).reduce(
    (total, creatureId) => total + creatureMap.get(creatureId).points,
    0
  );
  const creatureScore = Math.round((creaturePoints / creaturePossible) * 58);
  const pollutionScore = Math.round(Math.min(state.pollutionCollected / 22, 1) * 18);
  const streakScore = Math.round(Math.min(state.bestDiscoveryStreak / 8, 1) * 10);
  const fullZoneBonus = zoneData.reduce((total, zone) => {
    const zoneCreatures = creatureData.filter((creature) => creature.zone === zone.id);
    const foundAll = zoneCreatures.every((creature) => state.discovered.has(creature.id));
    return total + (foundAll ? 2 : 0);
  }, 0);
  const incorrectAttempts = Array.from(state.creatureAttempts.values()).reduce((total, attempts) => total + attempts, 0);
  const attempts = state.triviaCorrect + incorrectAttempts;
  const accuracyScore = attempts ? Math.round((state.triviaCorrect / attempts) * 4) : 0;
  state.score = Math.min(100, creatureScore + pollutionScore + streakScore + fullZoneBonus + accuracyScore);
  updateHud();
}

function getZoneBreakdown(zone) {
  const zoneCreatures = creatureData.filter((creature) => creature.zone === zone.id);
  const foundCreatures = zoneCreatures.filter((creature) => state.discovered.has(creature.id));
  const assistedCreatures = zoneCreatures.filter((creature) => state.assistedDiscoveries.has(creature.id));
  const missedCreatures = zoneCreatures.filter((creature) => state.missedCreatures.has(creature.id));
  return {
    zone,
    totalCreatures: zoneCreatures.length,
    foundCreatures,
    assistedCreatures,
    missedCreatures,
    pollutionCollected: state.zonePollutionCollected[zone.id] || 0,
    pollutionMisses: state.zonePollutionMisses[zone.id] || 0,
  };
}

function updateHud() {
  refs.scoreReadout.textContent = String(state.score);
  refs.pollutionReadout.textContent = String(state.pollutionCollected);
  refs.o2Readout.textContent = `${Math.max(0, Math.round(state.oxygen))}%`;
  refs.o2Fill.style.transform = `scaleY(${clamp(state.oxygen / 100, 0, 1)})`;
  refs.o2Meter.style.setProperty("--o2-ratio", clamp(state.oxygen / 100, 0, 1).toFixed(3));
}

function setOxygen(nextValue) {
  state.oxygen = clamp(nextValue, 0, 100);
  const warning = state.oxygen <= 24 || zoneData[state.currentZone].id === "hadal";
  const critical = state.oxygen <= 12;
  refs.o2Meter.classList.toggle("is-warning", warning);
  document.body.classList.toggle("is-oxygen-critical", critical);

  if (state.oxygen <= 24) {
    refs.o2Fill.style.background =
      "linear-gradient(180deg, rgba(255, 214, 219, 0.25), rgba(239, 35, 60, 0.95))";
  } else {
    refs.o2Fill.style.background =
      "linear-gradient(180deg, rgba(224, 247, 250, 0.15), rgba(0, 180, 216, 0.95))";
  }

  updateHud();
  if (state.oxygen <= 0 && !state.ended) {
    finishDive();
  }
}

function finishDive() {
  state.ended = true;
  cancelAnimationFrame(ui.loopFrame);
  zoneData.forEach((zone) => clearZonePollution(zone.id));
  stopHydrophoneLoop();
  stopSquidEasterEggCue();
  stopAmbientAudio();
  stopBreathDetection();
  closeTriviaModal();
  closeLogbook();
  hideCreaturePanel();
  refs.gameContainer.classList.remove("is-active");
  refs.endScreen.hidden = false;

  const rank = getRank(state.score);
  refs.endTitle.textContent = rank.title;
  refs.endTitle.style.color = rank.color;
  refs.endScreen.dataset.rank = rank.key;
  refs.endScore.textContent = `Final Score: ${state.score} // ${rank.title}`;
  refs.endBreakdown.innerHTML = renderEndBreakdown(rank);
  announce(`Dive complete. ${rank.title}. Final score ${state.score}.`);
}

function restartGame() {
  state.started = false;
  state.ended = false;
  state.currentZone = 0;
  state.currentDepth = 0;
  state.score = 0;
  state.triviaCorrect = 0;
  state.pollutionCollected = 0;
  state.pollutionCombo = 0;
  state.discovered.clear();
  state.seenCreatures.clear();
  state.assistedDiscoveries.clear();
  state.missedCreatures.clear();
  state.creatureAttempts.clear();
  state.zonePollutionMisses = Object.fromEntries(zoneData.map((zone) => [zone.id, 0]));
  state.zonePollutionCollected = Object.fromEntries(zoneData.map((zone) => [zone.id, 0]));
  state.transitionLocked = false;
  state.triviaState = "idle";
  state.modalCreatureId = null;
  state.bestDiscoveryStreak = 0;
  state.discoveryStreak = 0;
  state.sonarCooling = false;
  state.sonarReturns = 0;
  state.breathCooling = false;
  state.breathLevel = 0;
  state.breathPeak = 0;
  state.breathHoldMs = 0;
  state.breathRefills = 0;
  state.squidEasterEggShown = false;
  state.tiltNavigationCooling = false;
  state.logbookFilter = "all";
  clearSonarTimers();
  stopHydrophoneLoop();
  stopSquidEasterEggCue();
  stopAmbientAudio();
  refs.endScreen.hidden = true;
  refs.introScreen.hidden = false;
  refs.gameContainer.classList.remove("is-active");
  refs.gameContainer.setAttribute("aria-hidden", "true");
  refs.uiOverlay.hidden = true;
  document.body.classList.remove("modal-open", "panel-open", "is-oxygen-critical");
  refs.triviaModal.hidden = true;
  refs.logbookPanel.classList.remove("is-open");
  refs.logbookButton.setAttribute("aria-expanded", "false");
  hideCreaturePanel();
  refs.shareFeedback.textContent = "";
  refs.sonarStatus.textContent = "SONAR READY";
  refs.sonarButton.disabled = false;
  refs.sonarButton.classList.remove("is-cooling");
  refs.breathReadout.textContent = "Standby";
  refs.breathChip.classList.remove("is-muted", "is-listening", "is-breath-detected");

  refs.zones.forEach((zoneEl) => {
    zoneEl.classList.remove(
      "is-polluted",
      "is-cleansed",
      "is-reveal-burst",
      "is-miss-shock",
      "is-sonar-active",
      "is-squid-pass"
    );
    zoneEl.querySelectorAll(".sonar-highlight, .sonar-pulse, .sonar-echo").forEach((node) => {
      if (node.classList.contains("sonar-pulse") || node.classList.contains("sonar-echo")) {
        node.remove();
      } else {
        node.classList.remove("sonar-highlight");
      }
    });
  });

  creatureData.forEach((creature) => {
    const node = getCreatureNode(creature.id);
    if (!node) {
      return;
    }
    node.classList.remove("revealed", "missed", "seen", "assisted");
    node.querySelector(".creature__hint").textContent = "?";
    node.setAttribute("aria-label", `Unknown silhouette in ${zoneMap.get(creature.zone).title}`);
  });

  zoneData.forEach((zone) => clearZonePollution(zone.id));
  renderLogbook();
  setZoneImmediate(0);
  setOxygen(100);
  updateHud();
}

async function copyShareText() {
  const rank = getRank(state.score);
  const shareText = `I explored DeepDive and surfaced as ${rank.title} with ${state.score} points. I identified ${state.discovered.size}/${creatureData.length} creatures, logged ${state.assistedDiscoveries.size} assisted IDs, cleared ${state.pollutionCollected} pollution items, used ${state.sonarReturns} sonar pings, and made ${state.breathRefills} breath refills.`;
  try {
    await navigator.clipboard.writeText(shareText);
    refs.shareFeedback.textContent = "Share text copied to clipboard.";
  } catch (error) {
    refs.shareFeedback.textContent = shareText;
  }
}

function createParticles(zoneEl, zone) {
  const layer = zoneEl.querySelector(".zone__particles");
  const colors = [zone.id === "twilight" ? "var(--bio-blue)" : "var(--bio-cyan)", "var(--bio-green)", "var(--bio-amber)"];
  for (let index = 0; index < zone.particleCount; index += 1) {
    const particle = document.createElement("span");
    const useBio = zone.particleType === "bio" && index % 4 === 0;
    const isHadal = zone.id === "hadal";
    particle.className = `particle particle--${useBio ? "bio" : zone.particleType}`;
    particle.style.setProperty("--x", `${Math.random() * 100}%`);
    particle.style.setProperty("--size", `${(isHadal ? 0.24 : 0.16) + Math.random() * (isHadal ? 0.48 : 0.34)}rem`);
    particle.style.setProperty("--duration", `${(isHadal ? 22 : 12) + Math.random() * (isHadal ? 18 : 12)}s`);
    particle.style.setProperty("--delay", `${-Math.random() * 18}s`);
    particle.style.setProperty("--drift", `${(isHadal ? -2.5 : -5) + Math.random() * (isHadal ? 5 : 10)}vw`);
    particle.style.setProperty("--opacity", `${(isHadal ? 0.18 : 0.12) + Math.random() * (isHadal ? 0.34 : 0.5)}`);
    if (useBio) {
      particle.style.setProperty("--particle-color", colors[index % colors.length]);
    }
    layer.appendChild(particle);
  }
}

function pollutionAsset(type) {
  const spritePath = pollutionSpritePaths[type];
  if (spritePath) {
    return `<span class="pollution-item__sprite" style="--sprite-url:url('${spritePath}')" aria-hidden="true"></span>`;
  }
  return pollutionSvg(type);
}

function pollutionSvg(type) {
  const color = pollutionPalette[type] || pollutionPalette.bottle;
  const palette = [
    `--trash-main:${color.main}`,
    `--trash-shade:${color.shade}`,
    `--trash-line:${color.line}`,
    `--trash-rust:${color.rust || color.shade}`,
    `--trash-alpha:${color.alpha}`,
  ].join(";");
  const svgs = {
    bottle: `<svg class="trash-illustration trash-bottle" viewBox="0 0 64 64" style="${palette}" aria-hidden="true"><path class="trash-fill" d="M26 6h12v7l5 6-2 35c-.2 3.6-2.7 5.8-6.2 5.8h-7.4c-3.5 0-5.9-2.2-6.1-5.8L19 19l5-6V6h2Z"/><path class="trash-shade" d="M27 16h11.5l3.1 4.4-.5 8.8c-5.9-1.2-11.1-.4-15.8 2.5l-.7-11.1L27 16Z"/><path class="trash-cap" d="M25 3.8h14v5.4H25z"/><path class="trash-line" d="M23.5 24.5c6.7 2.8 12.7 2.8 18.1.1M24.1 43.8c5.2-1.8 10.6-1.9 16.4-.2"/></svg>`,
    line: `<svg class="trash-illustration trash-line-tangle" viewBox="0 0 64 64" style="${palette}" aria-hidden="true"><path class="trash-rope" d="M8.5 18.5c11.8 8.8 23.5 7.8 46.8-1.8M10.2 49.7c11.2-18.7 31.5-18.1 44.7.8M8.4 34.5c18.6-13.5 30.2 17.9 47.8-2.9M17 15c8 9.5 6.7 22.9-4.3 34.2"/><circle class="trash-knot" cx="17" cy="18" r="3.3"/><circle class="trash-knot" cx="49" cy="49" r="3.1"/></svg>`,
    gear: `<svg class="trash-illustration trash-gear" viewBox="0 0 64 64" style="${palette}" aria-hidden="true"><path class="trash-fill" d="M30.2 7.5h4.3l3.6 7 5.8 1.8 6.7-3 4.5 5-3.4 6.6 2 5.6 6.7 3.7v5.5l-6.9 3.2-2.3 5.8 3.2 6.7-4.8 4.5-6.5-3.5-6 2.2-3.4 6.8h-4.4l-3.3-6.9-5.8-2-6.7 3.1-4.6-5 3.4-6.4-2.1-5.9-6.6-3.5v-5.5l6.7-3.4 2-5.8-3.1-6.6 4.9-4.6 6.3 3.3 6.2-2 3.5-6.7Z"/><circle class="trash-hole" cx="32" cy="34" r="8.2"/><path class="trash-line" d="M32 19v6M32 43v6M17 34h6M41 34h6"/></svg>`,
    drum: `<svg class="trash-illustration trash-drum" viewBox="0 0 64 64" style="${palette}" aria-hidden="true"><ellipse class="trash-fill" cx="32" cy="13.5" rx="15" ry="6"/><path class="trash-fill" d="M17 13.5c1.1 7.9 1.1 28.9 0 36.2 8 6 22 6 30 0-1.1-7.3-1.1-28.3 0-36.2-7.9 4.2-22.1 4.2-30 0Z"/><path class="trash-shade" d="M18.3 17.7c7.7 3.4 19.7 3.3 27.5-.2l.4 9.7c-7.6 4.5-19.1 4.4-28.3.2l.4-9.7Z"/><path class="trash-rust" d="M22.5 33.5c8.7 1.8 14.8 1.6 22.4-.5l.3 5.8c-7.8 2.2-14.7 2.3-23.2.4l.5-5.7Z"/><path class="trash-line" d="M18.4 27.2c8.9 3.9 18.2 3.8 27.3 0M18.2 45.3c8.5 4.2 18.1 4.2 27.7 0"/></svg>`,
    microplastics: `<svg class="trash-illustration trash-microplastics" viewBox="0 0 64 64" style="${palette}" aria-hidden="true"><circle class="trash-dot" cx="15" cy="18" r="2.8"/><circle class="trash-dot shade" cx="28" cy="12" r="1.7"/><circle class="trash-dot" cx="45" cy="19" r="2.4"/><circle class="trash-dot shade" cx="53" cy="32" r="1.8"/><circle class="trash-dot" cx="35" cy="34" r="2.6"/><circle class="trash-dot shade" cx="19" cy="43" r="2.1"/><circle class="trash-dot" cx="44" cy="50" r="2.9"/><circle class="trash-dot shade" cx="28" cy="54" r="1.5"/><circle class="trash-dot" cx="11" cy="32" r="1.6"/></svg>`,
    debris: `<svg class="trash-illustration trash-debris" viewBox="0 0 64 64" style="${palette}" aria-hidden="true"><path class="trash-fill" d="M8.8 43.2 21.8 10l14 21.4 20.1-13.5-7.2 37.4H14.2l-5.4-12.1Z"/><path class="trash-shade" d="M21.9 15.4 33.6 34 16.5 49.6l-5.4-7.8 10.8-26.4Z"/><path class="trash-rust" d="m35.6 32 12.8-8.5-2.8 14.3c-4.6.1-7.8-1.8-10-5.8Z"/><path class="trash-line" d="M22 10 14.3 55M36 31.4l11.8 23.1M20.2 43.3 50 18.9"/></svg>`,
    container: `<svg class="trash-illustration trash-container" viewBox="0 0 64 64" style="${palette}" aria-hidden="true"><path class="trash-fill" d="M9.5 21.8c13.9-3.1 29.2-3.1 45.1.1v26.5c-14.9 3.4-29.9 3.3-45.1-.2V21.8Z"/><path class="trash-shade" d="M11.9 24.8c12.5 2.8 25.9 2.8 40.2 0v8.9c-13.8 3.9-27.3 3.9-40.2.1v-9Z"/><path class="trash-rust" d="M18.8 38.5c8.5 2.8 16.7 2.9 24.6.4l1.5 8.2c-8.1 1.7-16.4 1.6-24.7-.2l-1.4-8.4Z"/><path class="trash-line" d="M19.5 21.1v28.7M32 20.7v29.7M44.6 21.1v28.7M10.2 32.6c14.8 3.6 29.4 3.6 43.9.1"/></svg>`,
  };
  return svgs[type] || svgs.bottle;
}

function getRank(score) {
  if (score < 25) {
    return { key: "surface", title: "Surface Swimmer", color: "#cd7f32", callout: "Kept the descent alive, but most signals remain unresolved." };
  }
  if (score < 50) {
    return { key: "reef", title: "Reef Diver", color: "#c0c0c0", callout: "Recovered solid field data and cleared visible waste trails." };
  }
  if (score < 75) {
    return { key: "midnight", title: "Midnight Explorer", color: "#ffd166", callout: "Mapped the deep with strong creature recovery and cleanup work." };
  }
  if (score < 90) {
    return { key: "guardian", title: "Ocean Guardian", color: "#57cc99", callout: "Balanced discovery, oxygen control, and pollution response across the dive." };
  }
  return { key: "legend", title: "Deep Sea Legend", color: "#00f5d4", callout: "Near-perfect expedition record. The trench returned almost everything." };
}

function renderEndBreakdown(rank) {
  const totalCreaturePoints = creatureData.reduce((total, creature) => total + creature.points, 0);
  const earnedCreaturePoints = Array.from(state.discovered).reduce(
    (total, creatureId) => total + creatureMap.get(creatureId).points,
    0
  );
  const zoneRows = zoneData.map((zone) => {
    const breakdown = getZoneBreakdown(zone);
    const foundNames = breakdown.foundCreatures.map((creature) => creature.name).join(", ") || "None recovered";
    const zoneCompletion = Math.round((breakdown.foundCreatures.length / breakdown.totalCreatures) * 100);
    const cleanupState = breakdown.pollutionCollected >= 5 ? "Stabilized" : "Contaminated";
    const assistedLabel = breakdown.assistedCreatures.length ? ` // ${breakdown.assistedCreatures.length} assisted` : "";
    return `
      <article class="zone-result">
        <div class="zone-result__header">
          <span>${zone.title}</span>
          <strong>${zoneCompletion}%</strong>
        </div>
        <div class="zone-result__bar" style="--zone-progress: ${zoneCompletion}%"></div>
        <p>${breakdown.foundCreatures.length}/${breakdown.totalCreatures} creatures${assistedLabel} // ${breakdown.pollutionCollected} waste cleared // ${cleanupState}</p>
        <p class="zone-result__names">${foundNames}</p>
      </article>
    `;
  }).join("");

  return `
    <section class="end-rank-card">
      <p class="end-rank-card__label">Expedition Rank</p>
      <h3 style="color: ${rank.color}">${rank.title}</h3>
      <p>${rank.callout}</p>
    </section>
    <section class="end-stat-grid" aria-label="Score breakdown">
      <article><span>${state.discovered.size}/${creatureData.length}</span><p>Creatures Found</p></article>
      <article><span>${state.assistedDiscoveries.size}</span><p>Assisted IDs</p></article>
      <article><span>${state.triviaCorrect}</span><p>Trivia Correct</p></article>
      <article><span>${state.pollutionCollected}</span><p>Waste Cleared</p></article>
      <article><span>${state.bestDiscoveryStreak}</span><p>Best Chain</p></article>
      <article><span>${state.sonarReturns}</span><p>Sonar Pings</p></article>
      <article><span>${state.breathRefills}</span><p>Breath Refills</p></article>
      <article><span>${earnedCreaturePoints}/${totalCreaturePoints}</span><p>Creature XP</p></article>
    </section>
    <section class="zone-results" aria-label="Zone-by-zone expedition results">
      ${zoneRows}
    </section>
  `;
}

function getOxygenReward(rarity) {
  if (rarity === "Legendary") {
    return 24;
  }
  if (rarity === "Rare") {
    return 18;
  }
  return 12;
}

function isPanelOpen() {
  return refs.logbookPanel.classList.contains("is-open");
}

function clearSonarTimers() {
  ui.sonarTimers.forEach((timeoutId) => clearTimeout(timeoutId));
  ui.sonarTimers.clear();
}

function stopBreathDetection() {
  cancelAnimationFrame(ui.breathFrame);
  clearTimeout(ui.breathCooldownTimer);
  ui.breathFrame = 0;
  ui.lastBreathTimestamp = 0;
  ui.breathCooldownTimer = 0;
  if (ui.breathStream) {
    ui.breathStream.getTracks().forEach((track) => track.stop());
  }
  if (ui.breathContext) {
    ui.breathContext.close();
  }
  ui.breathStream = null;
  ui.breathContext = null;
  ui.breathAnalyser = null;
  ui.breathData = null;
}

function stopHydrophoneLoop() {
  clearTimeout(ui.hydrophoneTimer);
  ui.hydrophoneTimer = 0;
  if (ui.hydrophoneGain && ui.hydrophoneContext) {
    const now = ui.hydrophoneContext.currentTime;
    ui.hydrophoneGain.gain.cancelScheduledValues(now);
    ui.hydrophoneGain.gain.setTargetAtTime(0.0001, now, 0.18);
  }
}

function stopAmbientAudio() {
  if (!ui.hydrophoneContext || !ui.hydrophoneGain) {
    return;
  }
  const now = ui.hydrophoneContext.currentTime;
  ui.hydrophoneGain.gain.cancelScheduledValues(now);
  ui.hydrophoneGain.gain.setTargetAtTime(0.0001, now, 0.24);
}

function getZoneNode(zoneId) {
  return refs.zones.find((zoneEl) => zoneEl.dataset.zone === zoneId);
}

function getCreatureNode(creatureId) {
  return document.querySelector(`[data-creature-id="${creatureId}"]`);
}

function shuffleArray(items) {
  const clone = [...items];
  for (let index = clone.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [clone[index], clone[swapIndex]] = [clone[swapIndex], clone[index]];
  }
  return clone;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function easeOutCubic(value) {
  return 1 - Math.pow(1 - value, 3);
}

function pulseElement(element, className, duration) {
  if (!element) {
    return;
  }
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
  window.setTimeout(() => element.classList.remove(className), duration);
}

function announce(message) {
  refs.announcer.textContent = message;
}

function on(target, type, handler, options) {
  target.addEventListener(type, handler, options);
  ui.cleanup.push(() => target.removeEventListener(type, handler, options));
}
