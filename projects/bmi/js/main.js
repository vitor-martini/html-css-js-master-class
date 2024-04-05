import Modal from './modal.js'
import AlertError from './alert-error.js'
import Bmi from './bmi.js'

const weightElement = document.querySelector("#weight")
const heightElement = document.querySelector("#height")
const formElement = document.querySelector("form")

formElement.addEventListener("submit", calculateBmi)
weightElement.addEventListener("input", () => validateInput(weightElement, "weight"))
heightElement.addEventListener("input", () => validateInput(heightElement, "height"))

function validateInput(element, type){
  AlertError.close()
  if(!Number(element.value) && element.value != ""){
    element.value = Bmi[type];
    return
  }
  Bmi[type] = element.value;
}

function calculateBmi(event) {
  event.preventDefault()  

  if(!Bmi.validate()){
    AlertError.open()
    return
  }

  Bmi.result = Bmi.calculate()
  Modal.changeMessage(`Seu IMC é ${Bmi.result.toFixed(2)} - ${Bmi.classify()}`)
  Modal.open()
  clearValues()
}

function clearValues() {
  Bmi.weight = ""
  Bmi.height = ""
  Bmi.result= ""
  weightElement.value = ""
  heightElement.value = ""
}
