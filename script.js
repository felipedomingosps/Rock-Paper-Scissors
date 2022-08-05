//Stop the code execution
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//Add class by ID
function addClass(className, id) {
    let element = document.getElementById(`${id}`);
    element.classList.add(`${className}`);
}

//Remove class by ID
function removeClass(className, id) {
    let element = document.getElementById(`${id}`);
    element.classList.remove(`${className}`)
}

//Change IMG
function changeImg(elementId, imgName) {
    let element = document.getElementById(`${elementId}`);
    element.setAttribute("src", `./images/${imgName}.png`);
}

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
function RoundAnimation(winner, playerHand, pcHand) {    
    async function execution() {
        addClass('roundPlay','hand-img-pc');
        addClass('roundPlay','hand-img-player');
        setTimeout (() => {
        removeClass('roundPlay','hand-img-pc');
        removeClass('roundPlay','hand-img-player');
        }, "3000")

        await sleep(2500)

        changeImg('hand-img-player', playerHand)
        changeImg('hand-img-pc', pcHand)

        await sleep(500)

        addClass('handPlayed','hand-img-pc');
        addClass('handPlayed','hand-img-player');
        setTimeout (() => {
        removeClass('handPlayed','hand-img-pc');
        removeClass('handPlayed','hand-img-player');
        }, "3000")

        await sleep(3000)

        changeImg('hand-img-player', 'rock')
        changeImg('hand-img-pc', 'rock')
    }

    execution()
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