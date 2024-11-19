let humanScore = 0;
let computerScore = 0;

let playerChoice;

function getComputerChoice() {
    var choice = ["Rock", "Paper", "Scissors"];
    var random = Math.floor(Math.random() * choice.length);

    return choice[random];
}

/* This function determines if the answer in the prompt is valid */
function validAnswer() {
    if ((playerChoice.toLowerCase() !== "rock" && playerChoice.toLowerCase() !== "scissors"
        && playerChoice.toLowerCase() !== "paper")) {
        return false;
    }
    return true;
}

function getHumanChoice() {
    playerChoice = prompt("Rock, Paper or Scissors?");
    return playerChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (validAnswer()) {
        if ((humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors")
            || (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock")
            || (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper")) {
            alert("Player wins!");
            humanScore++;
        } else if ((computerChoice.toLowerCase() === "rock" && humanChoice.toLowerCase() === "scissors")
            || (computerChoice.toLowerCase() === "paper" && humanChoice.toLowerCase() === "rock")
            || (computerChoice.toLowerCase() === "scissors" && humanChoice.toLowerCase() === "paper")) {
            alert("Computer wins!");
            computerScore++;
        } else {
            alert("Player chose " + humanChoice + " and Computer chose " + computerChoice + ". It's a tie!");
        }
    } else {
        alert("Player didn't choose Rock Paper or Scissors correctly. Computer wins this round");
        computerScore++;
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        playRound();
    }
    if (humanScore > computerScore) {
        alert("Player wins Rock Paper Scissors! The score was:\n" +
            "Player: " + humanScore + "\n" +
            "Computer: " + computerScore);
    } else if (computerScore > humanScore) {
        alert("Computer wins Rock Paper Scissors! The score was:\n" +
            "Computer: " + computerScore + "\n" +
            "Player: " + humanScore);
    } else {
        alert("Result of the game is a tie! The score was:\n" +
            "Player: " + humanScore + "\n" +
            "Computer: " + computerScore);
    }
}

playGame();