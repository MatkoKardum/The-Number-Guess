'use strict';
// Selecting the DOM elements
const btnGuess = document.querySelector('.guess');
const btnClear = document.querySelector('.clear');
const btnAgain = document.querySelector('.again');
const labelScore = document.querySelector('.score');
const labelHighscore = document.querySelector('.highscore');
const labelMessage = document.querySelector('.message');
const labelSecret = document.querySelector('.secret');
const inputGuess = document.querySelector('#guess');

let score, highscore, secretNumber, playing;

highscore = 0;
const init = function () {
    score = 20;
    playing = true;
    secretNumber = Math.floor(Math.random() * 20) + 1;

    labelScore.textContent = "Score: 20 🏆";
    labelMessage.textContent = "Start guessing...";
    labelSecret.textContent = "?";

    inputGuess.value = '';

    document.body.style.backgroundColor = "#0F162B";
}
init();

btnGuess.addEventListener("click", function () {
    if(playing) {
        const guess = Number(inputGuess.value);
        if(!guess) {
            labelMessage.textContent = "Invalid guess! ⚠";
        } else if(guess === secretNumber) {
            labelMessage.textContent = "You win! 🎉";
            playing = false;
            if(score > highscore) {
                highscore = score;
                labelHighscore.textContent = `Highscore: ${highscore} 🏅`;
            }

            labelSecret.textContent = secretNumber;
            document.body.style.backgroundColor = "#6D90D3";

        } else if(guess !== secretNumber) {
            labelMessage.textContent = `Too ${guess > secretNumber ? 'high! 📈' : 'low! 📉'}`;
            if(score > 1) {
                score--;
                labelScore.textContent = `Score: ${score} 🏆`;
            } else {
                labelMessage.textContent = `You lost! 🧨`;
                labelScore.textContent = `Score: 0`;
                playing = false;
            }
        }
    }
})

btnAgain.addEventListener("click", init)