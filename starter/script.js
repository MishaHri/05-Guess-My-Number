'use strict';


// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);



//to select a class .in front of the name of the class
//we selected the class and after we added an event listener and we passed the function dorect to the event listener without giving it  aname


//define my secret number

const secretNumber = Math.trunc((Math.random()*20)+1);
let score = 20;
document.querySelector('.number').textContent = secretNumber ;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
    if (!guess) {
      document.querySelector('.message').textContent = 'No value input';
    }else if (guess === secretNumber) {
       document.querySelector('.message').textContent = '🎉 Correct Number!';
      } else if (guess > secretNumber){
        document.querySelector('.message').textContent = 'too high!';
        score --;
        document.querySelector('.score').textContent = score;
      } else if (guess < secretNumber){
      document.querySelector('.message').textContent = 'too low!';
      score--;
      // document.querySelector('.score').textContent = score;
      document.querySelector('.score').textContent = score;
     }
  });


  
