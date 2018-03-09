const options = ['Rock', 'Paper', 'Scissors']

// Randomly return either 'Rock', 'Paper', or 'Scissors'
function computerPlay() {
  let choice = options[Math.floor(Math.random()*options.length)];
  console.log("Computer selects: " + choice);
  return choice;
}

// Get user input & adjust for variation by converting to lower case w/
// capitalized first letter
function humanPlay() {
  let input = prompt('What do you choose - Rock, Paper, or Scissors?');
  input = input.toLowerCase();
  return input.charAt(0).toUpperCase() + input.slice(1);
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
