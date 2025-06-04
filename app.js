document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-theme");
  const icon = document.getElementById("theme-icon");
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");

  // === Theme Setup ===
  function setTheme(mode) {
    if (mode === "light") {
      document.body.classList.add("light-mode");
      icon.classList.replace("bi-moon-fill", "bi-sun-fill");
    } else {
      document.body.classList.remove("light-mode");
      icon.classList.replace("bi-sun-fill", "bi-moon-fill");
    }
    localStorage.setItem("theme", mode);
  }

  // Apply saved theme on load
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);

  // Toggle theme on click
  toggleBtn.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light-mode");
    setTheme(isLight ? "dark" : "light");
  });

  // === Search Button Toggle ===
  searchBtn.addEventListener("click", () => {
    searchInput.classList.toggle("show");
    if (searchInput.classList.contains("show")) {
      searchInput.focus();
    }
  });
});
