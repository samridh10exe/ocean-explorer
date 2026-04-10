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
    pollutionTypes: ["bottle", "bag", "line"],
    oxygenDrainMultiplier: 0.8,
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
    pollutionTypes: ["ghost-net", "gear", "line"],
    oxygenDrainMultiplier: 1,
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
    pollutionTypes: ["drum", "microplastics", "drum"],
    oxygenDrainMultiplier: 1.28,
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
    pollutionTypes: ["debris", "sediment", "microplastics"],
    oxygenDrainMultiplier: 1.52,
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
    particleCount: 24,
    pollutionTypes: ["container", "oil", "container"],
    oxygenDrainMultiplier: 1.9,
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
    position: { top: "8%", left: "38%", width: "clamp(16rem, 34vw, 28rem)" },
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
  bottle: "#8ecae6",
  bag: "#f4a261",
  line: "#c9ada7",
  "ghost-net": "#8d99ae",
  gear: "#adb5bd",
  drum: "#ffb703",
  microplastics: "#f28482",
  debris: "#e9c46a",
  sediment: "#d9d9d9",
  container: "#ffb4a2",
  oil: "#5f0f40",
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
  missedCreatures: new Set(),
  zonePollutionMisses: Object.fromEntries(zoneData.map((zone) => [zone.id, 0])),
  zonePollutionCollected: Object.fromEntries(zoneData.map((zone) => [zone.id, 0])),
  transitionLocked: false,
  triviaState: "idle",
  modalCreatureId: null,
  particleSeeded: false,
  zoneTargetIndex: 0,
  bestDiscoveryStreak: 0,
  discoveryStreak: 0,
};

const ui = {
  cleanup: [],
  pollutionCleanup: new Map(),
  pollutionTimers: new Map(),
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
  on(window, "touchstart", handleTouchStart, { passive: true });
  on(window, "touchend", handleTouchEnd, { passive: true });
  on(refs.zoneStage, "transitionend", handleTransitionEnd);
  on(refs.triviaClose, "click", closeTriviaModal);
  on(refs.logbookButton, "click", toggleLogbook);
  on(refs.logbookClose, "click", closeLogbook);
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
      button.style.setProperty("--bio-color", creature.bioColor);
      button.style.setProperty("--delay", `${index * 0.6}s`);
      button.innerHTML = `
        <span class="creature__hint" aria-hidden="true">?</span>
        <img class="creature__img" src="${creature.assetPath}" alt="" draggable="false" />
      `;
      on(button, "click", () => handleCreatureClick(creature.id));
      layer.appendChild(button);
    });
  });
}

function renderLogbook() {
  refs.logbookGrid.innerHTML = "";
  creatureData.forEach((creature) => {
    const found = state.discovered.has(creature.id);
    const card = document.createElement("article");
    card.className = `logbook-card ${found ? "is-found" : ""}`;
    card.innerHTML = `
      <div class="logbook-card__art">
        <img src="${creature.assetPath}" alt="${found ? creature.name : "Undiscovered creature"}" />
      </div>
      <p class="logbook-card__name">${found ? creature.name : "Undiscovered"}</p>
      <p class="logbook-card__meta">${zoneMap.get(creature.zone).title} • ${creature.rarity}</p>
    `;
    refs.logbookGrid.appendChild(card);
  });
}

function startGame() {
  if (state.started) {
    return;
  }
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

  if (["ArrowDown", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    navigateToZone(state.currentZone + 1);
  }
  if (["ArrowUp", "PageUp"].includes(event.key)) {
    event.preventDefault();
    navigateToZone(state.currentZone - 1);
  }
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
  });
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
  if (state.discovered.has(creatureId) || state.missedCreatures.has(creatureId)) {
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
  state.triviaState = "answered";

  refs.triviaFeedback.textContent = correct ? "Confirmed. Creature profile restored." : "Incorrect. The silhouette drifts away.";
  refs.triviaFeedback.className = `modal__feedback ${correct ? "is-correct" : "is-wrong"}`;

  if (correct) {
    state.discovered.add(creature.id);
    state.triviaCorrect += 1;
    state.discoveryStreak += 1;
    state.bestDiscoveryStreak = Math.max(state.bestDiscoveryStreak, state.discoveryStreak);
    revealCreature(creature.id);
    setOxygen(state.oxygen + getOxygenReward(creature.rarity));
    window.setTimeout(() => showCreaturePanel(creature), 240);
    announce(`${creature.name} identified.`);
  } else {
    state.missedCreatures.add(creature.id);
    state.discoveryStreak = 0;
    markCreatureMissed(creature.id);
    hideCreaturePanel();
    announce(`${creature.name} slipped away.`);
  }

  computeScore();
  renderLogbook();
  window.setTimeout(closeTriviaModal, 420);
}

function revealCreature(creatureId) {
  const node = getCreatureNode(creatureId);
  if (!node) {
    return;
  }
  const zoneNode = getZoneNode(creatureMap.get(creatureId).zone);
  node.classList.add("is-revealing");
  node.classList.add("revealed");
  node.setAttribute("aria-label", creatureMap.get(creatureId).name);
  if (zoneNode) {
    zoneNode.classList.add("is-reveal-burst");
    window.setTimeout(() => zoneNode.classList.remove("is-reveal-burst"), 1300);
  }
  pulseElement(node, "is-spotlit", 1500);
  window.setTimeout(() => node.classList.remove("is-revealing"), 1000);
  pulseElement(refs.scoreReadout.closest(".hud-chip"), "is-energized", 900);
  pulseElement(refs.o2Meter, "is-refill", 1100);
}

function markCreatureMissed(creatureId) {
  const node = getCreatureNode(creatureId);
  if (!node) {
    return;
  }
  node.classList.add("missed");
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

function spawnPollution(zoneId) {
  clearZonePollution(zoneId);
  const zoneEl = getZoneNode(zoneId);
  if (!zoneEl) {
    return;
  }
  const layer = zoneEl.querySelector(".zone__pollution");
  const timeouts = new Set();
  ui.pollutionTimers.set(zoneId, timeouts);

  const spawnOne = () => {
    if (zoneData[state.currentZone].id !== zoneId || state.ended) {
      return;
    }
    const zone = zoneMap.get(zoneId);
    const type = zone.pollutionTypes[Math.floor(Math.random() * zone.pollutionTypes.length)];
    const node = document.createElement("button");
    node.type = "button";
    node.className = "pollution-item";
    node.setAttribute("aria-label", `Collect drifting ${type.replace("-", " ")}`);
    node.style.setProperty("--left", `${8 + Math.random() * 80}%`);
    node.style.setProperty("--size", `${2 + Math.random() * 1.6}rem`);
    node.style.setProperty("--duration", `${6.5 + Math.random() * 3.5}s`);
    node.style.setProperty("--drift", `${-8 + Math.random() * 16}vw`);
    node.style.setProperty("--spin", `${-180 + Math.random() * 360}deg`);
    node.innerHTML = pollutionSvg(type);

    const handleCollect = () => {
      node.classList.add("is-collected");
      state.pollutionCollected += 1;
      state.zonePollutionCollected[zoneId] += 1;
      state.pollutionCombo += 1;
      computeScore();
      updateZonePollutionMood(zoneId);
      updateHud();
      pulseElement(refs.pollutionReadout.closest(".hud-chip"), "is-energized", 650);
      cleanupNode();
      const nextTimeout = window.setTimeout(spawnOne, 620);
      timeouts.add(nextTimeout);
    };

    const handleMiss = () => {
      cleanupNode();
      state.pollutionCombo = 0;
      state.zonePollutionMisses[zoneId] += 1;
      updateZonePollutionMood(zoneId);
      const nextTimeout = window.setTimeout(spawnOne, 900);
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

  for (let index = 0; index < 4; index += 1) {
    const timeoutId = window.setTimeout(spawnOne, index * 900);
    timeouts.add(timeoutId);
  }
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
  const creaturePoints = Array.from(state.discovered).reduce(
    (total, creatureId) => total + creatureMap.get(creatureId).points,
    0
  );
  const pollutionBonus = Math.min(state.pollutionCollected * 2, 18);
  const streakBonus = Math.min(state.bestDiscoveryStreak * 2, 10);
  const fullZoneBonus = zoneData.reduce((total, zone) => {
    const zoneCreatures = creatureData.filter((creature) => creature.zone === zone.id);
    const foundAll = zoneCreatures.every((creature) => state.discovered.has(creature.id));
    return total + (foundAll ? 4 : 0);
  }, 0);
  state.score = Math.min(100, creaturePoints + pollutionBonus + streakBonus + fullZoneBonus);
  updateHud();
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
  const warning = state.oxygen <= 20 || zoneData[state.currentZone].id === "hadal";
  refs.o2Meter.classList.toggle("is-warning", warning);

  if (state.oxygen <= 22) {
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
  closeTriviaModal();
  closeLogbook();
  hideCreaturePanel();
  refs.gameContainer.classList.remove("is-active");
  refs.endScreen.hidden = false;

  const rank = getRank(state.score);
  refs.endTitle.textContent = rank.title;
  refs.endTitle.style.color = rank.color;
  refs.endScore.textContent = `Final Score: ${state.score} // ${rank.title}`;
  refs.endBreakdown.innerHTML = `
    <p>Creatures Found: ${state.discovered.size} / ${creatureData.length}</p>
    <p>Trivia Correct: ${state.triviaCorrect}</p>
    <p>Pollution Collected: ${state.pollutionCollected}</p>
    <p>Best Discovery Chain: ${state.bestDiscoveryStreak}</p>
    <p>Oxygen Status: Surfaced at 0%</p>
  `;
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
  state.missedCreatures.clear();
  state.zonePollutionMisses = Object.fromEntries(zoneData.map((zone) => [zone.id, 0]));
  state.zonePollutionCollected = Object.fromEntries(zoneData.map((zone) => [zone.id, 0]));
  state.transitionLocked = false;
  state.triviaState = "idle";
  state.modalCreatureId = null;
  state.bestDiscoveryStreak = 0;
  state.discoveryStreak = 0;
  refs.endScreen.hidden = true;
  refs.introScreen.hidden = false;
  refs.gameContainer.classList.remove("is-active");
  refs.gameContainer.setAttribute("aria-hidden", "true");
  refs.uiOverlay.hidden = true;
  document.body.classList.remove("modal-open", "panel-open");
  refs.triviaModal.hidden = true;
  refs.logbookPanel.classList.remove("is-open");
  refs.logbookButton.setAttribute("aria-expanded", "false");
  hideCreaturePanel();
  refs.shareFeedback.textContent = "";

  refs.zones.forEach((zoneEl) => {
    zoneEl.classList.remove("is-polluted", "is-cleansed", "is-reveal-burst", "is-miss-shock");
  });

  creatureData.forEach((creature) => {
    const node = getCreatureNode(creature.id);
    if (!node) {
      return;
    }
    node.classList.remove("revealed", "missed");
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
  const shareText = `I explored DeepDive and surfaced as ${rank.title} with ${state.score} points. I identified ${state.discovered.size}/${creatureData.length} creatures and cleared ${state.pollutionCollected} pollution items from the descent.`;
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
    particle.className = `particle particle--${useBio ? "bio" : zone.particleType}`;
    particle.style.setProperty("--x", `${Math.random() * 100}%`);
    particle.style.setProperty("--size", `${0.16 + Math.random() * 0.34}rem`);
    particle.style.setProperty("--duration", `${12 + Math.random() * 12}s`);
    particle.style.setProperty("--delay", `${-Math.random() * 18}s`);
    particle.style.setProperty("--drift", `${-5 + Math.random() * 10}vw`);
    particle.style.setProperty("--opacity", `${0.12 + Math.random() * 0.5}`);
    if (useBio) {
      particle.style.setProperty("--particle-color", colors[index % colors.length]);
    }
    layer.appendChild(particle);
  }
}

function pollutionSvg(type) {
  const color = pollutionPalette[type] || "#f4a261";
  const palette = `style="fill:${color}22;stroke:${color};"`;
  const svgs = {
    bottle: `<svg viewBox="0 0 64 64" ${palette}><path d="M26 4h12v8l4 6v36c0 3-2 6-6 6H28c-4 0-6-3-6-6V18l4-6V4Z"/><path d="M26 24h16"/></svg>`,
    bag: `<svg viewBox="0 0 64 64" ${palette}><path d="M20 16h24l6 36H14l6-36Z"/><path d="M24 16c0-5 4-8 8-8s8 3 8 8"/></svg>`,
    line: `<svg viewBox="0 0 64 64" ${palette}><path d="M10 12c16 10 28 10 44 0M12 52c12-18 28-18 40 0M8 30c20-12 28 18 48 0"/></svg>`,
    "ghost-net": `<svg viewBox="0 0 64 64" ${palette}><path d="M10 10h44v44H10Z"/><path d="M10 10l44 44M54 10 10 54M22 10v44M42 10v44M10 22h44M10 42h44"/></svg>`,
    gear: `<svg viewBox="0 0 64 64" ${palette}><path d="M31 8h2l3 6 7 2 6-3 4 4-3 6 2 7 6 3v2l-6 3-2 7 3 6-4 4-6-3-7 2-3 6h-2l-3-6-7-2-6 3-4-4 3-6-2-7-6-3v-2l6-3 2-7-3-6 4-4 6 3 7-2 3-6Z"/><circle cx="32" cy="32" r="8"/></svg>`,
    drum: `<svg viewBox="0 0 64 64" ${palette}><path d="M18 10h28l4 8v28l-4 8H18l-4-8V18l4-8Z"/><path d="M18 24h32M18 40h32"/></svg>`,
    microplastics: `<svg viewBox="0 0 64 64" ${palette}><circle cx="18" cy="18" r="4"/><circle cx="34" cy="14" r="3"/><circle cx="48" cy="22" r="5"/><circle cx="28" cy="34" r="4"/><circle cx="16" cy="46" r="5"/><circle cx="44" cy="44" r="4"/></svg>`,
    debris: `<svg viewBox="0 0 64 64" ${palette}><path d="M8 42 22 10l14 22 20-16-8 38H14Z"/></svg>`,
    sediment: `<svg viewBox="0 0 64 64" ${palette}><path d="M8 48c10-6 15-6 22 0 7-5 12-5 18 0 6-5 10-5 16 0v6H8Z"/></svg>`,
    container: `<svg viewBox="0 0 64 64" ${palette}><path d="M12 20h40v28H12Z"/><path d="M20 20v28M32 20v28M44 20v28"/></svg>`,
    oil: `<svg viewBox="0 0 64 64" ${palette}><path d="M18 42c0-8 6-13 14-13 2-8 9-13 17-12 7 1 13 8 13 16 0 10-7 17-17 17H29C22 50 18 47 18 42Z"/></svg>`,
  };
  return svgs[type] || svgs.bottle;
}

function getRank(score) {
  if (score <= 30) {
    return { title: "Surface Swimmer", color: "#cd7f32" };
  }
  if (score <= 60) {
    return { title: "Reef Diver", color: "#c0c0c0" };
  }
  if (score <= 90) {
    return { title: "Midnight Explorer", color: "#ffd166" };
  }
  return { title: "Deep Sea Legend", color: "#00f5d4" };
}

function getOxygenReward(rarity) {
  if (rarity === "Legendary") {
    return 30;
  }
  if (rarity === "Rare") {
    return 24;
  }
  return 16;
}

function isPanelOpen() {
  return refs.logbookPanel.classList.contains("is-open");
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
