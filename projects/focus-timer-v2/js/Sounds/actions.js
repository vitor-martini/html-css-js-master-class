import * as sounds from "./sounds.js"
import * as el from "../elements.js"
import state from "./state.js"

function removeSelectedClass() {
  el.sounds.querySelectorAll("button").forEach(button => {
    button.classList.remove("selected");
  });
}

function playSound(requestedSoundElement) {
  const requestedSound = requestedSoundElement.dataset.value
  sounds.stopAll()
  removeSelectedClass()

  if(state.currentSound == requestedSound) {
    state.currentSound = null
    return
  }

  requestedSoundElement.classList.add("selected")
  state.currentSound = requestedSound
  sounds[requestedSound].play()
}

export {
  playSound
}

