function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescripton = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescripton);
}
