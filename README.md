# DeepDive

DeepDive is a static, scroll-driven ocean depth explorer built for a hackathon. It takes the player from the surface to the hadal zone with cinematic transitions, silhouette creature reveals, trivia-based discovery, pollution cleanup, an oxygen system, a logbook, and an end-of-run rank screen.

## Run locally

From the project root:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

## What is done

- Single-page HTML/CSS/JS build with no framework or bundler
- Five ocean zones with custom atmosphere and depth-driven visual progression
- JS-controlled zone transitions with animated depth instrumentation
- Creature silhouette discovery flow with trivia and reveal choreography
- Pollution collection loop with zone mood response
- Logbook and creature detail panel
- O2 drain/refill loop and surfaced end-state scoring
- Local art assets flattened into `assets/`

## Quick checklist

- [ ] Start the dive from the intro screen
- [ ] Move through all five zones with wheel or arrow keys
- [ ] Reveal at least one creature
- [ ] Collect at least one pollution item
- [ ] Open and close the logbook
- [ ] Confirm O2 drains and refills
- [ ] Confirm the end screen appears when O2 reaches 0
- [ ] Check Chrome DevTools Console for zero errors
- [ ] Check Network for zero 404s
