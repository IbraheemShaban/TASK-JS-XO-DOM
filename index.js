// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let turn = 0;
let xPositions = [];
let oPositions = [];
let gameHasEnded = false;
let buttonsClicked = [];
function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  // Your main code here.
  if (!buttonsClicked.includes(index)) {
    turn++;
    if (turn % 2 != 0) {
      document.getElementById(index).classList.add('green');
      fillButton(index, 'X');
      xPositions.push(index);
      buttonsClicked.push(index);
    } else {
      fillButton(index, 'O');
      oPositions.push(index);
      buttonsClicked.push(index);
      document.getElementById(index).classList.add('red');
    }
    checkWinner();
    if (gameHasEnded) {
      setTimeout(function () {
        restartGame();
      }, 0);
    }
  }
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame

const checkWinner = () => {
  if (
    (xPositions.includes(1) &&
      xPositions.includes(2) &&
      xPositions.includes(3)) ||
    (xPositions.includes(4) &&
      xPositions.includes(5) &&
      xPositions.includes(6)) ||
    (xPositions.includes(7) &&
      xPositions.includes(8) &&
      xPositions.includes(9)) ||
    (xPositions.includes(1) &&
      xPositions.includes(4) &&
      xPositions.includes(7)) ||
    (xPositions.includes(2) &&
      xPositions.includes(5) &&
      xPositions.includes(8)) ||
    (xPositions.includes(3) &&
      xPositions.includes(6) &&
      xPositions.includes(9)) ||
    (xPositions.includes(1) &&
      xPositions.includes(5) &&
      xPositions.includes(9)) ||
    (xPositions.includes(3) && xPositions.includes(5) && xPositions.includes(7))
  ) {
    setTimeout(function () {
      winningAlert('X');
    }, 0);

    gameHasEnded = true;
  } else if (
    (oPositions.includes(1) &&
      oPositions.includes(2) &&
      oPositions.includes(3)) ||
    (oPositions.includes(4) &&
      oPositions.includes(5) &&
      oPositions.includes(6)) ||
    (oPositions.includes(7) &&
      oPositions.includes(8) &&
      oPositions.includes(9)) ||
    (oPositions.includes(1) &&
      oPositions.includes(4) &&
      oPositions.includes(7)) ||
    (oPositions.includes(2) &&
      oPositions.includes(5) &&
      oPositions.includes(8)) ||
    (oPositions.includes(3) &&
      oPositions.includes(6) &&
      oPositions.includes(9)) ||
    (oPositions.includes(1) &&
      oPositions.includes(5) &&
      oPositions.includes(9)) ||
    (oPositions.includes(3) && oPositions.includes(5) && oPositions.includes(7))
  ) {
    setTimeout(function () {
      winningAlert('O');
    }, 0);
    gameHasEnded = true;
  } else if (buttonsClicked.length == 9) {
    setTimeout(function () {
      alert('Draw');
    }, 0);
    gameHasEnded = true;
  }
};

const restartGame = () => {
  turn = 0;
  xPositions = [];
  oPositions = [];
  buttonsClicked = [];
  gameHasEnded = false;

  for (let i = 1; i < 10; i++) {
    fillButton(i, '');
    document.getElementById(i).classList.remove('red');
    document.getElementById(i).classList.remove('green');
  }
};
