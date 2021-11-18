
let playerSelection
let computerSelection
let playerScore = 0;
let computerScore = 0;

function playerPlay(){
    let playerrps 
    while(playerrps !== "rock" && playerrps !== "paper" && playerrps !== "scissors")
    {
        playerrps = prompt("Please enter rock, paper, scissors?")
        playerrps = playerrps.toLocaleLowerCase();
    }
    return playerrps;
}
playerPlay();

function computerPlay() {
    let rps = Math.floor(Math.random() *3);
    let computerRps;
    if(rps === 0){
        computerRps = "rock";
    }
    else if (rps === 1){
        computerRps = "paper";
    }
    else computerRps = "scissors";
    return computerRps;
}


function playRound() {
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
        if (playerSelection == "rock" && computerSelection == "scissors") {
            playerScore += 1;
            return "You win, rock beats scissors";
        }
        else if (playerSelection == "rock" && computerSelection == "paper") {
            computerScore += 1;
            return "You lose, paper beats rock";
        }
        else if (playerSelection == "paper" && computerSelection == "rock") {
            playerScore += 1;
            return "you win, paper beats rock";
        }
        else if (playerSelection == "paper" && computerSelection == "scissors") {
            computerScore += 1;
            return "You lose, scissors beats paper";
        }
        else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerScore += 1;
            return "You win, scissors beats paper";
        }
        else if (playerSelection == "scissors" && computerSelection == "rock") {
            computerScore += 1;
            return "You lose, rock beats scissors";
        }
        else return "it was a tie.";

}

function game() {

    for (let i = 1; i <= 5; i++) {
       
        console.log(playRound());
        console.log(playerScore);
        console.log(computerScore);
         console.log("Round" + i);
    }
    if(playerScore > computerScore){
        console.log("Player has won the game");
    }
    else if(playerScore < computerScore){
        console.log("Computer has won the game");
    }
    else("It was a draw.")
}
game();

