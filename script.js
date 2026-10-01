const button = document.getElementById("theme-toggle");

try {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    button.setAttribute("aria-pressed", "true");
  }
} catch (e) {
  console.warn("localStorage not available:", e);
}

button.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  try {
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      button.setAttribute("aria-pressed", "true");
    } else {
      localStorage.setItem("theme", "light");
      button.setAttribute("aria-pressed", "false");
    }
  } catch (e) {
    console.warn("localStorage not available:", e);
  }
});

// ---- Starting books (only used the very first time) ----
const defaultBooks = [
  { title: "Book one", shelf: "to-read" },
  { title: "Book two", shelf: "to-read" },
  { title: "Book three", shelf: "reading" },
];
// --------------------------------------------------------

function loadBooks() {
  try {
    const saved = localStorage.getItem("books");
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    // storage unavailable, fall back to the starting list
  }
  return defaultBooks;
}

function saveBooks() {
  try {
    localStorage.setItem("books", JSON.stringify(books));
  } catch (error) {
    // storage unavailable, nothing to do
  }
}

const books = loadBooks();

const labels = {
  "to-read": "Start reading",
  "reading": "Mark as read",
  "completed": "Read again",
};

const nextShelf = {
  "to-read": "reading",
  "reading": "completed",
  "completed": "to-read",
};

const input = document.getElementById("new-title");
const addBtn = document.getElementById("add-btn");
const statusMsg = document.getElementById("status");

function showStatus(message) {
  statusMsg.textContent = message;
}

function render() {
  document.querySelectorAll("ul").forEach(function (list) {
    list.innerHTML = "";
  });

  books.forEach(function (book, index) {
    const li = document.createElement("li");

    const title = document.createElement("span");
    title.className = "title";
    title.textContent = book.title;

    const actions = document.createElement("div");
    actions.className = "actions";

    const moveBtn = document.createElement("button");
    moveBtn.className = "move-btn";
    moveBtn.textContent = labels[book.shelf];
    moveBtn.addEventListener("click", function () {
      book.shelf = nextShelf[book.shelf];
      saveBooks();
      render();
    });

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "✕";
    removeBtn.setAttribute("aria-label", "Remove " + book.title);
    removeBtn.addEventListener("click", function () {
      if (confirm('Remove "' + book.title + '"?')) {
        books.splice(index, 1);
        saveBooks();
        render();
        showStatus('Removed "' + book.title + '".');
      }
    });

    actions.appendChild(moveBtn);
    actions.appendChild(removeBtn);
    li.appendChild(title);
    li.appendChild(actions);
    document.getElementById(book.shelf).appendChild(li);
  });
}

function addBook() {
  const title = input.value.trim();
  if (title === "") {
    showStatus("Type a title first.");
    return;
  }

  books.push({ title: title, shelf: "to-read" });
  saveBooks();
  render();
  showStatus('Added "' + title + '" to To read.');

  input.value = "";
  input.focus();
}

addBtn.addEventListener("c
