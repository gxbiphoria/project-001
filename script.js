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
// ---- My books: add a new line here for each new book ----
const books = [
  { title: "Book one", shelf: "to-read" },
  { title: "Book two", shelf: "to-read" },
  { title: "Book three", shelf: "reading" },
];
// ---------------------------------------------------------

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

function render() {
  document.querySelectorAll("ul").forEach(function (list) {
    list.innerHTML = "";
  });

  books.forEach(function (book) {
    const li = document.createElement("li");

    const title = document.createElement("span");
    title.className = "title";
    title.textContent = book.title;

    const btn = document.createElement("button");
    btn.className = "move-btn";
    btn.textContent = labels[book.shelf];
    btn.addEventListener("click", function () {
      book.shelf = nextShelf[book.shelf];
      render();
    });

    li.appendChild(title);
    li.appendChild(btn);
    document.getElementById(book.shelf).appendChild(li);
  });
}

render();
refreshButtons();
