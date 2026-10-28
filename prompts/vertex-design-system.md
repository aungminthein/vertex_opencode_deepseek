# Vertex Design System Implementation

## Goal

Replace the default Next.js starter screen with a responsive Vertex design-system reference page based on the provided `vertex-designsystem.png`. The page should present the complete token and component inventory shown in the reference rather than add unrelated learning-platform features.

## Skills and guidance reviewed

- Read the repository `AGENTS.md` and its implementation approval workflow.
- No named or supporting domain skill applies to this static design-system page.
- Read the installed Next.js App Router guides for layouts/pages and Server/Client Components. Keep this page a Server Component because no client-side behavior is required.

## Code and assets inspected

- `app/page.tsx`: default Create Next App starter content.
- `app/globals.css`: Tailwind CSS v4 import and starter light/dark variables.
- `app/layout.tsx`: root layout, Geist font setup, and starter metadata.
- `package.json`: Next.js 16.4.3, React 19.3.0, Tailwind CSS 4; scripts include `lint`, `build`, and `dev`.
- The provided design reference: a warm off-white, compact responsive design-system sheet with numbered sections for colors, typography, type scale, spacing, radius/shadows, icons, buttons, inputs, badges, statuses, progress, cards, navigation, and principles.

## Decisions and assumptions

- Render the design-system specimen at `/` because the repository currently contains only the starter route.
- Reproduce the reference's content, hierarchy, colors, and dense panel layout; use responsive columns that collapse cleanly on narrow screens.
- Define reusable CSS custom properties for the primary/neutral palette, typography, spacing, radii, and shadows, then use those tokens consistently in the specimen.
- Use small inline SVGs for the icon samples instead of adding a dependency.
- Keep sample buttons and fields presentational/native; do not introduce app features, remote services, or new packages.
- Update root metadata to Vertex Design System and use the existing Geist fonts, with a serif display stack for the display typography sample.

## Expected files

- `app/page.tsx`: replace the starter with accessible markup for the fourteen design-system sections.
- `app/globals.css`: define the design tokens and responsive specimen styling; remove the starter dark-mode treatment.
- `app/layout.tsx`: update page metadata to Vertex branding.

## Requirements

- Match the reference's warm canvas, white rounded panels, orange accent, understated borders, compact labels, and typography.
- Include all fourteen reference areas and their values/examples: color swatches, typography, type scale, 4px spacing scale, radius/shadow samples, outline/filled icons, button states, search/select inputs, badges, status indicators, progress bar, course/lesson/resource cards, navigation/breadcrumbs/pagination, and design principles.
- Use semantic headings, visible labels, accessible names for icon-only elements, and native form controls.
- Avoid decorative or interactive behavior not present in the reference; ensure all typography and panel layouts remain legible on mobile.

## Security considerations

- This is a static presentation-only page: no user data, authentication, API calls, tokens, external assets, or data writes.
- Keep all content in the repository and avoid adding dependencies.

## Acceptance criteria

- The root page renders the Vertex design-system reference rather than Next.js starter content.
- The page represents all fourteen numbered sections and uses consistent reusable design tokens.
- At desktop widths, sections form the reference-like multi-column board; at mobile widths, sections stack without horizontal overflow.
- Metadata no longer identifies the app as Create Next App.
- Existing Next.js and Tailwind conventions remain intact, with no TypeScript or lint errors.

## Checks

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

## Manual test steps

1. Run `npm run dev` from the repository root.
2. Open `http://localhost:3000` and confirm the Vertex design-system page appears.
3. At desktop width, compare the section order, palette, token samples, and component examples to the provided image.
4. Resize to a narrow mobile viewport and confirm the panels stack, text remains readable, and no horizontal scrollbar appears.
5. Confirm the search input, select, and buttons render with their intended sample labels and states.
