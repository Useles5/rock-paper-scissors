let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let result = "";

    if (humanChoice == computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        humanScore++;
        result = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    updateScore(result);
    checkWinner();
}

function updateScore(result) {
    const resultDiv = document.querySelector("#result");
    const scoreDiv = document.querySelector("#score");

    resultDiv.textContent = result;
    scoreDiv.textContent = `You: ${humanScore} - Computer: ${computerScore}`;
}

function checkWinner() {
    if (humanScore == 5 || computerScore == 5) {
        const winner = humanScore == 5 ? "You won the game!" : "Computer won the game!";
        document.querySelector("#result").textContent = winner;
        resetGame();
    }
}

function resetGame() {
    let prompt = confirm("Do you want to play again?");
    if (prompt) {
        humanScore = 0;
        computerScore = 0;
        document.querySelector("#score").textContent = "You: 0 - Computer: 0";
    } else {
        alert("Thank you for playing!");
    }
}

document.querySelector("#rock").addEventListener("click", function() {
    playRound("rock", getComputerChoice());
});

document.querySelector("#paper").addEventListener("click", function() {
    playRound("paper", getComputerChoice());
});

document.querySelector("#scissors").addEventListener("click", function() {
    playRound("scissors", getComputerChoice());
});
