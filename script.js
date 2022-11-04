const game = ['Rock', 'Paper', 'Scissors'];
let computerChoice ='start';

function getComputerChoice() {
return computerChoice = game[Math.floor(Math.random()*game.length)];
}

console.log(computerChoice);
getComputerChoice();
console.log(computerChoice);