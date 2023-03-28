// Created an event listener for numeric and operand keypresses
document.addEventListener("keypress", function(event) {
    // Check if the key pressed is a number (0-9) or an operand (+, -, *, /)
    if (/[0-9+\-*/.]/.test(event.key)) {
      var numOps = document.getElementById("input");
      // Get the element with ID "input" and append the key pressed to its contents
      numOps.textContent += event.key;
      entry = numOps.textContent;
    }
  });

// Stores the operator as a variable
document.addEventListener("keypress", function(event) {
  if (/[+\-*/]/.test(event.key)) {
    operator = event.key;
  }
});

// Created an event listener for "enter" key
document.addEventListener("keypress", function(event) {
  if (event.key === 'Enter') {
    var numOps = document.getElementById("input");
    var output = document.getElementById("output");
    splitString(entry, operator);
    output.textContent = calculator(calculation.num1, calculation.num2, calculation.delim);
    numOps.textContent = "";
  }
})

// This function will take the input and split it into two numbers, and a delimiter
function splitString(str, delimiter) {
  // Split the string into an array of numbers
  const nums = str.split(delimiter).map(Number);
  const [num1, num2] = nums;
  const delim = delimiter;

  calculation = { num1, num2, delim };
  return calculation;
}

// Takes values generated by splitString function and runs operations. Returns "Error" when operations incorrectly used
function calculator (a, b, operation) {
  if (a != a || b != b) {
    return "ERROR";
  } else if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "*") {
    return a * b;
  } else if (operation === "/") {
    return a / b;
  } else {
    return "ERROR"
  }
}
