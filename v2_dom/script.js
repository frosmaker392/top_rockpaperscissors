const rps = ['Rock', 'Paper', 'Scissors'];
const resultText = document.querySelector('#result');
const roundCounter = document.querySelector('#round-counter');
const rpsButtons = document.querySelectorAll(".rps-btn");

let roundNumber = 1;
let playerScore = 0;
let computerScore = 0;

rpsButtons.forEach((button) => {
    button.addEventListener('click', onClick);
});

//Puts the game state on standby, waiting for user input
function standby(){
    if(roundNumber !== 1){
        rpsButtons.forEach((button) => button.disabled = false);
        resultText.textContent = "Computer is ready";
        roundCounter.textContent = "Round " + roundNumber;
    }
}

function onClick(){
    const dataID = this.getAttribute("data-id");
    console.log(dataID);

    playRound(dataID - 1, getComputerRandomIndex());
}

//Returns a random index between 0 and 2;
function getComputerRandomIndex(){
    return Math.floor(Math.random() * 3);
}

//Plays a round only by comparing the input indices (defined by the rps array)
//Returns 1 if player wins, -1 if computer wins, 0 if draw
function playRound(playerIndex, computerIndex){                
    if(playerIndex - computerIndex === 1 || playerIndex - computerIndex === -2){
        return 1;
    }
    else if(computerIndex - playerIndex === 1 || computerIndex - playerIndex === -2){
        return -1;
    }
    else{
        return 0;
    }
}

//Generates all the messages for resultText and log
function parseWinLose(roundResult, playerIndex, computerIndex){
    const playerMove = rps[playerIndex];
    const computerMove = rps[computerIndex];

    let resultMsg = "";
    let logMsg = "Round " + roundNumber;

    if(roundResult === 1){
        resultMsg = "You Win!\n" + playerMove + " beats " + computerMove;
        logMsg += " : Player wins";
    }
    else if(roundResult === -1){
        resultMsg = "You Lose!\n" + computerMove + " beats " + playerMove;
        logMsg += " : Computer wins";
    }
    else if(roundResult === 0){
        resultMsg = "Draw!";
        logMsg += " : Draw";
    }
    else{
        resultMsg = "Something went wrong!\nRefresh the page"
    }

    logMsg += " ( " + playerMove + " | " + computerMove + " )";

    resultText.textContent = resultMsg;
}