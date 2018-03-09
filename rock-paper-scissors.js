// Randomly return either 'Rock', 'Paper', or 'Scissors'
function computerPlay() {
  let options = ['Rock', 'Paper', 'Scissors']
  let choice = options[Math.floor(Math.random()*options.length)];
  console.log("Computer selects: " + choice);
  return choice;
}
