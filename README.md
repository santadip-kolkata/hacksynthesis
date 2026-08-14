# Hacksynthesis 2026 — DriveBlaze

Light "engineering-notebook" theme for the Hacksynthesis hackathon page, built with React + Vite.

## Run it

```bash
npm install
npm run dev
```

Open the printed localhost URL. Build for production with `npm run build`.

## Pages

- `/` — Home: hero, podium template (pending), 15-team finalist grid with a manually-settable 30-hour countdown timer in the center.
- `/results` — Top 3 results page. Currently set to "pending" until you flip `podium.declared` to `true` in `src/data/teams.js`.

## Editing content

- **Team data**: `src/data/teams.js` — update `name`, `track`, and `members` for each of the 15 teams (currently placeholders: Team 1–15, Member 1–3).
- **Final results**: same file, `podium` object. Set `declared: true` and fill in `first` / `second` / `third` with team names once judging ends — this updates both the home page podium teaser and the `/results` page.
- **Navbar items**: `src/components/Navbar.jsx` — the `NAV_ITEMS` array. I filled in Home / Finalists / Timer / Results / Contact as a placeholder set since specific items weren't provided — swap these for whatever you want.
- **Timer duration**: defaults to 30:00:00 and counts down. Use the "Set time" button in the UI to manually punch in HH/MM/SS, or change `TOTAL_SECONDS` in `src/components/Timer.jsx` to change the default/reset duration.

## Stack

React 19, Vite, react-router-dom. Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (data/labels).
