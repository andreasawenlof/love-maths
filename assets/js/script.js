// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                alert('You clicked Submit!');
            } else {
                const gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })
    }

    runGame('addition');
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType) {
    // Creates two random numbers between 1 and 25
    const num1 = Math.floor(Math.random() * 25) + 1;
    const num2 = Math.floor(Math.random() * 25) + 1;

    let sum = 0

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
/*  } else if (gameType === 'subtract') {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === 'multiply') {
        displayMultiplyQuestion(num1, num2)
    } else if (gameType === 'division') {
        displayDivisionQuestion(num1, num2); */
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}


function checkAnswer() {

}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {
const operand1 = parseInt(document.getElementById('operand1').innerText);
const operand2 = parseInt(document.getElementById('operand2').innerText);
const operator = document.getElementById('operator').innerText;

if (operator === '+') {
    return [operand1 + operand2, 'addition'];
    operand1 - operand2;
} else {
    alert(`Unimplemented operator ${operator}`);
    throw `Unimplemented operator ${operator}. Aborting!`;
}
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion() {

}

function displayDivisionQuestion() {

}

function displayMultiplyQuestion() {

}