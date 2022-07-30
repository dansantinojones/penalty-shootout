let yourChoiceDisplay = document.getElementById('your-choice')
let gkChoiceDisplay = document.getElementById('gk-choice')
let resultDisplay = document.getElementById('result')
let possibleChoice = document.querySelectorAll('button')
let yourChoice
let gkChoice
let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    yourChoice = e.target.id
    yourChoiceDisplay.innerHTML = yourChoice
    generateGkChoice()
    getResult()
}))

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

function getResult() {
    if (yourChoice === gkChoice)
        result = "WHAT A SAVE!!!"

    if (yourChoice !== gkChoice) {
        result = "GOOOAL!!!"
    }
    resultDisplay.innerHTML = result
}