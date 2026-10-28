# Move Design System Route and Restore Home

## Goal

Keep the implemented Vertex design-system showcase available at `/design` and restore the repository's original starter homepage at `/`.

## Guidance reviewed

- Read the repository `AGENTS.md` implementation workflow.
- Use the installed Next.js App Router convention: a route is defined by a `page.tsx` file in its route segment directory (`app/design/page.tsx`).
- No additional domain skill applies to this route-only change.

## Code and assets inspected

- `app/page.tsx`: currently contains the implemented Vertex design-system page.
- `app/globals.css`: contains the design-system tokens and styles.
- `app/layout.tsx`: current metadata identifies the page as Vertex Design System.
- `git show HEAD:app/page.tsx`: confirms the exact original Next.js starter homepage to restore.

## Decisions and assumptions

- Move the existing design-system page component to `app/design/page.tsx` without changing its content.
- Restore the exact tracked `app/page.tsx` content from `HEAD`, preserving the original page structure and links.
- Retain the current global styles and design-system tokens, which are only used by the `/design` page; restore the root page's metadata to its original starter values.
- Do not remove or alter user-provided untracked assets or unrelated worktree changes.

## Expected files

- `app/page.tsx`: restore the original starter homepage.
- `app/design/page.tsx`: host the existing design-system showcase.
- `app/layout.tsx`: restore the original root metadata.

## Requirements

- `/` renders the original starter homepage.
- `/design` renders the complete responsive Vertex design-system showcase.
- Keep design tokens and styling intact and avoid adding packages or unrelated features.

## Security considerations

- Static rendering only. No APIs, credentials, or user data are involved.

## Acceptance criteria

- Both routes compile and respond successfully.
- Root page includes the original starter heading and links.
- Design route includes the design-system heading and section inventory.
- Lint and targeted TypeScript checks pass.

## Checks

- `npm run lint`
- `npx tsc --noEmit --jsx react-jsx --moduleResolution bundler --module esnext --target ES2017 --strict --skipLibCheck --esModuleInterop app/page.tsx app/design/page.tsx`
- Run the dev server and request both `/` and `/design`.

## Manual test steps

1. Run `npm run dev`.
2. Visit `http://localhost:3000` and confirm the original starter screen is restored.
3. Visit `http://localhost:3000/design` and confirm the Vertex design-system page is shown.
4. Resize the design route to a mobile viewport and confirm the layout remains responsive.
