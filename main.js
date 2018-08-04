var playing=false;
var timer=document.getElementById('timer');
var start=document.getElementById('startreset');
var timerval=document.getElementById('timerval');
 var scorevalue=document.getElementById('scorevalue');
 var gameover=document.getElementById('gameover');
var score;
var action;
var timeRemaining;
 start.onclick=function () {
     if (playing) {
         location.reload(); // reload the page if user is playing
     }
     else {
         score = 1;
         playing = true;
         timer.style.display = "block";
         scorevalue.innerHTML = score;
         start.innerHTML = " Reset Game";
         timeRemaining = 10;
//timerval.innerHTML=timeRemaining;
         gameover.style.display="none";

         startCountDown();

         generateQA();


     }


     function startCountDown() {
         var action = setInterval(function () {
             timeRemaining -= 1;
             timerval.innerHTML = timeRemaining;
             if (timeRemaining == 0) { // if timer reaches 0 stop the timer and game is over
                 stopCountDown();
                 gameover.style.display = "block";
                 gameover.innerHTML = "<p>Game Over</p><p>Your Score is" + score + "</p>"
                 timer.style.display = "none";
                 playing = false;
                 start.innerHTML = "Start Game";
             }
         }, 1000)
     }

     function stopCountDown() {
         clearInterval(action); // clear Interval fn stops the timer
     }

     function generateQA() {





     }


 }
