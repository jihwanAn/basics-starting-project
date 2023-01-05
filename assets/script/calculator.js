function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescripton = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescripton);
}

function add() {
  calcResult("ADD");
}

function subtract() {
  calcResult("SUBTRACT");
}

function multiply() {
  calcResult("MULTIPLY");
}

function divide() {
  calcResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
