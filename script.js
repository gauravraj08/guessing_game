'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayNumber(number) {
  document.querySelector('.number').textContent = number;
}

function displayScore(score) {
  document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //no input
  if (!guess) {
    displayMessage('😒 No Number');
    displayNumber('🚫');
  }
  //wins
  else if (guess === number) {
    displayMessage('🥳 Correct Guess');
    displayNumber(number);
    displayScore(score);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(number > guess ? '📉 Too Low!' : '📈 Too High!');
      score--;
      displayScore(score);
    } else {
      displayMessage('👎 You Lost The game!');
      displayScore('0');
    }
  }
  // //low guess
  // else if (number > guess) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '👎 You Lost The game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //high guess
  // else if (number < guess) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '👎 You Lost The game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  displayScore(20);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  displayNumber('?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
