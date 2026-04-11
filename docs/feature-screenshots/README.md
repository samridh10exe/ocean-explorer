# DeepDive Feature Screenshot Proof

These screenshots were captured from the running browser app at `1280x800`. Each folder is focused on one feature or judging concern so the project can be reviewed without relying only on the two-minute walkthrough.

## Folders

- `01-intro-and-zone-navigation/` - intro screen, Sunlight HUD/depth sidebar, Hadal pressure/depth state.
- `02-sonar-lifeform-returns/` - Midnight before sonar, lifeform-only sonar returns, scaled creature echo rings.
- `03-creature-trivia-reveal/` - trivia prompt, mid-animation reveal choreography, creature info panel.
- `04-wrong-answer-assisted-logbook/` - wrong-answer feedback, assisted second attempt mid-reveal, assisted logbook state.
- `05-pollution-cleanup/` - visible drifting trash targets, trash click/counter increment, cleansed zone feedback.
- `06-dark-zone-flashlight-and-squid/` - Midnight flashlight with clickable trash and giant squid background pass.
- `07-abyssal-vs-hadal-atmosphere/` - visual difference between Abyssal and Hadal zones.
- `08-results-and-score-breakdown/` - final rank screen and zone-by-zone score breakdown.

## Verification Notes

- Sonar screenshots show only creature/lifeform returns; pollution is not highlighted by sonar.
- Pollution screenshots use local `assets/pollution/*.png` sprites and include a visible waste counter increment from a click.
- Wrong-answer screenshots show the educational second-chance flow instead of removing the creature.
- Results screenshots show the score breakdown judges may not reach during a short demo.

## Regenerate

Run `python3 scripts/capture_feature_screenshots.py` from the repo root. The script launches a local server and clean headless Chrome session, disables zone-transition timing during capture, and freezes active effects at their clearest proof frame. It expects Chrome/Chromium and the Python `websocket-client` package.
