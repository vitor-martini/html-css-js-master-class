import * as actions from "./actions.js"
import * as sounds from "./sounds.js"
import state from "./state.js"

function countDown() {
  if(!state.isRunning) {
    return
  }

  clearTimeout(state.countDownId)

  if(state.minutes <= 0 && state.seconds <= 0){
    state.isRunning = false
    actions.showStartButton()
    sounds.kitchenTimer.play()
    return
  }

  state.seconds--
  if(state.seconds < 0){
    state.minutes--
    state.seconds = 59
  }

  actions.updateDisplay()
  state.countDownId = setTimeout(countDown, 1000)
}

export {
  countDown
}