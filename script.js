//Returns a random valor of the array [rock, paper, scissors]
function getComputerChoice() {
    let choices = ['', 'rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*(3-1+1))+1]
}

// Play one round between the player and the PC
function playRound(playerSelection, computerSelection) {
    // Establish the game rules
    let selection = {'rock':'scissors', 'scissors':'paper', 'paper':'rock'};

    // Define who won the round
    let winnerSelection;
    if (selection[playerSelection] === computerSelection) {
        winnerSelection = playerSelection;
    } else {
        winnerSelection = computerSelection;
    };

    // Call round animation function
    roundAnimation(winnerSelection, playerSelection, computerSelection);

    // Return the message
    if (playerSelection === computerSelection) {
        return 'tie';
    } else if (winnerSelection === playerSelection) {
        return `win`;
    } else if (winnerSelection === computerSelection){
        return `lose`; 
    };
}

// Animates the display after a round is finished
function roundAnimation(winner, player, pc) {
    //...
}

// See who won the entire game
function getWinner(player,pc) {
    //...
}

function game() {
    //Return the id of the clicked choice
    const choices = Array.from(document.getElementsByClassName('choice__img'));
    choices.forEach(item => item.addEventListener('click', function(e) {
        return e.target.id
    }))
    //...
}

