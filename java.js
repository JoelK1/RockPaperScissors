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

var getComputerChoice = getComputerChoice.toLowerCase();

var playerSelection = prompt("Select Rock, Paper or Scissors, GLHF");

var playerSelection = playerSelection.toLowerCase();

console.log(playerSelection)

console.log(getComputerChoice)

if(playerSelection === "rock" && getComputerChoice === "paper") {
    console.log("You Lose! Paper beats Rock");
}    else if(playerSelection === "rock" && getComputerChoice === "scissors") {
    console.log("You Win! Rock beats Scissors");
}
    else if(playerSelection === "paper" && getComputerChoice === "rock") {
    console.log("You Win! Paper beats Rock");
}    else if(playerSelection === "paper" && getComputerChoice === "scissors") {
    console.log("You Lose! Scissors beats Paper");
}
    else if(playerSelection === "scissors" && getComputerChoice === "rock") {
    console.log("You Lose! Rock beats Scissors");
}    else if(playerSelection === "scissors" && getComputerChoice === "paper") {
    console.log("You Win! Scissors beats Paper");
}
    else {
        console.log("Tie or Invalid Selection! Please guess again");
}
