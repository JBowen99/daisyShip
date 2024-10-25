// src/scripts/theme.js
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Update checkbox state if it exists
  const checkbox = document.querySelector(".theme-controller");
  if (checkbox) {
    checkbox.checked = savedTheme === "dark";
  }
}

// Export for use in other files
export { initializeTheme };
