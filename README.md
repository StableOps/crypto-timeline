# Crypto Timeline

A chronological timeline of crypto milestones — from the genesis block to stablecoin legislation, covering protocol upgrades, regulations, security incidents, and market cycles.

## Development

```bash
npm install
npm run dev     # dev server at http://localhost:4321
npm run build   # build to dist/
```

## Adding Events

Edit the `events` array in `src/data/en.json` and `src/data/zh.json`.

Fields:
- `date` — event date, format `YYYY-MM-DD`
- `cat` — category: `protocol` `regulation` `security` `market` `stablecoin` `adoption`
- `imp` — importance: `major` or `minor`
- `title` — event title
- `desc` — event description

## Languages

- `/` — English (default)
- `/zh/` — Chinese
- Auto-redirects to `/zh/` if browser language is Chinese

UI strings are in `src/i18n/`.
