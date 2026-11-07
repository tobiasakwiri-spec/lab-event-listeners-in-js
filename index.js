// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  document.body.style.backgroundColor = 'rgb(173, 216, 230)'; // Example implementation
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
  document.body.style.backgroundColor = ""; // Example implementation
} 


// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  const keyParagraph = document.getElementById('keyPressDisplay') || 
                      document.getElementById('keyOutput');  
  if (keyParagraph && event) {
    keyParagraph.textContent = "Key pressed: " + event.key;
  }
}


// Process Text Input
function displayUserInput(event) {
  // Implement the function to display user input
  const textInput = event?.target || 
                    document.getElementById('textInput');

  const textParagraph = document.getElementById('textInputDisplay'); 

  if (textInput && textParagraph) {
    textParagraph.textContent = "You typed: " + textInput.value;
      }
}

// Function to display user input in real-time

  // Implement the function to display user input

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
const colorButton = document.getElementById('changeColorButton') || 
                    document.getElementById('colorButton');
const resetColorButton = document.getElementById('resetColorButton') ||
                    document.getElementById('resetColorButton') ||
                    colorButton;
const textInput = document.getElementById('textInput') ||
                  document.getElementById('textInput'); 

if (colorButton) {
    colorButton.addEventListener('click', changeBackgroundColor);
    }

if (resetColorButton) {
    resetColorButton.addEventListener('dblclick', resetBackgroundColor);
    }
        document.addEventListener('keydown', displayKeyPress);

if (textInput) {
    textInput.addEventListener('input', displayUserInput);
  }
}

  // Attach event listener to reset background color when the body is double-clicked
 
  // Attach event listener to display key pressed when a key is pressed down
 

  // Attach event listener to reset background color when the body is double-clicked
 
  // Attach event listener to display key pressed when a key is pressed down
 

  // Attach event listener to display user input in real-time as they type
  

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners,
  };
}   