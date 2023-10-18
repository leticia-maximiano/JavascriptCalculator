class Calculator{
  buttonList = [
    {show: true, simbol: "1", element: "1"},
    {show: true, simbol: "2", element: "2"},
    {show: true, simbol: "3", element: "3"},
    {show: false, simbol: "C", element: ""},
    {show: true, simbol: "4", element: "4"},
    {show: true, simbol: "5", element: "5"},
    {show: true, simbol: "6", element: "6"},
    {show: true, simbol: "÷", element: "/"},
    {show: true, simbol: "7", element: "7"},
    {show: true, simbol: "8", element: "8"},
    {show: true, simbol: "9", element: "9"},
    {show: true, simbol: "X", element: "*"},
    {show: true, simbol: "0", element: "0"},
    {show: true, simbol: "+", element: "+"},
    {show: true, simbol: "-", element: "-"},
    {show: true, simbol: "=", element: "="},
  ];
  buttons = new HtmlController("buttons", true);
  reader = new HtmlController("reader", true);
  calc = ""

  createCalculator() {
    for(const button of this.buttonList){
      this.addButton(button)
    }
  }

  addButton(buttonObj){
    const button = new HtmlController("button")

    button.addInnerHtml(buttonObj.simbol).addOnClick(() => this.prepareCalc(buttonObj))

    this.buttons.addChild(button)
  }

  prepareCalc(elementObj){
    const simbols = ["+","-","*","/"]
    let calculatorValue = this.reader.getValue()
    let calculator = this.calc

    if(!elementObj.element) {
      this.reader.setValue("")
      this.calc = ""
      return
    }


    if (elementObj.element== "="){
      this.reader.setValue(eval(calculator))

      this.calc = ""
      return
    }

    if (simbols.includes(calculator.charAt(calculator.length - 1)) && simbols.includes(elementObj.element)) {
      calculatorValue = calculatorValue.slice(0,-1) + elementObj.simbol
      calculator = calculator.slice(0,-1) + elementObj.element
    } else{
      calculatorValue += elementObj.simbol
      calculator += elementObj.element
    }

    this.calc += elementObj.element

    if (elementObj.show){
      this.reader.setValue(calculatorValue)
    }
  }
}
