const rps = ['Rock', 'Paper', 'Scissors'];
const rpsButtons = document.querySelectorAll(".rps-btn");

rpsButtons.forEach((button) => {
    button.addEventListener('click', onClick);
});

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