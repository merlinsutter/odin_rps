const options = ['Rock', 'Paper', 'Scissors']

// Randomly return either 'Rock', 'Paper', or 'Scissors'
function computerPlay() {
  let choice = options[Math.floor(Math.random()*options.length)];
  console.log("Computer selects: " + choice);
  return choice;
}

// Get and clean up user input
function humanPlay() {
  let input = prompt('What do you choose - Rock, Paper, or Scissors?');
  input = input.toLowerCase();
  return input.charAt(0).toUpperCase() + input.slice(1);
}

// Play one round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
  let result = (playerSelection === computerSelection) ? 'Draw' :
            (((playerSelection === 'Rock') && (computerSelection === 'Scissors')) ||
            ((playerSelection === 'Paper') && (computerSelection === 'Rock')) ||
            ((playerSelection === 'Scissors') && (computerSelection === 'Paper'))) ?
            `Player` :
            `Computer`;
  return result;
}

// Play a full game of five rounds, keep score and announce the winner
function game() {
  let roundCount = 1;
  let playerScore = 0;
  let computerScore = 0;

  while (roundCount <= 5) {
    playerSelection = humanPlay();
    computerSelection = computerPlay();

    let roundWinner = playRound(playerSelection, computerSelection);

    if (roundWinner === 'Player') {
      playerScore ++;
      console.log(`You win round ${roundCount}! ${playerSelection} beats ${computerSelection}`);
    } else if (roundWinner === 'Computer') {
      computerScore ++;
      console.log(`You lose round ${roundCount}! ${computerSelection} beats ${playerSelection}`);
    } else {
      console.log('That\'s a draw!');
    }

    roundCount++;
  }

  let finalResult =  (playerScore > computerScore) ?
                `You win ${playerScore} to ${computerScore}` :
                (playerScore < computerScore) ?
                `You lose ${playerScore} to ${computerScore}` :
                'That\'s a draw!';
  console.log(finalResult);
  return finalResult;
}
