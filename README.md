# project-001

A simple bookshelf webpage built to help me read something every day while learning HTML, CSS, and JavaScript from scratch.

**Live site:** [https://gxbiphoria.github.io/project-001/](https://gxbiphoria.github.io/project-001/)

## Overview
This project started as a learning exercise and grew into a small personal reading tracker. It includes:

- a bookshelf with three shelves: To read, Reading and Completed
- books I can add, move between shelves, and remove
- a dark/light mode slider with sun and moon icons
- my book list and theme saved in the browser with `localStorage`
- a custom confirmation popup instead of the browser's default one
- a simple, mobile-friendly design with accessibility improvements

## Features
- Add a book or article by typing a title (click **Add** or press Enter)
- Move a book along its shelf: To read, then Reading, then Completed (and back to To read)
- Remove a book with a ✕ button and a confirmation popup in the middle of the page
- Status message under the add box (for example: Added "..." to To read)
- Button hover and press feedback
- Slider-style theme toggle with a soft, gradual fade between light and dark
- Book list and theme saved between page refreshes
- Safe handling of `localStorage` errors
- `aria-label` and `aria-pressed` for screen readers

## Project Files
- `index.html`: page structure, add box, three shelves and the confirm popup
- `style.css`: visual design, layout, slider switch, dark mode and popup styling
- `script.js`: theme toggle, book list (load, save, render, add, move, remove) and popup logic

## Roadmap
- [x] Create the repo
- [x] Publish with GitHub Pages
- [x] Style the book list (HTML + CSS)
- [x] Add a dark / light mode button (JavaScript)
- [x] Remember dark/light choice with localStorage
- [x] Turn the button into a sun/moon slider with a gentler transition
- [x] Organize books into To read / Reading / Completed
- [x] Move books between shelves with a button
- [x] Build the shelves from a book list in JavaScript
- [x] Save my reading list in the browser
- [x] Add a book from the page
- [x] Remove a book, with a custom confirm popup
- [ ] Export / import backup of my list
- [ ] Undo option after removing a book
- [ ] Fetch a daily book suggestion (Open Library API)
- [ ] Send a daily email reminder
- [ ] Add a streak tracker
- [ ] Google sign-in so my list syncs across devices (on hold)
- [ ] (Later) Custom domain

## Progress Log

### Thu 1 Oct
- **What I did:**
  - Turned the shelves into buttons that move a book to the next shelf
  - Stopped typing each book into the HTML. The page now builds the shelves from a `books` list in `script.js`
  - Saved the book list in `localStorage` so it survives a refresh
  - Built an "Add a book" box with a status message
  - Added a ✕ remove button on every book
  - Replaced the ugly browser `confirm` box with my own popup, using `<dialog>`
  - Added hover and press feedback to the buttons
  - Added a 📚 favicon
  - Fixed several bugs by reading the Console
- **What I learned:**
  - Keep the data (the `books` list) separate from the display (`render()`), so adding a book is one line, not copying HTML
  - `JSON.stringify` turns a list into text for `localStorage`, and `JSON.parse` turns it back
  - `createElement`, `appendChild`, `push` and `splice` build, add and remove things
  - `<dialog>` with `showModal()` makes a popup in the middle of the page that I can style, and it follows dark mode
  - "Cannot read properties of null" usually means an `id` in the JavaScript doesn't exist in the HTML
  - A function has to be defined before it's called (`saveBooks` and `refreshButtons` errors)
  - A half-pasted file with a cut-off line stops the whole script from running
  - Pasting my whole file for debugging is the fastest way to find the problem
  - Clearing "cookies and other site data" in the browser deletes my saved books
  - Saved data is per browser and per device
- **What confused me:**
  - Why Add did nothing at first (the file was a mix of old and new code)
  - How `render()`, `books` and saving fit together
- **Next:** Add an export/import backup, then an undo option after removing a book.

### Wed 30 Sept
- **What I did:**
  - Started the project and set up the repo
  - Published the page with GitHub Pages
  - Wrote `index.html` and styled it with `style.css`
  - Built a dark/light mode button in `script.js`
  - Made the theme remember my choice after a refresh
  - Debugged why it wasn't saving at first
  - Replaced the text button with a sun/moon slider
  - Slowed the color change so switching from dark to light isn't blinding
  - Split the book list into To read / Reading / Completed
  - Added accessibility improvements (`aria-label`, `aria-pressed`) and page language/viewport metadata
  - Added safe handling for `localStorage` errors
  - Fixed the live site link in this README
- **What I learned:**
  - HTML defines structure, CSS defines style, and JavaScript defines behavior
  - `localStorage` keeps small bits of data in the browser
  - DevTools helps find and debug issues faster
  - A CSS `transition` blends a change over time instead of switching instantly
  - A slider is a button plus a "knob" that moves when the `dark` class appears
  - Accessibility attributes help screen readers understand what a control does
- **What confused me:**
  - `<!DOCTYPE html>` and how browsers interpret it
  - Why code looked correct but still didn't work at first
  - How `const`, `getElementById`, and `addEventListener` fit together
- **Next:** Add a "Mark as read" button for each book and save progress in the browser.

## Learning Notes

### HTML, CSS, and JavaScript
- HTML is the structure, CSS is the style, and JavaScript is the behavior.
- `<link>` connects the CSS file and `<script>` connects the JavaScript file.
- `classList.toggle("dark")` adds or removes a theme class.
- `localStorage` stores small pieces of text between visits.
- CSS variables (like `--bg`) let me change a whole theme in one place.
- `transition` makes a change happen gradually (for example `0.8s`).
- Keep data and display separate: a list of books, plus a function that draws it.
- Every `getElementById("x")` needs an element with `id="x"` in the HTML.
- `<dialog>` and `showModal()` make a popup that I can style.

### Debugging
- Use the browser console to test code and inspect errors.
- `console.log("...")` shows whether my code is running.
- Hard refresh (`Cmd + Shift + R`) reloads the newest version of the page.
- Not every red error is caused by my code (for example the `favicon.ico` 404).
- "Cannot read properties of null" means a missing or misspelled `id`.
- Read the error's line number, then check the lines around it.

## Glossary
- **Repo:** a project folder on GitHub
- **Commit:** a saved change
- **DOCTYPE:** the first line of an HTML file that tells the browser to use modern HTML parsing
- **Console:** a browser panel for testing code and viewing errors
- **localStorage:** browser storage that keeps small pieces of saved data
- **Transition:** a CSS effect that blends a change over time
- **aria-label:** text that tells screen readers what a control is
- **Array:** a list of items, like my `books`
- **Function:** a named set of instructions I can run whenever I want
- **JSON:** a text format for saving lists and objects
- **Render:** drawing the page from the data
- **Dialog:** an HTML popup element

## Log Template
### DAY DATE
- **What I did:**
- **What I learned:**
- **What confused me:**
- **Next:**
