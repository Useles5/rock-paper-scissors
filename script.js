// console.log("Rock, Paper, Scissors, Shoot!");

let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return choices[randomChoice()];
}

function randomChoice() {
    let max = 3;
    return Math.floor(Math.random() * max);
}

function getHumanChoice() {
    let humanChoice;

    do {
        humanChoice = prompt(
            "Enter your Choice: Rock, Paper, or Scissors?\n" + 
            "Rock : 0\n" + 
            "Paper : 1\n" + 
            "Scissors : 2\n",
            "0"
        );
        humanChoice = Number(humanChoice);

    } while (
        isNaN(humanChoice) ||
        !Number.isInteger(humanChoice) ||
        humanChoice < 0 || 
        humanChoice > 2
    );

    return alert(`Your Choice: ${choices[humanChoice]} | Computer Choice: ${getComputerChoice()}`); 
}

getHumanChoice();
