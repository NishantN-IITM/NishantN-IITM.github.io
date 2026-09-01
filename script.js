const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) body.dataset.theme = savedTheme;

themeToggle.addEventListener("click", () => {
  const next = body.dataset.theme === "dark" ? "light" : "dark";
  body.dataset.theme = next;
  localStorage.setItem("portfolio-theme", next);
});

menuToggle.addEventListener("click", () => {
  body.classList.toggle("nav-open");
});

document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", () => body.classList.remove("nav-open"));
});

document.getElementById("year").textContent = new Date().getFullYear();
