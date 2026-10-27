# Project: Personal Website

Tim Cha's personal website. A Next.js app (App Router) using React 19, TypeScript and Tailwind CSS v4. It is mostly static content, but it has one server route (`app/api/send-email`) for the contact form, so it needs a Node server/host rather than a pure static export.

# Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript (strict)
- **Styling:** Tailwind CSS v4 (CSS-first config via `@theme` in `app/globals.css`, no `tailwind.config`)
- **Animation:** `motion` (never import from `framer-motion`; see Conventions for which entry point)
- **Icons:** `react-icons`, `devicons-react`
- **Email:** Resend (`resend` package)
- **Fonts:** Merriweather and Merriweather Sans via `next/font/google` (set up in `app/layout.tsx`)

## Development Commands

The package manager is **yarn** (`yarn.lock`, `packageManager: yarn@1.22.22`). There is no pnpm lockfile.

- `yarn dev`: Start the server locally.
- `yarn build`: Run a production-optimized build on the application.
- `yarn start`: Serve the production build (run `yarn build` first).
- `yarn lint`: Check for eslint errors.
- `yarn fix`: Run prettier on the whole repo, then `eslint --fix`.
- `yarn photos`: Resize JPEGs in `public/` to max 2400px and strip metadata (GPS location included). Run it after adding photos; already-processed files are skipped.

There is no test suite. Verify changes with `yarn lint` and `yarn build` (the build also type-checks).

## Project Structure

- `app/page.tsx`: Home page. Composes the sections in order: Navigation, Intro, Experience, Projects, Skills, Connect, Footer.
- `app/photo-diary/page.tsx`: Photo diary page.
- `app/api/send-email/route.ts`: POST handler that sends the contact form via Resend.
- `app/layout.tsx`: Root layout, fonts, metadata.
- `app/globals.css`: Tailwind import, theme tokens, the `carousel` animation and custom `rounded-r-ellipse` utility.
- `components/`: One component per file, PascalCase filenames, default-style function components (`function Foo() {}` then export).
- `components/MotionProvider.tsx`: Wraps the app in `MotionConfig reducedMotion="user"` (in `app/layout.tsx`).
- `utils/`: Content as typed data, not hardcoded in JSX. `experiences.ts`, `projects.ts`, `interests.ts`, `skills.tsx`, `photos.ts`. **To change site content, edit these files** rather than the components.
- `public/assets/`: Photo diary images. They are imported as modules in `utils/photos.ts` (giving `StaticImageData`), so a new photo needs an import plus an entry in the `photos` array with `alt` text, then `yarn photos`.

## Conventions

- **Server vs client components:** Components are server components by default. Only add `"use client"` when a component needs state, effects, event handlers or browser-only libraries (currently Navigation, IntroSection, ConnectSection, PhotoDiary, MotionProvider).
  - In server components, animate with `import * as motion from "motion/react-client"`. Variants passed to it must be plain serializable data (no functions like `stagger()`).
  - In client components, use `import { motion } from "motion/react"`.
- **Headings:** One `h1` per page (the intro heading on `/`, the title on `/photo-diary`). Section titles are `h2`, card titles are `h3`, and subtitles like company or dates are `p`.
- **Accessibility:**
  - Typewriter headings put the full text in an `sr-only` span and wrap the animation in `aria-hidden`.
  - External links use `target="_blank" rel="noopener noreferrer"` and say "(opens in a new tab)" in their `aria-label`.
  - CSS animations get a `motion-reduce:` fallback.
- Use the `@/` path alias for imports (maps to repo root), e.g. `@/components/Navigation`, `@/utils/projects`.
- Theme colors are Tailwind tokens defined in `globals.css`: `background`, `foreground`, `tertiary`, `quaternary` (dark theme, `#121212` background). Use these rather than raw hex values.
- Scroll-in animations follow a pattern: a `variants` object with `hidden`/`visible`, plus `initial="hidden"`, `whileInView="visible"`, `viewport={{ once: true }}`.
- Navigation uses hash links to section ids (e.g. `/#experience-section`); keep ids in sync if sections are renamed.
- Code is formatted with Prettier (defaults, double quotes, trailing commas). Run `yarn fix` before committing.
- The repo uses short informal commit messages.

## Environment

The contact form needs two server-side env vars, set in `.env` (never committed): `RESEND_API_KEY` and `RECIPIENT_EMAIL_ADDRESS`. Only these names are known; never look at their values.

## IMPORTANT

**DO NOT READ** the secrets file or store it into memory, EVER. ALWAYS IGNORE [.env](.env).
