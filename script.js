let userScore = 0;
let computerScore = 0;
let userScoreBoard = document.getElementById("user-score");
let computerScoreBoard = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
let result = document.querySelector(".result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function newGame(){
    userScore = 0;
    computerScore = 0;
}

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    randomNum = (Math.floor(Math.random()* 3));
    return choices[randomNum];
}

function lose(player, computer){
    const losean = document.getElementById(player);
    const loseres = document.getElementById('res');
    loseres.classList.remove('resultwin');
    loseres.classList.remove('resulttie');
    computerScore++;
    computerScoreBoard.innerHTML = computerScore;
    userScoreBoard.innerHTML = userScore;
    result.innerHTML = `Round Lost!! ${computer} beats  ${player}`;
    losean.classList.add('lose');
    loseres.classList.add('resultlose');
    setTimeout(() => losean.classList.remove("lose"), 200)

    if(userScore == 5){
        result.innerHTML = "YOU WON THE GAME!!";
        const playAgain = document.createElement('button')
        loseres.append(playAgain);
        newGame();
    }
    else if (computerScore == 5){
        result.innerHTML = "YOU LOST THE GAME!!"
        const playAgain = document.createElement('button')
        loseres.append(playAgain);
        newGame();
    }
    
}

function win(player, computer){
    const winan = document.getElementById(player);
    const winres = document.getElementById('res');
    winres.classList.remove('resultlose');
    winres.classList.remove('resulttie');
    userScore++;
    userScoreBoard.innerHTML = userScore;
    computerScoreBoard.innerHTML = computerScore;
    result.innerHTML = `Round Won!! ${player}   beats  ${computer}`;
    winan.classList.add('win');
    winres.classList.add('resultwin');
    setTimeout(() => winan.classList.remove('win'), 200);

    if(userScore == 5){
        result.innerHTML = "YOU WON THE GAME!!"
        const playAgain = document.createElement('button')
        playAgain.id = 'again';
        playAgain.innerHTML = "Play again?";
        winres.append(playAgain);
        newGame();
    }
    else if (computerScore == 5){
        result.innerHTML = "YOU LOST THE GAME!!"
        const playAgain = document.createElement('button')
        winres.append(playAgain);
        newGame();
    }
}   
   
    

function tie(x){
    const tiean = document.getElementById(x)
    const tieres = document.getElementById('res');
    tieres.classList.remove('resultwin');
    tieres.classList.remove('resultlose');
    result.innerHTML = `It's a TIE! both picked  ${x}`;
    tieres.classList.add('resulttie');
    tiean.classList.add('tie');
    setTimeout(() => tiean.classList.remove('tie'), 200);
}


function game(playerSelection){
    const computerSelection = getComputerChoice();
    if (playerSelection == "rock" && computerSelection == "scissors") {
        win(playerSelection, computerSelection)
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        lose(playerSelection, computerSelection);
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        win(playerSelection, computerSelection)
    }  
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        lose(playerSelection, computerSelection);
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        win(playerSelection, computerSelection)
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        lose(playerSelection, computerSelection);
    }
    else tie(playerSelection);
}

rock.addEventListener('click', function() {
    game("rock");
})

paper.addEventListener('click', function(){
    game("paper");
})

scissors.addEventListener('click', function(){
    game("scissors");
})

