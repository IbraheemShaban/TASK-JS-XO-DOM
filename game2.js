// Premade function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills
  document.getElementById(index).innerHTML = text;
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// Delete this code once you are done testing
fillButton(1, "X");
fillButton(9, "O");

// Start filling the code here
function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
}

function checkPlayer() {
  // in this function you should check if the player is X or O
}

/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */
// function checkWinner

// function restart game

// premade a function. You can use this function to present an alert to say somene wins
function winningAlert(winner) {
  alert(`Horraaay, ${winner} wins!`);
}