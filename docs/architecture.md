# Architecture

## Overview

The app has no framework and no build tooling. State lives entirely in the DOM: each task is an `<li>` element in `#task-list`, and there is no separate in-memory model or persistence layer (a page reload clears all tasks).

## src/app.js

- `addTask(text)` creates a list item containing a `<span>` (the task text) and a remove `<button>`, and appends it to `#task-list`.
- Clicking the `<span>` toggles the `done` class on its parent `<li>`, which `src/style.css` renders as strikethrough text.
- Clicking the remove button removes its `<li>` from the DOM.
- The form's `submit` event reads and trims the input value, calls `addTask`, then clears and refocuses the input.

## src/style.css

Colors are defined as CSS custom properties on `:root` for easy theming. Layout is a single centered card (`.app`) containing the form and task list.
