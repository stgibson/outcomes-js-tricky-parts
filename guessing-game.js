function guessingGame() {
  const randNum = Math.floor(Math.random() * 100);
  let numOfGuesses = 0;
  let won = false;
  return function(guess) {
    if (won) {
      return "The game is over, you already won!";
    }
    numOfGuesses++;
    if (guess < randNum) {
      return `${guess} is too low!`;
    }
    if (guess > randNum) {
      return `${guess} is too high!`;
    }
    won = true;
    return `You win! You found ${guess} in ${numOfGuesses} guesses.`;

  };
}

module.exports = { guessingGame };
