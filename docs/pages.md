# Pages

## Goal

Add a page to readroll.xyz in every language without duplicating its layout or content.

## Adding a page

1. **One page file per language.** English has no prefix, other languages live under their prefix (`/changelogs` ↔ `/fr/nouveautes`). Slugs are translated and written in kebab-case.
2. **One route map entry.** Declare the page's URL in every language under a single route key. Every language is required: a missing one is a type error.
3. **One shared page component.** Each page file is a thin wrapper that renders it. The component does the work: it reads the language from the request, takes its texts from the dictionaries, and passes its route key to the layout and to the language menus.

## Why

- **Astro routes by file only.** It does not generate one page per language, has no named routes and does not type URLs. Explicit files keep every URL visible in the project tree.
- **Thin wrappers over a dynamic route.** A `[locale]` route would save a few lines but hide the URLs and mix the default language's unprefixed paths with prefixed ones. A wrapper is only an import and a render.
- **One shared component.** The page is written once; languages differ only by their dictionary and their content files.
- **The route key links the languages.** It lets the head emit `hreflang` links and lets the language menu point to the same page in the other language, instead of falling back to the home page.

## Checklist

- Page files: one per language.
- Route map: the page's URL in every language.
- Dictionaries: the page's texts in every language, including its title.
- Page component: passes its title and route key to the layout, and its route key to the footer and navigation.

See the Internationalization doc for how the current language and the route map work.
