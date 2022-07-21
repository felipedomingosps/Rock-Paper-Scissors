function getComputerChoice() {
    let choices = ['', 'rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*(3-1+1))+1]
}

function playRound(playerSelection, computerSelection) {
    // Make playerSelection case insensitive
    playerSelection = playerSelection.toLowerCase(); 
    // Establish the game rules
    let selection = {'rock':'scissors', 'scissors':'paper', 'paper':'rock'};
    // Define who won the round
    let winnerSelection;
    if (selection[playerSelection] === computerSelection) {
        winnerSelection = playerSelection;
    } else {
        winnerSelection = computerSelection;
    }
    // Return the message
    if (playerSelection === computerSelection) {
        return 'Tie!';
    } else if (winnerSelection === playerSelection) {
        // Capitalize the first letter of the winner selection
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        // Return the result
        return `You won! ${playerSelection} beats ${computerSelection}.`;
    } else if (winnerSelection === computerSelection){
        computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        return `You lose! ${computerSelection} beats ${playerSelection}.`; 
    }
}

/* Algorithm

> Take playerSelection and computerSelection values.
> Establish the rules of the game
> Compare playerSelection and computerSelection and sees who win

*/
