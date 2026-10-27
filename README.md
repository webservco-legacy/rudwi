# RudWI

RudWI, my web desktop of 2009: windows that open, move, minimise and close, a taskbar, a start menu and desktop icons,
in HTML, CSS and jQuery. A historical archive, kept read-only: browser code of 2009 (jQuery 1.3, fixes for Internet
Explorer 6), not maintained.

## Its place in the line

RudWEb → WEb is my PHP framework line, one archive per era:

1. [rudweb-2007-2009](https://github.com/webservco-legacy/rudweb-2007-2009): the first engine and RudWEb 0.1 to 0.8;
2. [rudweb-2009-2011](https://github.com/webservco-legacy/rudweb-2009-2011): RudWEb 1 to 4 in Subversion, then 5.0;
   **rudwi** (this one), the web desktop, became an app of RudWEb 3 there (branch `3.0`), and
   [rudweb-extras](https://github.com/webservco-legacy/rudweb-extras) holds the notes, logos and layout drafts of the
   same years;
3. [web-2012-2017](https://github.com/webservco-legacy/web-2012-2017): WEb 5 to 7;
4. [web7](https://github.com/webservco-legacy/web7): WEb7 as a git archive;
5. the framework in git since 2017: [framework, branch v9](https://github.com/webservco/framework/tree/v9), then
   [framework](https://github.com/webservco/framework) (v10 to v13) and the WebServCo components.

## History

| Date | Commit | |
|---|---|---|
| 2009-11-09 | 40c2527 | RudWI as of 2009-11: the pages, scripts, styles and icons, the public copy of 2009-07 (`public_html/`), the test pages |
| 2009-11-16 | e0df76d | the side material: the design drafts (`extra/RudWI_work/`) and the tables of a small grid game (`extra/clickmania/`) |

## What is in it

- `RudWI.htm` and its variants: the desktop (`RudWI_login.htm`: the login screen); `scripts/`, `styles/`, `images/`,
  `icons/`: what they load;
- `public_html/RudWI/`: the public copy of 2009-07;
- `testing/`: my test pages of the window, menu and loader scripts, with the packages tried;
- `poster.*`, `layout_ir.psd`, `rudwi-proj.*`, `sigla_buburuza_new.png` (the RudWEb ladybug logo), `extra/RudWI_work/`:
  my design drafts.

Left out of the whole history: two downloaded demos without a licence.

## How it was built

From a tarball of the RudWI folder, turned into git in 2026 (3 commits), dated by the files. The last commit
before this README sets LF line endings and indents with spaces (not in the third-party code).

## Third-party code

Bundled as it shipped, each under its own licence: jQuery 1.3.2 (MIT or GPL); the jQuery Windows Engine plugin by Hernan
Amiune (MIT or GPL; `scripts/jquery.windows-engine.rud.js` is my changed copy); mb.containerPlus 2.3.2 (MIT or GPL, in
`testing/` and its elements in `extra/RudWI_work/elements/`); QueryLoader by Gaya Kessler; DD_belatedPNG by Drew Diller;
IE PNG Fix by Angus Turnbull and whatever:hover by Peter Nederlof (LGPL 2.1); the yensdesign OS demo in `testing/test/`
(its credits kept, as it asks); the icon set in `icons/` (its terms in `icons/readme.txt` and `icons/1license.txt`); the icon and flag sets
downloaded into `temp/`.

## Licence

New BSD (see `LICENSE`), added in 2026 for my own code; RudWI shipped no licence file.
