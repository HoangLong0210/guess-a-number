'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let hightScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
});

if(!==guess) {
    console.log('No number. Please enter the number!')
}