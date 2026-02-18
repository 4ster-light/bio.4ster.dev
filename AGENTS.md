# AGENTS.md

## Project Overview

A personal bio/links page built with Preact, TypeScript, Tailwind CSS, and DaisyUI. Deployed on
Cloudflare Pages.

## Development Commands

This project uses **Deno exclusively** for all development, build, and deployment tasks.

| Command            | Description                                     |
| ------------------ | ----------------------------------------------- |
| `deno task dev`    | Start the development server                    |
| `deno task build`  | Build the project for production                |
| `deno task start`  | Preview the production environment locally      |
| `deno task deploy` | Deploy the project to Cloudflare Pages          |
| `deno task check`  | Format, lint and type check the entire codebase |

## Deployment

- **Platform**: Cloudflare Pages
- **Tool**: wrangler (dev dependency)

### Deployment Workflow

When deploying:

1. Run `deno task check` to format, lint, and type check
2. Commit all changes with a conventional commit message
3. Push to the main branch
4. Run `deno task deploy`

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
- **Runtime**: Deno

## File Structure

```txt
/src
  /components     # UI components
  /lib           # Data and utilities
  /assets        # Styles
  App.tsx        # Main app component
  main.tsx       # Entry point
```
