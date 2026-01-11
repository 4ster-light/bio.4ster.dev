# Project Commands

This project uses **Deno exclusively** for all development, build, and deployment tasks.

## **Available Commands**

| Command            | Description                                     |
| ------------------ | ----------------------------------------------- |
| `deno task dev`    | Start the development server                    |
| `deno task build`  | Build the project for production                |
| `deno task start`  | Preview the production environment locally      |
| `deno task deploy` | Deploy the project to Cloudflare Pages          |
| `deno task check`  | Format, lint and type check the entire codebase |

### **Notes**

- Deployment and preview use `wrangler` (a dev dependency).
- Cloudflare Pages is the target deployment platform.

# Git and GitHub

This project uses Git for version control and is hosted on GitHub.

It also follows conventional commit messages for better readability and automated changelog
generation.

When told to deploy, besides running `deno task deploy`, also make sure first all changes are
committed with an appropriate message and pushed to the main branch before doing so.

## **Notes**

- Use meaningful yet short commit messages for better project history following conventional commit
  messages.
- Ensure code is linted and formatted before committing changes.
