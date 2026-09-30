# project-001

A simple bookshelf webpage built to help me read something every day while learning HTML, CSS, and JavaScript from scratch.

**Live site:** [https://gxbiphoria.github.io/project-001/](https://gxbiphoria.github.io/project-001/)

## Overview
This project started as a learning exercise and grew into a small personal reading tracker. It includes:

- a clean bookshelf layout
- a dark/light mode toggle
- theme preference saved in `localStorage`
- a simple, mobile-friendly design
- accessible improvements for screen-reader support

## Features
- Book list displayed in a readable card layout
- Theme toggle with a custom slider-style control
- Saved theme preference between page refreshes
- Responsive styling for smaller screens
- Improved accessibility with `aria-label` and `aria-pressed`

## Project Files
- `index.html` — page structure and content
- `style.css` — visual design, layout, and dark mode styling
- `script.js` — theme toggle logic and browser storage

## Recent Updates
- Added page language and viewport metadata for better browser compatibility
- Improved accessibility on the dark mode toggle button
- Added safe handling for `localStorage` access errors
- Fixed the live site link in the README

## Roadmap
- [x] Create the repo
- [x] Publish with GitHub Pages
- [x] Style the book list (HTML + CSS)
- [x] Add a dark / light mode button (JavaScript)
- [x] Remember dark/light choice with localStorage
- [ ] Add a "Mark as read" button
- [ ] Save my reading list in the browser
- [ ] Fetch a daily book suggestion (Open Library API)
- [ ] Send a daily email reminder
- [ ] Add a streak tracker
- [ ] (Later) Custom domain

## Progress Log

### Wed 30 Sept
- **What I did:**
  - Started the project and set up the repo
  - Published the page with GitHub Pages
  - Wrote `index.html` and styled it with `style.css`
  - Built a dark/light mode button in `script.js`
  - Made the theme remember the user's choice after refresh
  - Improved accessibility and robustness in the web page
- **What I learned:**
  - HTML defines structure, CSS defines style, and JavaScript defines behavior
  - `localStorage` keeps small bits of data in the browser
  - DevTools helps find and debug issues faster
- **What confused me:**
  - `<!DOCTYPE html>` and how browsers interpret it
  - Why code looked correct but still didn't work at first
  - How `const`, `getElementById`, and `addEventListener` fit together
- **Next:** Add a "Mark as read" button for each book.

## Learning Notes
### HTML, CSS, and JavaScript
- HTML is the structure, CSS is the style, and JavaScript is the behavior.
- `<link>` connects the CSS file and `<script>` connects the JavaScript file.
- `classList.toggle("dark")` adds or removes a theme class.
- `localStorage` stores small pieces of text between visits.

### Debugging
- Use the browser console to test code and inspect errors.
- Hard refresh (`Cmd + Shift + R`) reloads the newest version of the page.
- Not every red error is caused by your code.

## Glossary
- **Repo:** a project folder on GitHub
- **Commit:** a saved change
- **DOCTYPE:** the first line of an HTML file that tells the browser to use modern HTML parsing
- **Console:** a browser panel for testing code and viewing errors
- **localStorage:** browser storage that keeps small pieces of saved data

## Log Template
### DAY DATE
- **What I did:**
- **What I learned:**
- **What confused me:**
- **Next:**
