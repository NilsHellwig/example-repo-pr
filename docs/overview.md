# Overview

This repository contains a small dummy web application: a client-side task list built with plain HTML, CSS, and JavaScript, with no build step or dependencies.

## Structure

```
index.html      Entry point, loaded directly in the browser
src/style.css   Styling
src/app.js      Application logic
docs/           Documentation
```

## Running the app

Open [index.html](../index.html) directly in a browser, or serve the directory with any static file server, e.g.:

```
npx serve .
```

## Features

- Add a task via the input field
- Click a task to mark it done (strikethrough)
- Remove a task with the × button

See [architecture.md](architecture.md) for implementation details.
