const Modal = {
  modalElement: document.querySelector(".modal-wrapper"),
  messageElement: document.querySelector(".modal-wrapper h2"),
  closeButton: document.querySelector(".close-button"),
  changeMessage(message) {
    Modal.messageElement.innerText = message
  },
  open() {
    Modal.modalElement.classList.add("open")
  },
  close() {
    Modal.modalElement.classList.remove("open")
  }
}

Modal.closeButton.addEventListener("click", Modal.close)
window.addEventListener("keydown", handleKeydown)

function handleKeydown(event) {
  if(event.key === "Escape"){
    Modal.close()
  }
}

export default Modal 