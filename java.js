
function playRound() {
    
let randomNumber = Math.floor(Math.random()*3)+1;

var getComputerChoice = "Rock";

if(randomNumber === 1) {
   var getComputerChoice = "Rock";
    console.log(getComputerChoice);
}
    else if (randomNumber === 2) {
    var getComputerChoice = "Paper";
    console.log(getComputerChoice);
}
    else {
    var getComputerChoice = "Scissors";
    console.log(getComputerChoice);
}

const computerSelection = getComputerChoice.toLowerCase();

let getPlayerChoice = prompt("Select Rock, Paper or Scissors, GLHF");

let playerSelection = getPlayerChoice.toLowerCase();


if(playerSelection === "rock" && computerSelection === "paper") {
    console.log("You Lose! Paper beats Rock");
}    else if(playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You Win! Rock beats Scissors");
}
    else if(playerSelection === "paper" && computerSelection === "rock") {
    console.log("You Win! Paper beats Rock");
}    else if(playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You Lose! Scissors beats Paper");
}
    else if(playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You Lose! Rock beats Scissors");
}    else if(playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You Win! Scissors beats Paper");
}
    else {
    console.log("Tie or Invalid Selection! Please guess again");
}
}



function game() {
    for (let i = 0; i < 5; i++) {
        if(i <= 5) {
            playRound()
        }
        else {
            console.log("Game Over")
        }
    }

}

game()

