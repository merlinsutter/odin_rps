const options = ['Rock', 'Paper', 'Scissors']

// Randomly return either 'Rock', 'Paper', or 'Scissors'
function computerPlay() {
  let choice = options[Math.floor(Math.random()*options.length)];
  console.log("Computer selects: " + choice);
  return choice;
}

// Play one round of Rock, Paper, scissors
function playRound(playerSelection, computerSelection)
{
  playerSelection = prompt('What do you choose?');
  computerSelection = computerPlay();

  let win;

  if (playerSelection === computerSelection)
  {

  }

  if (win)
  {
    alert(`You win! ${playerSelection} beats ${computerSelection}`);
  } else {
    alert(`You lose! ${computerSelection} beats ${playerSelection}`);
  }
}
