# Growvo Landing

Static landing page for Growvo, ready for GitHub Pages at `growvo.app`.

## Routes

- `/`
- `/privacy/`
- `/terms/`

## Local Preview

```sh
npm run build
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

To preview the production artifact instead:

```sh
cd dist
python3 -m http.server 4173
```

## Deployment

The repo includes:

- `CNAME` for `growvo.app`
- `.nojekyll`
- `.github/workflows/pages.yml`
- `npm run build`, which writes the deployable site to `dist/`

After pushing to `main`, enable GitHub Pages with GitHub Actions as the source.
