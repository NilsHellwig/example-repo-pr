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

## Metadata

The `<head>` of [index.html](../index.html) declares the following meta tags:

| Tag | Purpose |
| --- | --- |
| `charset` (UTF-8) | Declares the document's character encoding. |
| `viewport` | Controls layout on mobile devices (`width=device-width, initial-scale=1.0`). |
| `X-UA-Compatible` (IE=edge) | Tells older Internet Explorer to use its latest rendering engine. |
| `description` | Short SEO description shown in search results. |
| `author` | Declares the application author ("Dummy App"). |
| `keywords` | SEO keywords ("tasks, todo, list, dummy"). |
| `robots` | Instructs search engines to index and follow links. |
| `theme-color` | Sets the theme color for mobile browser UIs (`#ffffff`). |

See [architecture.md](architecture.md) for implementation details.
