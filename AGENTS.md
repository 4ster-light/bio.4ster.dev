# AGENTS.md

## Project Overview

A personal bio/links page built with plain HTML, vanilla JavaScript, Tailwind CSS and DaisyUI.
Deployed as a static site on Cloudflare Pages.

## Development Commands

| Command              | Description                             |
| -------------------- | --------------------------------------- |
| `pnpm run dev`       | Start the development server            |
| `pnpm run build`     | Build the project for production        |
| `pnpm run preview`   | Preview the production build locally    |
| `pnpm run check`     | Format, lint and check imports (Biome)  |
| `pnpm run check:fix` | Apply formatting and lint fixes (Biome) |

> [!NOTE]
> The project is managed with pnpm. `biome.json` configures formatting and linting.

## Deployment

- **Platform**: Cloudflare Pages
- **Tool**: wrangler (dev dependency)

### Deployment Workflow

**Automatic deployments** are configured through Cloudflare Pages. When code is pushed to the main
branch, Cloudflare automatically builds and deploys the site.

For manual deployments:

1. Run `pnpm run check` to format, lint, and check imports
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

- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **UI Library**: DaisyUI v5
- **Language**: HTML, CSS, vanilla JavaScript
- **Tooling**: Biome
- **Package Manager**: pnpm

## File Structure

```txt
index.html        # Page markup and link content
/src
  /assets         # Styles
  /lib            # Small utilities
  main.js         # Entry point (styles + QR dialog)
/vite.config.js
/biome.json
```
