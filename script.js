//Universal Variables

var playerTotalPoints = 0;
var pcTotalPoints = 0;
var round = 1;

//This starts the game with a Event Listener
function startGame() {
    const choices = Array.from(document.getElementsByClassName('choice__img'));
    choices.forEach(item => item.addEventListener('click', function(e) {
        if (round <= 5) {
            playRound(e.target.id, getComputerChoice());  
        };               
    }))
}

//Start Game !!!
startGame();

//Display Round Count

function displayRoundCount() {
    const currentRound = document.getElementById('round-text-span');
    currentRound.innerHTML = round;
}

function incrementPoints(idName) {
    let pointBox = document.getElementById(idName);
    if (idName === 'pointsBox-point-player') {
        pointBox.innerHTML = playerTotalPoints;
    } else if (idName === 'pointsBox-point-pc')
        pointBox.innerHTML = pcTotalPoints;    
}

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
    let winner = '';

    // Define who won the round
    let winnerSelection;
    if (playerSelection === computerSelection) {
        winner = 'tie';
    } else if (selection[playerSelection] === computerSelection) {
        winnerSelection = playerSelection;
        winner = 'player';
    } else {
        winnerSelection = computerSelection;
        winner = 'pc';
    };

    // Call round animation function
    roundAnimation(winner, playerSelection, computerSelection);

    // Increment round

    round += 1;

    // Return the message
    if (playerSelection === computerSelection) {
        null;
    } else if (winnerSelection === playerSelection) {
        playerTotalPoints += 1;;
    } else if (winnerSelection === computerSelection){
        pcTotalPoints += 1; 
    };

    
}
// Animates the display after a round is finished
async function roundAnimation(winner, playerHand, pcHand) {

for (let item of ['rock', 'paper', 'scissors']) {
    addClass('pointerEventsNone', `${item}-container`)
}

//Shake hands
addClass('roundPlay','hand-img-pc');
addClass('roundPlay','hand-img-player');
await sleep(1450)

//Remove Class - Shake Hands
removeClass('roundPlay','hand-img-pc');
removeClass('roundPlay','hand-img-player');

//Show Hands
addClass('scaleUp','hand-img-pc');
addClass('scaleUp','hand-img-player');
await sleep(100)
changeImg('hand-img-player', playerHand)
changeImg('hand-img-pc', pcHand)
await sleep(500)
removeClass('scaleUp','hand-img-pc');
removeClass('scaleUp','hand-img-player');

//Play Hand
addClass('handPlayed','hand-img-pc');
addClass('handPlayed','hand-img-player');
await sleep(400)

if (winner === 'player') {
    incrementPoints('pointsBox-point-player');
    addClass('blink', 'player-points');
    await sleep(1000);
    removeClass('blink', 'player-points');
} else if (winner === 'pc') {
    incrementPoints('pointsBox-point-pc');
    addClass('blink', 'pc-points');
    await sleep(1000);
    removeClass('blink', 'pc-points');
    } else {
        await sleep(1000)
    }
            
    await sleep(1500)        

    //Raise Hand
    addClass('handRaise','hand-img-pc');
    addClass('handRaise','hand-img-player');
    await sleep(800)

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

    //Change Round Count

    if (round <= 5) {
        displayRoundCount() 
        addClass('blink', 'round-text')
        await sleep(1000)
        removeClass('blink', 'round-text')

    }

    for (let item of ['rock', 'paper', 'scissors']) {
        removeClass('pointerEventsNone', `${item}-container`)
    }
}

// See who won the entire game
async function getWinner(playerPoints,pcPoints) {
if (playerPoints > pcPoints) {
    let text = document.getElementById('round-text');
    text.innerHTML = 'Player Wins!'

    // > Add container animation later      

    addClass('scaleUp','hand-img-pc');
    addClass('scaleUp','hand-img-player');
    await sleep(100)
    changeImg('hand-img-player', 'smile')
    changeImg('hand-img-pc', 'sad')
    await sleep(500)
    removeClass('scaleUp','hand-img-pc');
    removeClass('scaleUp','hand-img-player');
} else {
    let text = document.getElementById('round-text');
    text.innerHTML = 'PC Wins!'
    
    //Add Later: container animation

    addClass('scaleUp','hand-img-pc');
    addClass('scaleUp','hand-img-player');
    await sleep(100)
    changeImg('hand-img-pc', 'smile')
    changeImg('hand-img-player', 'sad')
    await sleep(500)
    removeClass('scaleUp','hand-img-pc');
    removeClass('scaleUp','hand-img-player');

    //Add Later: Await
    //Add Later: END of the game
}
}

