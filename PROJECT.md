# To-Do App — Project Requirements

A beginner-friendly project to build a simple to-do web page, one small step at a time.

## Goal

Build a single web page where I can manage a list of tasks.

## Features

| # | Feature | Description |
|---|---------|-------------|
| 1 | **Add** | Type a task and add it to the list (button or Enter key). |
| 2 | **Mark done** | Click a task to mark it complete (and unmark it). |
| 3 | **Delete** | Remove a task from the list. |
| 4 | **Filter** | Show *All*, only *Active* (not done), or only *Completed* tasks. |
| 5 | **Save** | Remember tasks in the browser so they survive a refresh or reopening. |

## Decisions

- **Persistence:** Tasks are saved in the browser (`localStorage`) — they stay after closing/reopening.
- **Design:** Clean and simple — tidy and easy to read, without over-investing in styling.
- **Tech:** React + Tailwind CSS, built with Vite (Node.js/npm). Runs via a local dev server.
- **Working style:** Small steps, one feature at a time, with each piece explained in plain English and tested before moving on.

## Roadmap

| Step | What we'll do | Result |
|------|---------------|--------|
| 1. Setup | Create the project with Vite, add Tailwind, run the dev server | App running in the browser |
| 2. Structure | Build the layout with React: title, text box, "Add" button, empty list | See the layout |
| 3. Add tasks | Store tasks in React state and show them | Add tasks |
| 4. Mark done | Click a task to cross it out | Toggle done/undone |
| 5. Delete | Add a delete button to each task | Remove tasks |
| 6. Filter | All / Active / Completed buttons | Filter the list |
| 7. Save | Remember tasks in the browser (`localStorage`) | Tasks survive a refresh |
| 8. Style | Polish the look with Tailwind | Finished app |

## Environment

- **OS:** Windows
- **Editor:** _to be decided_ (VS Code recommended)
- **Node.js:** installed ✅
- **Stack:** React + Tailwind CSS + Vite. Runs via `npm run dev`.

## Notes

- Beginner project — no prior programming knowledge assumed.
- No question is too basic.
