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
  } else if (guess === secretNumber)
    document.querySelector('.message').textContent = 'Correct!!!';
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
    }
  }
});
