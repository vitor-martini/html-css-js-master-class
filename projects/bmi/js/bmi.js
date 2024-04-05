const Bmi = {
  weight: "",
  height: "",
  result: "",
  classify() { 
    if(this.result < 25){
      return "Peso normal";
    } 
    if(this.result < 30) {
      return "Sobrepeso";
    } 
    if(this.result < 35) {
      return "Obesidade grau I";
    } 
    if(this.result < 40) {
      return "Obesidade grau II";
    } 
    return "Obesidade grau III";
  },
  validate() {
    return Number(Bmi.weight) && Number(Bmi.height)
  },
  calculate() {
    return Number(Bmi.weight / ((Bmi.height/100)**2))
  }
}

export default Bmi