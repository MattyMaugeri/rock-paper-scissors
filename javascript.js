let playerScore = 0;
let computerScore = 0;

const computerDisplay = document.querySelector('.computerScore');
const playerDisplay = document.querySelector('.playerScore');
const roundDisplay = document.querySelector('.roundDisplay');

function getComputerChoice() {
    var choice = ["Rock", "Paper", "Scissors"];
    var random = Math.floor(Math.random() * choice.length);

    return choice[random];
}

function resetGame() {
    if (playerScore > computerScore) {
        alert('Game has finished! The final scores are Player: ' + playerScore + ' Computer: ' + computerScore + '. Player Wins!');
    } else {
        alert('Game has finished! The final scores are Player: ' + playerScore + ' Computer: ' + computerScore + '. Computer Wins!');
    }
    playerScore = 0;
    computerScore = 0;
    playerDisplay.textContent = 'Players Score: ';
    computerDisplay.textContent = 'Computers Score: ';
    roundDisplay.textContent = '';
}


function playRound(playerChoice, computerChoice) {
    if ((playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors")
        || (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock")
        || (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper")) {
        playerScore++;
        playerDisplay.textContent = 'Players Score: ' + playerScore
        roundDisplay.textContent = 'Player chose ' + playerChoice + ' and Computer chose ' + computerChoice + ' Player wins this round!';
    } else if ((computerChoice.toLowerCase() === "rock" && playerChoice.toLowerCase() === "scissors")
        || (computerChoice.toLowerCase() === "paper" && playerChoice.toLowerCase() === "rock")
        || (computerChoice.toLowerCase() === "scissors" && playerChoice.toLowerCase() === "paper")) {
        computerScore++;
        computerDisplay.textContent = "Computers Score: " + computerScore;
        roundDisplay.textContent = 'Player chose ' + playerChoice + ' and Computer chose ' + computerChoice + ' Computer wins this round!';
    } else {
        roundDisplay.textContent = 'Player and Computer both chose: ' + playerChoice + '. This round is a tie!';
    }
    if ((playerScore == 5) || (computerScore == 5)) {
        resetGame();
    }
}

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener("click", () => {
    playRound('Rock', getComputerChoice());
});

paperBtn.addEventListener("click", () => {
    playRound('Paper', getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
    playRound('Scissors', getComputerChoice());
});

// let buttons = document.querySelector('#buttons');

// buttons.addEventListener('click', (event) => {
//     let target = event.target;

//     switch (target.id) {
//         case 'rock':
//             console.log('Rock was selected');
//             //playRound('Rock', getComputerChoice());
//             break;
//         case 'paper':
//             console.log('Paper was selected');
//             //playRound('Paper', getComputerChoice());
//             break;
//         case 'scissors':
//             console.log('Scissors was selected');
//             //playRound('Scissors', getComputerChoice());
//             break;
//     }
// });