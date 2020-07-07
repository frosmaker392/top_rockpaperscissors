const rps = ['Rock', 'Paper', 'Scissors'];

//Returns a random index between 0 and 2;
function getComputerRandomIndex(){
    return Math.floor(Math.random() * 3);
}

//Compares the input string with any of the elements in rps
//Returns the corresponding index if found, otherwise return null
function getPlayerIndex(playerInput){
    for(i = 0; i < 3; i++){
        if(playerInput.trim().toUpperCase() === rps[i].toUpperCase()){
            return i;
        }
    }

    return null;
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
