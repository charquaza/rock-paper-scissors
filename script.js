function computerPlay() {
    var playChoices = ["rock", "paper", "scissors"];
    var randNum = Math.floor(Math.random() * 3);
    return playChoices[randNum];
}

function playOneRound() {
    var playerInput = prompt("Let's play rock, paper, scissors! Enter rock, paper, or scissors:");

    if (playerInput) {
        var playerSelection = playerInput.toLowerCase();
    } else {
        return;
    }

    var computerSelection = computerPlay();

    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    return "It's a draw.";
                case "paper":
                    return "You lose... Paper beats Rock";
                case "scissors":
                    return "You win! Rock beats Scissors";
            }
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return "You win! Paper beats Rock";
                case "paper":
                    return "It's a draw.";
                case "scissors":
                    return "You lose... Scissors beats Paper";
            }
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return "You lose... Rock beats Scissors";
                case "paper":
                    return "You win! Scissors beats Paper";
                case "scissors":
                    return "It's a draw.";
            }
        default:
            return "Hmm?";
    }
}

function game() {
    var playerScore = 0;
    var computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let resultOfRound = playOneRound();

        if (resultOfRound === undefined) {
            console.log("Oops, we're skipping this round...");
            continue;
        }

        if (resultOfRound.slice(0, 8) === "You win") {
            playerScore++;
        } else if (resultOfRound.slice(0, 7) === "You lose") {
            computerScore++;
        } 
        
        console.log(resultOfRound);
    }

    if (playerScore > computerScore) {
        console.log("You win!!");
    } else if (playerScore < computerScore) {
        console.log("You lose ]:");
    } else {
        console.log("There is no winner.");
    }
}