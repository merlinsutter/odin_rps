const options = ['Rock', 'Paper', 'Scissors']

// Randomly return either 'Rock', 'Paper', or 'Scissors'
function computerPlay() {
  let choice = options[Math.floor(Math.random()*options.length)];
  console.log("Computer selects: " + choice);
  return choice;
}

// Play one round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection)
{
  let result = (playerSelection === computerSelection) ? 'That\'s a draw!' :
            (((playerSelection === 'Rock') && (computerSelection === 'Scissors')) ||
            ((playerSelection === 'Paper') && (computerSelection === 'Rock')) ||
            ((playerSelection === 'Scissors') && (computerSelection === 'Paper'))) ?
            `You win! ${playerSelection} beats ${computerSelection}` :
            `You lose! ${computerSelection} beats ${playerSelection}`;
  return result;
}


/*

playerSelection = prompt('What do you choose - Rock, Paper, or Scissors?');
computerSelection = computerPlay();

//Alternative solution 1 for playRound(): Switch statement

//Alternative solution 2 for playRound(): If statement

*/
