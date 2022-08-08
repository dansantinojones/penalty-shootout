const yourChoiceDisplay = document.getElementById('your-choice');
const gkChoiceDisplay = document.getElementById('gk-choice');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');
const yourScoreNumber = document.getElementById('your-score');
const gkScoreNumber = document.getElementById('gk-score');
const computerState = document.getElementById('computer-state');
const humanState = document.getElementById('human-state');
const COMPUTER_SHOOTING = 1;
const HUMAN_SHOOTING = 2;
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
let result;
let playingState = HUMAN_SHOOTING;

/*
the users choice on which direction to shoot
*/
possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    humanChoice = e.target.id;
    yourChoiceDisplay.innerHTML = humanChoice;
    generateComputerChoice();
    updateScore();
}));

/*
generate a random number which determines the direction the gk dives
*/
function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    if (randomNumber === 1) {
        computerChoice = 'Left';
    }
    if (randomNumber === 2) {
        computerChoice = 'Middle';
    }
    if (randomNumber === 3) {
        computerChoice = 'Right';
    }
    gkChoiceDisplay.innerHTML = computerChoice;
}

/*
 * outcome of the result depending if user shoots same direction gk dives
 * score increases depending on outcome above
 */
function updateScore() {
    let result = "";
    if (playingState === COMPUTER_SHOOTING) {
        if (computerChoice === humanChoice) {
            result = "WHAT A SAVE!!!";
        }
        else {
            computerScore = computerScore + 1;
            result = "GOOOAL!!!";
            gkScoreNumber.innerHTML = computerScore;
        }
    } else if (playingState === HUMAN_SHOOTING) {
        if (computerChoice === humanChoice) {
            result = "WHAT A SAVE!!!";
        }
        else {
            humanScore = humanScore + 1;
            result = "GOOOAL!!!";
            yourScoreNumber.innerHTML = humanScore;
        }
    }
    resultDisplay.innerHTML = result;
    
    // Update messages
    renderPlayerState();

    // Set the game state
    setState();
}

function setState() {
    playingState = playingState === HUMAN_SHOOTING ? COMPUTER_SHOOTING : HUMAN_SHOOTING;
}

function renderPlayerState() {
    if (playingState === HUMAN_SHOOTING) {
        computerState.innerHTML = "Computer dived";
        humanState.innerHTML = "You shot";
    } else {
        computerState.innerHTML = "Computer shot";
        humanState.innerHTML = "You dived";
    }
}