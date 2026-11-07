# minh.website

A SvelteKit portfolio using the **Keyflow** interaction system for keyboard-routed buttons, theme and zoom settings, color-flood transitions, and paged scrolling.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
```

The production build is a static site in `build/`. GitHub Pages deployment remains in `.github/workflows/svelte.yml`.

## Shared interaction package

Keyflow's standalone local repository is at `../keyflow`. This website consumes `@legitminh/keyflow` through the versioned archive in `vendor/`, so a clean checkout can build without the sibling repository or an npm publication.

The site uses **Keyflow 0.2.0**, vendored from its [GitHub release](https://github.com/legitminh/keyflow/releases/tag/v0.2.0).

`src/routes/+layout.svelte` imports the package stylesheet and mounts `Keyflow`. It also supplies the SvelteKit navigation hook. The empty storage prefix preserves existing visitors' session preferences. `key_presets.alphanumeric` assigns shortcuts from all 36 alphanumeric keys, in the order `abcdefghijklmnopqrstuvwxyz0123456789`. Pages import the shared `Document`, buttons, links, and layout primitives (`LineText`, `Indent`, and `Image`) directly from the package.

Links, the theme toggle, and the home page's settings use visibility-based positional controls; their shortcuts update as controls enter or leave view. The audio player's `Button` controls use automatic positional ordering and stay registered offscreen until unmounted. These APIs remain supported in 0.2.0; static shortcuts are optional and are not needed for the site's existing controls.

Site content, project cards, media, navigation destinations, and the decorative `Grid` effect stay in this repository.

To update Keyflow from a published release, download its installable archive into `vendor/` (use the new version):

```sh
curl -fL https://github.com/legitminh/keyflow/releases/download/v0.2.0/legitminh-keyflow-0.2.0.tgz -o vendor/legitminh-keyflow-0.2.0.tgz
```

For a local development release, validate and increase its package version in the sibling repo, then run there:

```sh
pnpm check
pnpm build
pnpm test
pnpm pack --pack-destination ../legitminh.github.com/vendor
```

Install the resulting archive from this website's directory (use its new version):

```sh
pnpm add ./vendor/legitminh-keyflow-0.2.0.tgz
pnpm check
pnpm build
```

Commit the archive, `package.json`, and `pnpm-lock.yaml` together. Keyflow's README contains the integration API, customization options, runnable demo, and browser-test instructions for other Svelte 5 projects.
