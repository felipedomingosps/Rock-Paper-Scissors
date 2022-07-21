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
        return 'tie';
    } else if (winnerSelection === playerSelection) {
        return `win`;
    } else if (winnerSelection === computerSelection){
        return `lose`; 
    }
}

function game() {
    // Define score variables
    let playerScore = 0;
    let computerScore = 0;

    //Create for loop to play 5 rounds
    for (let i = 1; i < 6; i++) {
        //Create selection variables
        let playerSelection = prompt("Rock, paper or scissors?");
        let computerSelection = getComputerChoice()
        
        //Play Round
        let result = playRound(playerSelection, computerSelection);

        // Capitalize the first letter of the variables values
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

        //See who wins
        if (result == 'win') {
            playerScore += 1;
            alert(`You win! ${playerSelection} beats ${computerSelection}. \n \n SCORE \n You: ${playerScore} \n PC: ${computerScore}`)
        } else if (result == 'lose') {
            computerScore += 1;
            alert(`You lose! ${computerSelection} beats ${playerSelection}. \n \n SCORE \n You: ${playerScore} \n PC: ${computerScore}`)
        } else {
            alert(`Tie! \n \n SCORE \n You: ${playerScore} \n PC: ${computerScore}`)
        }
    }

    //Show Game Over box
    if (playerScore === computerScore) {
        alert(`GAME OVER! \n \n You: ${playerScore} \n PC: ${computerScore} \n None of you won!`)
    } else if (playerScore > computerScore) {
        alert(`GAME OVER! \n \n You: ${playerScore} \n PC: ${computerScore} \n You won!`)
    } else {
        alert(`GAME OVER! \n \n You: ${playerScore} \n PC: ${computerScore} \n You lost!`)
    }
}
