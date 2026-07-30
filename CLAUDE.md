@AGENTS.md

# Lumière — project notes

Hotel booking frontend. Design source of truth: `../lumiere-landing.html` — one folder up, **outside this repo**. It is a self-contained HTML prototype whose `:root` vars are the origin of the `@theme` tokens in `app/globals.css`.
Implementation plan (phases 0–5): `C:\Users\Admin\.claude\plans\c-users-admin-documents-projects-lumier-glimmering-sloth.md`.

## Stack gotchas that will bite you

- **shadcn/ui runs on Base UI, not Radix.** `components.json` style is `base-nova`; the installed primitive lib is `@base-ui/react`. Do not write Radix imports or Radix-specific patterns.
  - There is **no `form` component** in the Base UI registry — `npx shadcn view form` returns an empty stub and `add form` silently does nothing. Use `components/ui/field.tsx` + react-hook-form.
  - Theme preset code, for re-applying the look: `npx shadcn@latest apply --preset b4BlSKrGgy` (Base UI · Nova · Violet · Lora headings / Montserrat body · Lucide · radius 0.625rem).
- **Tailwind v4, CSS-first.** No `tailwind.config.*` — all tokens live in `@theme` in `app/globals.css`. Colors must use the `--color-*` namespace: `--bg-primary` does *not* generate a `bg-primary` utility.
  - The Lumière block is **`@theme static`** on purpose. Plain `@theme` only emits variables that some utility references, and the shadcn semantic layer in `:root` reads them through bare `var()` — without `static` those reads silently resolve to nothing. Don't drop the keyword.
  - **Radius scale is shadcn's, not the design's**, and that is deliberate: `--radius: 0.625rem` (10px) makes the derived scale line up with the design already — `rounded-sm` 6px chips, `rounded-lg` 10px buttons, `rounded-xl` 14px cards, `rounded-full` pills. Only the two gaps got tokens: `rounded-panel` (20px, search bar) and `rounded-banner` (28px, CTA). Overriding `--radius-lg` to the design's 14px would silently fatten every shadcn button.
  - **`accent` belongs to shadcn**, where it means *hover surface*, not brand colour. The brand lavender is `--primary` / `bg-lavender-500`; the design's `--accent-soft` wash is `--color-brand-soft`. A Lumière `--color-accent` in `@theme` gets overridden by shadcn's `@theme inline` mapping and is a trap.
  - `font-heading` is live: shadcn's card/dialog/sheet titles use it, and it maps to Lora. Keep it.
- **Fonts** come from `next/font` vars set on `<html>` in `app/layout.tsx` (`--font-lora`, `--font-montserrat`), mapped in `@theme inline`: `--font-sans → var(--font-montserrat)`, `--font-heading`/`--font-serif → var(--font-lora)`. Never write `--font-sans: var(--font-sans)` — a self-referential custom property is invalid CSS and silently kills all typography. The shadcn preset merge shipped exactly that; it is fixed, don't reintroduce it.
- **Next 16, not 14/15.** `params`/`searchParams` are Promises (await them; use generated `PageProps<'/route'>` types); `next/image` `priority` is deprecated → `loading="eager"` + `fetchPriority="high"`; `middleware.ts` → `proxy.ts`; `next lint` is gone (`npm run lint` runs eslint directly); Turbopack is default; `cacheComponents` intentionally left OFF (classic caching model); `revalidateTag` takes 2 args; `error.tsx` receives `unstable_retry`.
- **lucide-react v1 has no brand icons.** Instagram/Facebook/Twitter live in `components/shared/social-icons.tsx` as the design's own stroke-matched paths. `Waves` (the design's sea-view icon) is also absent — pick a substitute when the room amenities land.
- **`<main>` lives in the root layout**, so pages return sections, never their own `<main>`.

## Env

`.env.example` is the documented template — `.gitignore` has an `!.env.example` exception so it stays committed. `NEXT_PUBLIC_USE_MOCKS` defaults to mocks **ON**: any value other than `"false"` keeps them enabled, so the app runs with no backend. `DEV_ORIGIN` replaced the IP that used to be hardcoded in `next.config.ts`.

## Verify

`npx tsc --noEmit` · `npm run lint` · `npm run build`.
On Windows, PowerShell `Start-Process npm` fails (`npm` is a `.cmd`) — start the dev server through the Bash tool in background instead.

## Phase status

- **Phase 0 (toolchain) — done.** shadcn init via preset, 17 `components/ui` primitives, motion + embla + RHF + zod + date-fns, `.env.local`/`.env.example`, `next.config.ts` (env-driven `DEV_ORIGIN`, `picsum.photos` remotePatterns). tsc / lint / build / dev smoke all green.
- **Phase 1 (foundation) — done.** Token layer + shadcn semantic mapping (dark-only), `container-wide` utility replacing the design's `.wrap`, film grain / selection / scrollbar, serif `h1`–`h4`; real metadata + OG; `SiteHeader` (absolute over hero) + `SiteFooter` (CTA · sitemap · social · legal) mounted in the root layout; `lib/constants.ts` holds all static copy. `components/ui/nav/` deleted — `components/ui/` is shadcn-only now. tsc / lint / build / dev smoke green.
  - Header is `absolute`, per the design — **pages without a hero must clear it themselves with `pt-20`**.
  - Footer links with no planned route use `href="#"`; give them real paths as pages land.
- **Next: Phase 2 (API layer)** — `lib/api/` types → client → mocks → endpoint modules.
  - Not yet built, and needed before Phase 4: route groups `(main)`/`(auth)`. Header/footer currently mount in the root layout, so the auth pages will need them lifted into a `(main)` layout to get a header-less shell.
  - `app/not-found.tsx` is still an empty div (Phase 4).
