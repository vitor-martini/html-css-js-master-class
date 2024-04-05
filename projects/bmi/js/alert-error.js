const AlertError = {
  errorElement: document.querySelector(".alert-error"),
  open() {
    AlertError.errorElement.classList.add('open')
  },
  close() {
    AlertError.errorElement.classList.remove('open')
  }
}

export default AlertError