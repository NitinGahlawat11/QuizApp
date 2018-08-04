var playing=false;
var timer=document.getElementById('timer');
var start=document.getElementById('startreset');
var timerval=document.getElementById('timerval');
 var scorevalue=document.getElementById('scorevalue');
var score;
 start.onclick=function () {
    if(playing){
        location.reload(); // reload the page if user is playing
    }
    else{
        score=1;
        playing=true;
        timer.style.display="block";
        scorevalue.innerHTML=score;
start.innerHTML="Reset Game";

    }
 }
