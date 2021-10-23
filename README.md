# Hemingway

A reverse engineered version of Hemingway editor for VSCode.
Inspired from https://www.freecodecamp.org/news/https-medium-com-samwcoding-deconstructing-the-hemingway-app-8098e22d878d/

-   Uses https://www.npmjs.com/package/retext-english + Unified
-   Naive perf, parses the full doc at all times.

## Structure

```
.
├── client // Language Client
│   ├── src
│   │   ├── test // End to End tests for Language Client / Server
│   │   └── extension.ts // Language Client entry point
├── package.json // The extension manifest.
└── server // Language Server
    └── src
        └── server.ts // Language Server entry point
```
