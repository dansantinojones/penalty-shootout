let yourChoiceDisplay = document.getElementById('your-choice')
let gkChoiceDisplay = document.getElementById('gk-choice')
let resultDisplay = document.getElementById('result')
let possibleChoice = document.querySelectorAll('button')
let yourScoreNumber = document.getElementById('your-score')
let gkScoreNumber = document.getElementById('gk-score')
let yourScore = 0
let gkScore = 0
let yourChoice
let gkChoice
let result

/*
the users choice on which direction to shoot
*/
possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    yourChoice = e.target.id
    yourChoiceDisplay.innerHTML = yourChoice
    generateGkChoice()
    getResult()
}))

/*
generate a random number which determines the direction the gk dives
*/
function generateGkChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1)

    if (randomNumber === 1) {
        gkChoice = 'Left'
    }
    if (randomNumber === 2) {
        gkChoice = 'Middle'
    }
    if (randomNumber === 3) {
        gkChoice = 'Right'
    }
    gkChoiceDisplay.innerHTML = gkChoice
}

/*
* outcome of the result depending if user shoots same direction gk dives
* score increases depending on outcome above
*/
function getResult() {
    if (yourChoice === gkChoice) {
        result = "WHAT A SAVE!!!"
        gkScore = gkScore+1
        gkScoreNumber.innerHTML = gkScore
        }
    }

    if (yourChoice !== gkChoice) {
        result = "GOOOAL!!!"
        yourScore = yourScore+1
        yourScoreNumber.innerHTML = yourScore
    }
    resultDisplay.innerHTML = result