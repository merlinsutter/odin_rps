const options = ['Rock', 'Paper', 'Scissors']

// Randomly return either 'Rock', 'Paper', or 'Scissors'
function computerPlay() {
  let choice = options[Math.floor(Math.random()*options.length)];
  console.log("Computer selects: " + choice);
  return choice;
}

// A function to convert a string input into lower case w/ first letter capitalized
function caseCorrection(string) {
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Play one round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection)
{
  // Make player selection input case insensitive by correcting for variation
  let playerCorrected = caseCorrection(playerSelection);

  // Play the round and return the result
  let result = (playerSelection === computerSelection) ? 'That\'s a draw!' :
            (((playerCorrected === 'Rock') && (computerSelection === 'Scissors')) ||
            ((playerCorrected === 'Paper') && (computerSelection === 'Rock')) ||
            ((playerCorrected === 'Scissors') && (computerSelection === 'Paper'))) ?
            `You win! ${playerCorrected} beats ${computerSelection}` :
            `You lose! ${computerSelection} beats ${playerCorrected}`;
  return result;
}


/*

playerSelection = prompt('What do you choose - Rock, Paper, or Scissors?');
computerSelection = computerPlay();

//Alternative solution 1 for playRound(): Switch statement

//Alternative solution 2 for playRound(): If statement

*/
