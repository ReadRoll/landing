# ReadRoll landing

Landing page for ReadRoll, live at https://readroll.xyz. Static Astro site.

<critical>
- Ask before any command that changes state: installing or updating dependencies, builds, the dev server, git writes. Read-only lookups (`git status`, reading files) are fine.
- When I refuse an edit and redirect, propose a general rule for "Code style" and add it once I confirm.
</critical>

## Documentation

- All the documentation lives in docs/.

## Commits

- Conventional Commits: `type(scope): short description`, subject in English.
- Subject only; add a body only if I ask.

## Frontend

- Use pnpm for all JavaScript commands: `pnpm install`, `pnpm <script>`, `pnpm exec <binary>`.
- Run the dev server in the background: `pnpm astro dev --background`; manage it with `pnpm astro dev stop|status|logs`.
- Before Astro work, consult the relevant guide: [routing](https://docs.astro.build/en/guides/routing/), [components](https://docs.astro.build/en/basics/astro-components/), [styling](https://docs.astro.build/en/guides/styling/), [i18n](https://docs.astro.build/en/guides/internationalization/).
- [tailwind](https://tailwindcss.com/docs/theme)
- Tailwind CSS 4, configured CSS-first in `src/assets/app.css` (no `tailwind.config.js`).

## Code style

- Prefer named intermediate variables and small methods over nested expressions (for example a ternary inside `map` inside a spread).
