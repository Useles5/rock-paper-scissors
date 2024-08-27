// console.log("Rock, Paper, Scissors, Shoot!");

let choices = ["Rock", "Paper", "Scissors"];
let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    computerChoice = choices[randomChoice()];
    return computerChoice;
}

function randomChoice() {
    let max = 3;
    return Math.floor(Math.random() * max);
}

function getHumanChoice() {
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

    humanChoice = choices[humanChoice];
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return alert("Tie");   
    } 
    else if ( humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++;
        return alert("You win! " + humanChoice + " beats " + computerChoice);
    } 
    else if ( humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore++;
        return alert("You lose! " + computerChoice + " beats " + humanChoice);
    }
    else if ( humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore++;
        return alert("You lose! " + computerChoice + " beats " + humanChoice);
    } 
    else if ( humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        return alert("You win! " + humanChoice + " beats " + computerChoice);
    }
    else if ( humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore++;
        return alert("You lose! " + computerChoice + " beats " + humanChoice);
    }
    else if ( humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++;
        return alert("You win! " + humanChoice + " beats " + computerChoice);
    }
    
}

function startGame() {
    for (let i = 0; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    let finalScore = humanScore + " - " + computerScore;
    let result = humanScore > computerScore ? "You win!" : "You lose!";
    alert(`${result}\n ${finalScore}`);
}

startGame();
