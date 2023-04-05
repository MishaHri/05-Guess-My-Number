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


    if (!guess ){
      //when there is no number
      document.querySelector('.message').textContent = 'No value input';
      //when player wins
       }else if (guess === secretNumber) {
       document.querySelector('.message').textContent = '🎉 Correct Number!';
       document.querySelector('body').style.backgroundColor = '#60b347';
       document.querySelector('.number').style.width = '30rem';

      } else if (guess > secretNumber){
        if (score > 1) {
        document.querySelector('.message').textContent = 'too high!';
        score --;
        document.querySelector('.score').textContent = score;
       }else{
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.score').textContent = 0;
      }
      } else if (guess < secretNumber){
        if (score >1 ){
          document.querySelector('.message').textContent = 'too low!';
        score--;
          document.querySelector('.score').textContent = score;
        }else{
          document.querySelector('.message').textContent = 'You lost the game!';
          document.querySelector('.score').textContent = 0;
        }


  }
}
  );
