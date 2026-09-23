# Architecture

## Overview

The app has no framework and no build tooling. State lives entirely in the DOM: each task is an `<li>` element in `#task-list`, and there is no separate in-memory model or persistence layer (a page reload clears all tasks).

## src/app.js

- `addTask(text)` creates a list item containing a `<span>` (the task text) and a remove `<button>`, and appends it to `#task-list`.
- Clicking the `<span>` toggles the `done` class on its parent `<li>`, which `src/style.css` renders as strikethrough text.
- Clicking the remove button removes its `<li>` from the DOM.
- `updateCounter()` counts the `<li>` elements in `#task-list` that are not marked `done` and writes the result into `#task-counter` as "N tasks left" ("1 task left" when the count is one). It is called after a task is added, after a task is toggled done, and after a task is removed.
- The form's `submit` event reads and trims the input value, calls `addTask`, then clears and refocuses the input.

## Control flow

All events route through `updateCounter()`, which re-derives the count from the DOM, so the counter never drifts out of sync with the task list:

```mermaid
flowchart TD
    submit[form submit event] -->|preventDefault, trim| check{input empty?}
    check -->|yes| stop[ignore]
    check -->|no| addTask[addTask: create li span + remove button]
    addTask --> append[list.append li]
    addTask --> update[updateCounter]
    append --> update

    spanClick[click task span] --> toggle[toggle 'done' class on li]
    toggle --> update

    removeClick[click remove button] --> remove[li.remove]
    remove --> update

    update -->|count li:not(.done)| counter[#task-counter shows 'N tasks left']
```

## src/style.css

Colors are defined as CSS custom properties on `:root` for easy theming. Layout is a single centered card (`.app`) containing the form and task list.
