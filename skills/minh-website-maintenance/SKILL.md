---
name: minh-website-maintenance
description: maintain minh.website in legitminh.github.com, including project guides, lowercase copy, keyflow interactions, and github pages delivery. use for this personal website, not unrelated sites.
---

# minh.website maintenance

- write all visitor-facing prose in lowercase unless the user explicitly requests otherwise: names, headings, navigation, buttons, descriptions, instructions, image text, alt text, and metadata. preserve the case of executable code, case-sensitive identifiers, paths, and destination urls; lowercase the human-facing labels inside code examples. author lowercase copy rather than hiding uppercase text with css.
- every action must be reachable through keyflow shortcuts as well as pointer/touch input. use the package's buttons, links, or interactables. ask the user before introducing any interaction outside keyflow; do not silently fall back to native buttons, anchors, or custom keyboard handlers.
- use `ButtonPositional` / `Link` for visible controls. use `Button`, `StaticButton`, or another persistent keyflow component when its shortcut must work offscreen. the top all-projects control must remain keyboard-active offscreen; do not duplicate it at the bottom.
- keep all site content in the home page using hash-based screens, including about, the blog index and posts, and older projects. old path urls redirect to their matching hashes. load screen content on demand and keep a single keyflow document/camera mounted. keep project usage, configuration, and installation distinct. project cards contain names only, use the existing card component, and share one project list. keep discrete after siêu việt, notework, and keyflow unless the user changes the order.
- match the existing keyflow typography, theme, grid spacing, shortcut labels, and left-aligned layout. use `LineText`, `Image`, and other shared primitives. omit redundant category labels above project names. avoid a separate centered, small-type, boxed design for project screens.
- show the animated grid background only on the main screen. unmount it on every content screen and cancel its animation frame/listeners on teardown.
- the scroll preference controls mouse-wheel/touch paging only. when content overflows vertically, the down/up controls must remain visible and keyboard-active in both scrolling modes. button and keyboard paging must animate smoothly even when pointer lockstep is disabled. native mouse scrolling and keyboard paging must share the current position. fix reusable behavior in the keyflow package rather than copying library internals into the site.
- verify the installed keyflow version against published releases, review migration notes, and keep the vendored archive, dependency, lockfile, and documentation consistent. preserve saved preferences when upgrading.
- preserve urls and filenames when changing prose. provisional siêu việt release links are authorized until builds are published; live github release assets replace them. keep pending/unavailable states explicit.
- validate the site with type checks and a production build. for interaction changes, check keyboard-only navigation, persistent controls offscreen, both scrolling modes, hash reload/back, and narrow layouts. when pushing is requested, commit the completed changes, push, and verify the github pages workflow.
