import * as el from "../elements.js"
import * as timer from "./timer.js"
import * as sounds from "./sounds.js"
import state from "./state.js"

function toggleRunning() {
  el.pauseButton.classList.toggle("hiden")
  el.startButton.classList.toggle("hiden")

  state.isRunning = !state.isRunning
  if(state.isRunning) {
    timer.countDown()
  }
  sounds.audioButton.play()
}

function stop() {
  state.isRunning = false
  state.setDefaultTimer()
  showStartButton()
  updateDisplay()
  sounds.audioButton.play()
}

function plus() {
  state.minutes += 5
  state.seconds = 0
  updateDisplay()
  sounds.audioButton.play()
}

function minus() {
  if(state.minutes - 5 < 0){
    return;
  }
  state.minutes -= 5
  state.seconds = 0
  updateDisplay()
  sounds.audioButton.play()
}

function showStartButton() {
  if (el.startButton.classList.contains("hiden")) {
    el.pauseButton.classList.toggle("hiden")
    el.startButton.classList.toggle("hiden")
  }
}

function updateDisplay() {
  el.timerSpan.innerText = state.minutes.toString().padStart(2, "0") + ":" + state.seconds.toString().padStart(2, "0")
}

export {
  toggleRunning,
  stop,
  plus,
  minus,
  showStartButton,
  updateDisplay
}