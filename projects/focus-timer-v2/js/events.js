import * as el from "./elements.js"
import * as timerActions from "./Timer/actions.js"
import * as soundsActions from "./Sounds/actions.js"

export function registerControls() {
  el.controls.addEventListener("click", (event) => setAction(event, timerActions))
  el.sounds.addEventListener("click", (event) => setAction(event, soundsActions))
}

function setAction(event, actions) {
  const action = event.target.dataset.action
  if (actions[action]) {
    actions[action](event.target)
  }
}