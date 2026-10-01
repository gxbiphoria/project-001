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
const order = ["to-read", "reading", "completed"];
const labels = ["Start reading", "Mark as read", "Read again"];

function refreshButtons() {
  document.querySelectorAll(".move-btn").forEach(function (btn) {
    const shelfId = btn.parentElement.parentElement.id;
    btn.textContent = labels[order.indexOf(shelfId)];
  });
}

document.querySelectorAll(".move-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const book = btn.parentElement;
    const current = order.indexOf(book.parentElement.id);
    const next = (current + 1) % order.length;
    document.getElementById(order[next]).appendChild(book);
    refreshButtons();
  });
});

refreshButtons();
