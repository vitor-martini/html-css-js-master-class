import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")
  if(state.isRunning){
    startMusic()
  }
  else {
    stopMusic()
  }
  timer.countDown()
  sounds.audioButton.play()
}

function stop() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  timer.updateDisplay()
  sounds.audioButton.play()
  stopMusic()
}

function set() {
  stop()
  el.minutes.setAttribute("contenteditable", true)
  el.minutes.focus()
}

function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on")

  if(state.isMute) {
    sounds.audioBackground.play()
    state.isMute = false
    return
  }

  sounds.audioBackground.pause()
  state.isMute = true
}

function stopMusic() {
  document.documentElement.classList.remove("music-on")
  state.isMute = true
  sounds.audioBackground.pause()
}

function startMusic() {
  document.documentElement.classList.add("music-on")
  state.isMute = false
  sounds.audioBackground.play()
}

export {
  toggleRunning,
  set,
  stop,
  toggleMusic,
  stopMusic,
  startMusic
}