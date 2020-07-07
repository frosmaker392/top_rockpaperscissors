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

//Plays 5 rounds through alerts and logs results in the console
function game(){
    let playerScore = 0;
    let computerScore = 0;

    let i = 1;
    do{
        const playerInput = prompt("Round " + i + "\nType \'Rock\', \'Paper\' or \'Scissors\'.");
        const playerIndex = getPlayerIndex(playerInput);
        if(playerIndex === null){
            alert("You\'ve mistyped that one! TRY ANOTHER!");
            continue;
        }
        else{
            const computerIndex = getComputerRandomIndex();
            const resultInt = playRound(playerIndex, computerIndex);

            let resultMessage = "";
            let log = "";
            if(resultInt === 1){
                resultMessage = "You Win! " + rps[playerIndex] + " beats " + rps[computerIndex];
                log = "Player won";
                playerScore++;
            }
            else if(resultInt === -1){
                resultMessage = "You Lose! " + rps[computerIndex] + " beats " + rps[playerIndex];
                log = "Computer won";
                computerScore++;
            }
            else{
                resultMessage = "Draw! No one wins.";
                log = "Draw";
            }

            alert(resultMessage);
            console.log("Round " + i + " : " + log);
            
            i++;
        }
    } while(i < 6);

    if(playerScore > computerScore){
        alert("You won the game! Final score against computer :\n" + playerScore + "-" + computerScore);
    }
    else if(playerScore < computerScore){
        alert("You lost the game! Final score against computer :\n" + playerScore + "-" + computerScore);
    }
    else{
        alert("Draw! Final score against computer :\n" + playerScore + "-" + computerScore);
    }
    console.log("Final score (Player - Computer) : " + playerScore + " - " + computerScore);
}

game();
