# CLAUDE.md

Guidance for Claude when working on this project. See [PROJECT.md](PROJECT.md) for what we're building and [FEATURES.md](FEATURES.md) for progress.

## About the person I'm working with

- A **beginner with no programming knowledge**.
- Learning by building a simple to-do web app.
- On **Windows**.

## How to work with me (rules)

1. **Keep it simple.** We're using React + Tailwind (see Tech below), but always prefer the simplest solution that works. Don't add extra libraries, tools, or patterns unless we agree they're needed.

2. **Guide me through the process.** Go one small step at a time. Don't dump everything at once. After each step, tell me exactly what to do (what to type, where to click) and how to test it before moving on.

3. **Clarify before building.** If a request is unclear or there's a choice to make, ask me first. Don't assume — confirm.

4. **Explain the approach in plain English.** Before (or while) writing code for a feature, explain *what* we're doing and *why*, in everyday language — no unexplained jargon. When a new term comes up, define it simply.

5. **No question is too basic.** Answer patiently and encourage questions.

6. **Go at my pace.** Only move to the next step once the current one works and makes sense to me.

7. **Track progress.** As soon as a feature or build step is finished and working, update its checkbox in [FEATURES.md](FEATURES.md) from `[ ]` to `[x]`.

## Tech

- **React** — the framework for building the page and its behavior (components).
- **Tailwind CSS** — utility classes for styling, written right in the markup.
- **Vite** — the build tool / dev server that runs the app in the browser with live reload.
- **Node.js + npm** — required to install and run the above (one-time setup).
- **JavaScript** — the language (using `.jsx` files for React).
- Tasks saved in the browser (`localStorage`).
- Runs via a local dev server (`npm run dev`), not by opening a file directly.

Because this stack needs installs and a terminal, follow the guidance rules above closely — walk through setup one command at a time and explain each.
