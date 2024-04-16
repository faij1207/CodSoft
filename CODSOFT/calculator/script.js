

let display = document.getElementById('display');
let lastCharIsOperator = false;

function appendToDisplay(value) {
  if (value.match(/[+\-*/]/)) {
    // Check if the last character is an operator
    if (lastCharIsOperator) {
      // Replace the last character with the new operator
      display.value = display.value.slice(0, -1) + value;
    } else {
      // Append the operator to the display
      display.value += value;
    }
    lastCharIsOperator = true;
  } else {
    // Append non-operator values directly
    display.value += value;
    lastCharIsOperator = false;
  }
}

function clearDisplay() {
  display.value = '';
  lastCharIsOperator = false;
}

function calculateResult() {
  try {
    let result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}
