# Features Checklist

Progress tracker for the to-do app. See [PROJECT.md](PROJECT.md) for details.

**Status:** 2 of 8 build steps done · **Next up:** Step 3 — Add tasks (React state)

## Core features

- [ ] **Add** — type a task and add it to the list (button or Enter key)
- [ ] **Mark done** — click a task to mark it complete (and unmark it)
- [ ] **Delete** — remove a task from the list
- [ ] **Filter** — show *All*, *Active* (not done), or *Completed* tasks
- [ ] **Save** — remember tasks in the browser so they survive a refresh

## Build steps

- [x] 1. Setup — create project with Vite, add Tailwind, run the dev server
- [x] 2. Structure — React layout: title, text box, "Add" button, empty list
- [ ] 3. Add tasks (React state)
- [ ] 4. Mark done
- [ ] 5. Delete
- [ ] 6. Filter
- [ ] 7. Save (browser storage / localStorage)
- [ ] 8. Style (Tailwind) — clean and simple

## Done so far

- **Step 1 — Setup:** React project created with Vite, Tailwind CSS installed and wired
  into `vite.config.js` and `src/index.css`. Dev server runs with `npm run dev`
  (currently at http://localhost:5174/).
- **Step 2 — Structure:** Built the layout in `src/App.jsx` — title, text box,
  "Add" button, and an empty list with a "No tasks yet" placeholder. Visual only;
  no behavior yet.

## How to run

```
cd todo-app
npm run dev
```

Then open the Local URL shown in the terminal.
