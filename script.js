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

        //Shake hands
        addClass('roundPlay','hand-img-pc');
        addClass('roundPlay','hand-img-player');
        await sleep(2500)

        //Remove Class - Shake Hands
        removeClass('roundPlay','hand-img-pc');
        removeClass('roundPlay','hand-img-player');

        //Show Hands
        addClass('scaleDown','hand-img-pc');
        addClass('scaleDown','hand-img-player');
        await sleep(100)
        changeImg('hand-img-player', playerHand)
        changeImg('hand-img-pc', pcHand)
        await sleep(800)
        removeClass('scaleDown','hand-img-pc');
        removeClass('scaleDown','hand-img-player');
        await sleep(500)

        //Play Hand
        addClass('handPlayed','hand-img-pc');
        addClass('handPlayed','hand-img-player');
        /* Add container animation here */
        await sleep(2900)        

        //Raise Hand
        addClass('handRaise','hand-img-pc');
        addClass('handRaise','hand-img-player');
        await sleep(3000)

        removeClass('handRaise','hand-img-pc');
        removeClass('handRaise','hand-img-player');

        removeClass('handPlayed','hand-img-pc');
        removeClass('handPlayed','hand-img-player'); 

        addClass('scaleDown','hand-img-pc');
        addClass('scaleDown','hand-img-player');
        changeImg('hand-img-player', 'rock')
        changeImg('hand-img-pc', 'rock')
        
        await sleep(1000)

        removeClass('scaleDown','hand-img-pc');
        removeClass('scaleDown','hand-img-player');
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