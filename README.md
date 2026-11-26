## This is my portfolio!

This portfolio was built using the following tools:

- **React** and **TypeScript** for building the user interface.
- **Vite** for the build tooling and dev server.
- **React Router** for client-side routing.
- **Bootstrap** and plain **CSS** for styling.
- **Git** for version control.

The "currently listening to" card is served by a separate Spotify scrobbling
service, hosted apart from this repository.

#### It's currently live at [https://tiago-ds.github.io](https://tiago-ds.github.io) !

### Development

```bash
npm install
npm run dev        # start the dev server
npm run lint       # eslint
npm run typecheck  # tsc
npm run build      # typecheck + production build
```

Pushing to `main` deploys: a GitHub Actions workflow
(`.github/workflows/deploy.yml`) lints, builds and publishes `dist/` to
GitHub Pages. Pull requests run the same checks without deploying.

The games on the hidden `/#/secret` page come from the
[arcade](https://github.com/tiago-ds/arcade), which publishes its list as
`games.json`; `src/data/arcadeGames.json` is the copy shown if that fetch fails.

<small>Artdesign by [Ana Brito](https://www.behance.net/anaviibrito)</small>
