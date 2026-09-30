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
