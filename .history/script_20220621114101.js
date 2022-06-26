'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let hightScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent =
      'No number. Please enter the number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct!!!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > hightScore) {
      hightScore = score;
      document.querySelector('.highscore').textContent = hightScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Smaller Number' : 'Bigger Number';
      score--;
      document.querySelector('.score').textContent = score;
    } else document.querySelector('.message').textContent = 'You lose!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  let secretNumber = Math.trunc(Math.random() * 20 + 1);
  let score = 20;
  let hightScore = 0;
});
