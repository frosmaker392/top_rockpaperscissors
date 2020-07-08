const rps = ['Rock', 'Paper', 'Scissors'];
const resultText = document.querySelector('#result');
const roundCounter = document.querySelector('#round-counter');
const rpsButtons = document.querySelectorAll(".rps-btn");
const logContainer = document.querySelector(".log-container");

const playerScoreText = document.querySelector('#st_p');
const computerScoreText = document.querySelector('#st_c');

let roundNumber = 1;
let playerScore = 0;
let computerScore = 0;

rpsButtons.forEach((button) => {
    button.addEventListener('click', onClick);
});

//Puts the game state on standby, waiting for user input
function standby(){
    if(roundNumber !== 1){
        resultText.textContent = "Computer is ready";
        roundCounter.textContent = "Round " + roundNumber;
    }
}

//Triggers when any button is clicked, disables all buttons before next standby
function onClick(){
    const playerIndex = this.getAttribute("data-id") - 1;
    const computerIndex = getComputerRandomIndex();

    const r = playRound(playerIndex, computerIndex);
    parseWinLose(r, playerIndex, computerIndex);

    roundNumber++;

    if(playerScore < 5 && computerScore < 5){
        setTimeout(standby, 2000);
    }
    else{
        endGame();
    }
}

function addLogMessage(logMsg){
    const newLog = document.createElement('p');
    newLog.classList.add("log");
    newLog.textContent = logMsg;

    logContainer.appendChild(newLog);
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

        playerScore++;
        playerScoreText.textContent = playerScore;
    }
    else if(roundResult === -1){
        resultMsg = "You Lose!\n" + computerMove + " beats " + playerMove;
        logMsg += " : Computer wins";

        computerScore++;
        computerScoreText.textContent = computerScore;
    }
    else if(roundResult === 0){
        resultMsg = "Draw!";
        logMsg += " : Draw";
    }
    else{
        resultMsg = "Something went wrong!\nTry refreshing the page";
    }

    logMsg += " ( " + playerMove + " | " + computerMove + " )";

    addLogMessage(logMsg);
    resultText.textContent = resultMsg;
}

function endGame(){

}