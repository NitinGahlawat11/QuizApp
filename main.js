var playing=false;
var timer=document.getElementById('timer');
var start=document.getElementById('startreset');
var timerval=document.getElementById('timerval');
 var scorevalue=document.getElementById('scorevalue');
 var gameover=document.getElementById('gameover');
 var question=document.getElementById('question');
 var correct=document.getElementById('correct');
 var wrong= document.getElementById('wrong');
var score;
var action;
var timeRemaining;
var z;
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
     for(i=1; i<5; i++){
         document.getElementById("box"+i).onclick = function(){
             //check if we are playing
             if(playing == true){//yes
                 if(this.innerHTML == z){
                     //correct answer

                     //increase score by 1
                     score++;
                     document.getElementById("scorevalue").innerHTML = score;
                     //hide wrong box and show correct box
                     wrong.style.display="none";
                     correct.style.display="block";
                     setTimeout(function(){
                         correct.style.display="none";
                     }, 1000);

                     //Generate new Q&A

                     generateQA();
                 }else{
                     //wrong answer
                     correct.style.display="none";
                     wrong.style.display="block";
                     setTimeout(function(){
                         wrong.style.display="none";
                     }, 1000);
                 }
             }
         }
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

var x= 1+Math.round(9*Math.random());
var y=1+Math.round(9*Math.random());
 z= x*y;

question.innerHTML=x + "* " + y;
 // enter the correct answer at one of the box

         var correctOption=1+Math.round(3*Math.random());
         document.getElementById('box'+correctOption).innerHTML=z; // placing the z at any position


         //fill the remaining options with wrong ans
         for( i=1;i<5;i++){
if(i!=correctOption){
    var wrongAns=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
document.getElementById('box'+i).innerHTML=wrongAns;
}
         }

     }


 }
