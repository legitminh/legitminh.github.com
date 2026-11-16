[tiếng việt](README.md) · **english**

# minh.website

a sveltekit portfolio using the **keyflow** interaction system for keyboard-routed buttons, theme and zoom settings, color-flood transitions, and paged scrolling.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
```

the production build is a static site in `build/`. github pages deployment remains in `.github/workflows/svelte.yml`.

## shared interaction package

keyflow's standalone local repository is at `../keyflow`. this website consumes `@legitminh/keyflow` through the versioned archive in `vendor/`, so a clean checkout can build without the sibling repository or an npm publication.

the site uses **keyflow 0.8.3**, vendored from its [github release](https://github.com/legitminh/keyflow/releases/tag/v0.8.3).

`src/routes/+layout.svelte` imports the package stylesheet and mounts `Keyflow`. it also supplies the sveltekit navigation hook. the empty storage prefix preserves existing visitors' session preferences. `key_presets.alphanumeric` assigns shortcuts from all 36 alphanumeric keys, in the order `abcdefghijklmnopqrstuvwxyz0123456789`. pages import the shared `Document`, buttons, links, and layout primitives (`LineText`, `Indent`, and `Image`) directly from the package.

links, the theme toggle, and the home page's settings use visibility-based positional controls; their shortcuts update as controls enter or leave view. the audio player's `Button` controls use automatic positional ordering and stay registered offscreen until unmounted. the project guides use a persistent `StaticButton` for escape/back, and all guide actions use keyflow controls. keyboard paging remains available and smoothly animated when mouse lockstep scrolling is disabled.

site content, project cards, media, navigation destinations, and the decorative `Grid` effect stay in this repository.

## project guides

all internal navigation opens hash-based screens within the home page, including about, the blog index and posts, older projects, and the recent project guides. the old path urls remain as redirects. `src/lib/components/ScreenBrowser.svelte` loads screen modules on demand; one shared keyflow document stays mounted. the grid background runs only on the main screen. hashes such as `#project/notework/installation/ios` support direct links, reloads, and browser back without separate content pages. legacy screen metadata lives in `src/lib/data/screens.ts`, and extracted content lives in `src/lib/screens/`. usage, configuration, and installation are separate screens. content lives in `src/lib/data/projects.ts`.

siêu việt downloads read public assets from `legitminh/vietmoi` github releases, including development prereleases, and select the newest matching build. ubuntu `.deb` files are recognized alongside other linux naming schemes. if the api is unavailable, `publishedRelease` retains verified, versioned release-asset links. update that fallback only after the corresponding release is published.

to update keyflow from a published release, download its installable archive into `vendor/` (use the new version):

```sh
curl -fL https://github.com/legitminh/keyflow/releases/download/v0.8.3/legitminh-keyflow-0.8.3.tgz -o vendor/legitminh-keyflow-0.8.3.tgz
```

for a local development release, validate and increase its package version in the sibling repo, then run there:

```sh
pnpm check
pnpm build
pnpm test
pnpm pack --pack-destination ../legitminh.github.com/vendor
```

install the resulting archive from this website's directory (use its new version):

```sh
pnpm add ./vendor/legitminh-keyflow-0.8.3.tgz
pnpm check
pnpm build
```

commit the archive, `package.json`, and `pnpm-lock.yaml` together. keyflow's readme contains the integration api, customization options, runnable demo, and browser-test instructions for other svelte 5 projects.

## project conventions

read `skills/minh-website-maintenance/SKILL.md` before editing. visitor-facing prose is lowercase; executable code and destination urls retain their required case. interactions use keyflow, and any exception requires the user’s approval. project screens share the site’s typography and layout primitives.

## languages

vietnamese is the default. visitors switch to english in the home screen settings; the choice persists in `localStorage` under `minh.website.language`, independently of keyflow session preferences. `src/lib/i18n.svelte.ts` owns the language state. source strings supply english; the vietnamese catalog is in `src/lib/locales/`. article catalogs are imported by their lazy screen modules. the document language, metadata, captions, image variants, and accessibility labels follow the selected language. urls, filenames, code and existing media are preserved.

run `pnpm check:i18n`, `pnpm check`, and `pnpm build`. browser verification covers keyboard-only language selection, persistent preferences, both scroll modes, offscreen escape/back, hash reloads, api-unavailable download links, translated articles and narrow layouts.
