# AGENTS.md

## Project Overview

A personal bio/links page built with Preact, TypeScript, Tailwind CSS, and DaisyUI. Deployed on
Cloudflare Pages.

## Development Commands

| Command            | Description                                |
| ------------------ | ------------------------------------------ |
| `pnpm run dev`     | Start the development server               |
| `pnpm run build`   | Build the project for production           |
| `pnpm run preview` | Preview the production environment locally |
| `pnpm run check`   | Format, lint and type check (Deno only)    |

> [!NOTE]
> The project uses `package.json` for dependencies and npm scripts, while `deno.jsonc` is used for
> Deno-specific tooling (formatting, linting, type checking).

## Deployment

- **Platform**: Cloudflare Pages
- **Tool**: wrangler (dev dependency)

### Deployment Workflow

**Automatic deployments** are configured through Cloudflare Pages. When code is pushed to the main
branch, Cloudflare automatically builds and deploys the site.

For manual deployments:

1. Run `pnpm run check` to format, lint, and type check
2. Commit all changes with a conventional commit message
3. Push to the main branch

## Git Workflow

- **Host**: GitHub
- **Branch**: main
- **Commit Style**: Conventional commits (e.g., `feat(links): organize links into sections`)

### Commit Guidelines

- Use meaningful yet short commit messages
- Follow conventional commit format: `type(scope): description`
- Ensure code is linted and formatted before committing

## Tech Stack

- **Framework**: Preact (React alternative)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Library**: DaisyUI v5
- **Build Tool**: Vite
- **Runtime**: Deno + Pnpm

## File Structure

```txt
/src
  /components     # UI components
  /lib           # Data and utilities
  /assets        # Styles
  App.tsx        # Main app component
  main.tsx       # Entry point
```
