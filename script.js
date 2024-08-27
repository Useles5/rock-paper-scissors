// console.log("Rock, Paper, Scissors, Shoot!");

let choice = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return choice[randomChoice()];
}

function randomChoice() {
    let max = 3;
    return Math.floor(Math.random() * max);
}

