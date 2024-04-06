import * as actions from "./actions.js"
import * as el from "./elements.js"
import state from "./state.js"
import * as timer from "./timer.js"

function registerControls() {
  el.constrols.addEventListener("click", (event) => {
    const action = event.target.dataset.action

    if(!actions[action]) {
      return
    }

    actions[action]()
  })
}

function setMinutes () {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = ""
  })

  el.addEventListener('input', () => {
    this.value = this.value.replace(/\D/g, '')
  });

  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent
    if (time > 60 || time < 1) {
      time = 60
    }

    state.minutes = time
    state.seconds = 0
    timer.updateDisplay()
    event.currentTarget.removeAttribute("contenteditable")
  })
}

export {
  registerControls,
  setMinutes
}