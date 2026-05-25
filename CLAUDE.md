# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # TypeScript compile + Vite build (base path: /react-antd-boilerplate/)
npm run preview   # Preview production build
npm run clean     # Remove dist directory
```

There is no test runner configured in this project.

Linting is via ESLint with `babel-eslint` and `eslint-plugin-react`. Run manually with `npx eslint src/`.

## Architecture

**Entry point:** `src/index.tsx` → mounts to `#app` in `index.html`.

**App shell (`src/app.tsx`):** Wraps everything in `StrictMode`, Ant Design `ConfigProvider` (custom white theme), and `BrowserRouter`. Routes are defined in `src/routes.tsx`.

**Routing (`src/routes.tsx`):** React Router v6 with lazy-loaded page components via `React.lazy()` + `Suspense`. All route paths are exported as the `routeUrls` constant — use this object instead of hardcoding paths. The `Base` component wraps all routes and provides the shell layout via `<Outlet>`.

**Layout shell (`src/components/base/Base.tsx`):** Ant Design `Layout` with a collapsible `Sider` (auto-collapses on mobile breakpoint). Exports `BaseContext` which carries a `setTitle` setter — pages call this via `useContext(BaseContext)` to update the header title. URL query params are handled here for redirect logic.

**Page components** live under `src/components/content/` and are lazy-loaded. They receive no props; they use `useContext(BaseContext)` to set the page title.

**State management:** No Redux store is wired up (packages are installed but unused). State is local `useState` or passed via `BaseContext`. If adding Redux, wire up the store in `src/index.tsx`.

## Styling

- Global utility classes are defined in `src/components/base/base.css` (padding, margin, text, layout helpers like `pull-left`, `pointer`, `text-center`, etc.). Use these before writing custom CSS.
- Component-scoped styles live in per-component `.css` files imported directly.
- Ant Design theme is customized in `src/app.tsx` via `ConfigProvider`. Modify the `theme` object there for global design token changes.
- No SCSS or CSS-in-JS — plain CSS only.

## Key conventions

- TypeScript strict mode is on (`noUnusedLocals`, `noUnusedParameters`). Unused variables will cause build errors.
- ESLint enforces single quotes and no unused vars.
- `EditorConfig`: 2-space indent, LF line endings, UTF-8.
- File names use PascalCase for components (e.g., `Base.tsx`, `Header.tsx`).
- The build sets `--base=/react-antd-boilerplate/` for GitHub Pages; adjust in `package.json` if deploying elsewhere.
