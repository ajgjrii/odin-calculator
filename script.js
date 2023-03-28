// Add an event listener for the keypress event
document.addEventListener("keypress", function(event) {

    // Check if the key pressed is a number (0-9) or an operand (+, -, *, /)
    if (/[0-9+\-*/]/.test(event.key)) {
  
      // Get the element with ID "keystrokes" and append the key pressed to its contents
      var keystrokesElement = document.getElementById("output");
      keystrokesElement.innerHTML += event.key;
    }
  });