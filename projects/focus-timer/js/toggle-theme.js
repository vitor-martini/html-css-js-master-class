const themeElement = document.getElementById("theme")
themeElement.addEventListener("click", toggleTheme)

function toggleTheme() {
  document.documentElement.classList.toggle("light") //document.documentElement é a tag HTML
}
