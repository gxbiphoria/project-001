# project-001

The first spontaneous project, started Wed 30 Sept, 8:40PM.

A bookshelf webpage that helps me read something every day, built while learning to code from zero.

**Live site:** [https://gxbiphoria.github.io](https://gxbiphoria.github.io/project-001/)

## Goal
Read something every day, and learn HTML, CSS and JavaScript by building this project.

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

## Project Files
- `index.html`: the structure of the page
- `style.css`: the colors, fonts and layout, including the dark theme
- `script.js`: the behavior (dark mode button and saving my choice)

## Progress Log

### Wed 30 Sept
- **What I did:**
  - Started the project and set up the repo
  - Published the page with GitHub Pages
  - Wrote `index.html` and styled it with `style.css`
  - Built a dark/light mode button in `script.js`
  - Made dark mode remember my choice after refreshing, using `localStorage`
  - Debugged why it wasn't saving at first
- **What I learned:** see "Things I've Learned" below
- **What confused me:**
  - What the `!` in `<!DOCTYPE html>` does
  - Why code that looked right didn't work at first
  - What the Console is for
  - `const`, `getElementById` and `addEventListener` (too much for day one, will revisit)
- **Next:** Add a "Mark as read" button for each book.

## Things I've Learned

### GitHub
- A repository (repo) is a project folder on GitHub.
- A commit saves a change, and every version is kept so I can undo things.
- GitHub Pages turns a repo into a live website. Updates take 1-2 minutes.
- README.md is the front page of the repo, written in Markdown.

### HTML, CSS and JavaScript
- HTML is the structure, CSS is the style, JavaScript is the behavior.
- `<link>` connects the CSS file and `<script>` connects the JavaScript file.
- `<script>` goes at the bottom of `<body>` so the button exists before the code runs.
- The button's `id` (`theme-toggle`) is how JavaScript finds it.
- `<!DOCTYPE html>` goes on line 1 and tells the browser this is modern HTML. Without it, browsers can use "quirks mode" and act like old browsers.
- The `!` marks a declaration (an instruction to the browser), not a normal tag. Comments use it too.
- Comments: `<!-- note -->` in HTML and `// note` in JavaScript. The browser ignores them.
- CSS variables (like `--bg`) let me change a whole theme in one place.
- `classList.toggle("dark")` adds the class if it's missing and removes it if it's there.
- `localStorage` keeps small pieces of text in the browser after a refresh. It's saved per browser and per device.

### Debugging
- The code was correct but didn't work at first. I found out why by testing one thing at a time.
- Cmd + Option + J opens the Console in Chrome DevTools. It's a scratchpad for testing, and it doesn't change my real files.
- `console.log("...")` shows whether my code is running.
- Not every red error is my bug. The `favicon.ico` 404 just means the site has no tab icon.
- Hard refresh (Cmd + Shift + R) loads the newest version of the page.

### How to learn
- Copying code is fine if I then change it, break it on purpose, and explain it in my own words.
- Writing the plan as comments first makes a big job feel smaller.

## Glossary
- **Repo:** a project folder on GitHub
- **Commit:** a saved change
- **DOCTYPE:** first line of an HTML file, tells the browser it's modern HTML
- **Comment:** a note the browser ignores
- **CSS variable:** a named value like `--bg` that I can reuse and change in one place
- **localStorage:** browser storage that keeps small pieces of text between visits
- **Console:** a DevTools panel for running test code and reading messages
- **console.log:** prints a message to the Console
- **Hard refresh:** Cmd + Shift + R, reloads the page ignoring saved copies

## Stuck Points / Questions
- Understand `const`, `getElementById` and `addEventListener` properly.
- How do I find and fix bugs faster?

## Log Template (copy for each new session)
### DAY DATE
- **What I did:**
- **What I learned:**
- **What confused me:**
- **Next:**
