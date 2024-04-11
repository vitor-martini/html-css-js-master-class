export const coffeeHouse = new Audio("./assets/Cafeteria.wav")
export const rain = new Audio("./assets/Chuva.wav")
export const forest = new Audio("./assets/Floresta.wav")
export const firePlace = new Audio("./assets/Lareira.wav")

coffeeHouse.loop = true
rain.loop = true
forest.loop = true
firePlace.loop = true

function stopAll() {
  coffeeHouse.pause()
  rain.pause()
  forest.pause()
  firePlace.pause()
}

export {
  stopAll
}

