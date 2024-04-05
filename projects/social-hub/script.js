function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/sunglasses.png")
  } else {
    img.setAttribute("src", "https://github.com/vitor-martini.png")
    const switchButton = document.querySelector("#switch button")
    switchButton.classList.add("slide-out-triggered")
  }
}
