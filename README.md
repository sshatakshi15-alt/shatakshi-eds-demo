# datacom-eds

Edge Delivery Services (EDS) project for datacom.com, scaffolded from
`aem-boilerplate`. First page migrated from the existing Adobe AEM Sites
implementation of datacom.com.

## Datacom project notes

First page migrated: `au/en/insights/articles/ai-in-the-workplace-new-course-to-equip-future-tech-talent.html`
(source: https://datacom.com/au/en/insights/articles/ai-in-the-workplace-new-course-to-equip-future-tech-talent).
AU locale only for now; NZ (`/nz/en/...`) deferred until requested. This
is the first page onboarded to EDS for this domain — no prior EDS repo
existed to reconcile conventions with.

Custom blocks added beyond stock `aem-boilerplate`:
- `article-header` — read time / description / author byline strip
  (table: label | value, keys "Read time", "Author", "Description").
- `text-image` — heading + copy + CTA paired with an image, promo strip
  (table: single row, 2 cells: text/CTA | image).
- `discover-more` — "Discover more" related-article card grid (table:
  one row per card, 4 cells: image | tag | title-as-link | description).
  Intentionally static content, not query-index-driven — confirmed with
  stakeholder that this should match the source page's fixed 3-card list
  rather than pulling live from a query index.

Still open / not yet wired up:
- `fstab.yaml` has a placeholder mount URL — needs the real Google
  Drive/SharePoint folder once the authoring source is decided.
- Social-share icons and the in-page sticky anchor nav from the source
  page were deliberately left out of the first migration; revisit if a
  later page needs them.
- Header/footer content (mega-nav, marketing footer) not yet authored —
  this repo only has the boilerplate's default header/footer blocks.
  The source site's global chrome should become the `/header` and
  `/footer` documents once someone owns that piece of work.

## Environments
- Preview: https://main--shatakshi-eds-demo--sshatakshi15-alt.aem.page/
- Live: https://main--shatakshi-eds-demo--sshatakshi15-alt.aem.live/

## Documentation

Before using the aem-boilerplate, we recommand you to go through the documentation on https://www.aem.live/docs/ and more specifically:
1. [Developer Tutorial](https://www.aem.live/developer/tutorial)
2. [The Anatomy of a Project](https://www.aem.live/developer/anatomy-of-a-project)
3. [Web Performance](https://www.aem.live/developer/keeping-it-100)
4. [Markup, Sections, Blocks, and Auto Blocking](https://www.aem.live/developer/markup-sections-blocks)

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate` template
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `shatakshi-eds-demo` directory in your favorite IDE and start coding :)
