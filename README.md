# DeepDive

DeepDive is a static, browser-based ocean depth explorer built for a hackathon. Players descend from the surface to the hadal zone, discover silhouetted sea creatures, manage oxygen, clean drifting pollution, use sonar in the dark, and finish with a scored expedition rank.

The core app is plain `index.html`, `styles.css`, and `app.js`: no framework, no npm install, no bundler, and no account system.

## Live Review Flow

For judging, the strongest path through the app is:

1. Start from the animated intro screen.
2. Descend through Sunlight and Twilight to show the depth meter and zone transitions.
3. Click a creature silhouette, answer trivia, and show the cinematic reveal/fact panel.
4. Clean at least one pollution item and show the Waste Cleared counter.
5. Enter Midnight to show the automatic flashlight cursor.
6. Press Space or the Sonar button to show lifeform-only echo returns.
7. Open the logbook and show discovered/assisted/hidden states plus rarity filters.
8. Show the final results screen with rank, score breakdown, and zone rows.

Optional demo moments: microphone breath refill, mobile tilt, and the delayed Twilight giant squid background pass.

## Feature Screenshots

The proof pack is in [`docs/feature-screenshots`](docs/feature-screenshots). These screenshots were regenerated from the current app state so judges can verify mechanics without relying only on the 2-minute walkthrough.

| Feature | Screenshot proof |
| --- | --- |
| Animated intro, HUD, and depth navigation | <img src="docs/feature-screenshots/01-intro-and-zone-navigation/02-sunlight-hud-depth.jpg" width="420" alt="Sunlight zone HUD and depth sidebar"> |
| Hadal pressure atmosphere | <img src="docs/feature-screenshots/01-intro-and-zone-navigation/03-hadal-depth-pressure.jpg" width="420" alt="Hadal zone pressure and depth state"> |
| Lifeform-only sonar returns | <img src="docs/feature-screenshots/02-sonar-lifeform-returns/02-lifeform-only-sonar-echoes.jpg" width="420" alt="Sonar returning creature echoes only"> |
| Trivia reveal choreography | <img src="docs/feature-screenshots/03-creature-trivia-reveal/02-dramatic-reveal-mid-animation.jpg" width="420" alt="Creature reveal animation"> |
| Wrong-answer learning and assisted logbook state | <img src="docs/feature-screenshots/04-wrong-answer-assisted-logbook/03-logbook-assisted-state.jpg" width="420" alt="Logbook showing assisted ID state"> |
| Pollution cleanup counter and feedback | <img src="docs/feature-screenshots/05-pollution-cleanup/02-trash-pop-and-counter-increment.jpg" width="420" alt="Waste cleared counter incrementing after pollution click"> |
| Twilight giant squid pass and Midnight flashlight | <img src="docs/feature-screenshots/06-dark-zone-flashlight-and-squid/02-giant-squid-background-pass.jpg" width="420" alt="Giant squid background pass in the Twilight zone"> |
| Abyssal vs Hadal atmosphere | <img src="docs/feature-screenshots/07-abyssal-vs-hadal-atmosphere/02-hadal-green-pressure-void.jpg" width="420" alt="Hadal pressure atmosphere"> |
| Final rank and zone breakdown | <img src="docs/feature-screenshots/08-results-and-score-breakdown/01-final-rank-score.jpg" width="420" alt="Final rank and score breakdown screen"> |

## Current Feature Set

- Five ocean zones: Sunlight, Twilight, Midnight, Abyssal, and Hadal.
- Zone-specific atmosphere with caustic light, marine snow, dark vignettes, pressure effects, and depth-based color changes.
- Animated intro screen with drifting particles, light rays, and distant creature silhouettes.
- Animated depth meter, vertical oxygen tank, score, waste counter, sonar HUD, and logbook controls.
- 15 discoverable creatures with data-driven assets, trivia answers, rarity labels, depth ranges, and fact cards.
- Silhouette discovery flow with correct-answer reveal choreography and oxygen refill.
- Wrong-answer learning flow that shows the correct ID, keeps the creature retryable, and records assisted discoveries.
- Sonar ping on Space/HUD button with expanding pulse and echo rings from hidden creatures only.
- Automatic flashlight cursor in Midnight, Abyssal, and Hadal.
- Pollution cleanup using inline SVG debris: bottle, plastic bag, tire, chemical drum, and microplastic cluster.
- Zone mood response when pollution is cleared or missed.
- Oxygen economy that drains faster in deeper zones and becomes critical near empty.
- Optional microphone breath refill using the Web Audio API.
- Progressive mobile tilt support for subtle scene/spotlight movement.
- Twilight giant squid background pass with a local NOAA hydrophone cue; the discoverable Giant Squid remains in Midnight.
- Creature logbook with found, assisted, seen, and hidden states plus Common/Rare/Legendary filters.
- Results screen with final rank, 100-point score breakdown, zone-by-zone summary, and copyable share text.

## Creature Roster

| Zone | Creatures |
| --- | --- |
| Sunlight | Brittle Star, Sea Turtle, Dolphin |
| Twilight | Octopus, Sperm Whale, Firefly Squid |
| Midnight | Anglerfish, Pelican Eel, Giant Squid |
| Abyssal | Basket Star, Sea Pig, Abyssal Snailfish |
| Hadal | Giant Tube Worm, Dumbo Octopus, Hadal Snailfish |

## Run Locally

From the project root:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

Breath mic requires `localhost` or HTTPS. If the HUD shows `Tap retry` or `Mic blocked`, click the Breath Mic chip again after granting microphone permission.

## Tech Notes

- Built with vanilla HTML, CSS, and JavaScript.
- CSS animations use transform, opacity, filters, and keyframes for smooth browser-native motion.
- Oxygen/depth updates run through `requestAnimationFrame`.
- Audio ambience and breath detection use the Web Audio API.
- Creature and zone content is data-driven from JavaScript objects.
- Pollution art is inline SVG so there are no external debris asset dependencies.
- The only active local audio file is `assets/audio/noaa_bloop.wav`, used for the Twilight squid pass.

## Credits

- Creature illustrations are local assets sourced from the Neal.fun deep-sea asset pack and adapted into the app experience.
- `assets/audio/noaa_bloop.wav` is from NOAA PMEL Acoustics public sound examples.
- Fonts are loaded from Google Fonts: Cinzel, Cormorant Garamond, and Space Mono.
