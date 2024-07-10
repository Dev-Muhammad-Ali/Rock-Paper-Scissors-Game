let ANS = "RSPRSPRSPRSPRSP";
var compAns = ANS[Math.floor(Math.random()*15)];
var userAns ;
var fistAns = document.querySelector('#fistAns');
var paperAns = document.querySelector('#paperAns');
var scissorsAns = document.querySelector('#scissorsAns');
var fistBtn = document.querySelector('#fist-btn-op');
var paperBtn = document.querySelector('#paper-btn-op');
var scissorsBtn = document.querySelector('#scissors-btn-op');
var fistOption = document.querySelector('#rock-btn');
var paperOption = document.querySelector('#paper-btn');
var scissorsOption = document.querySelector('#scissors-btn');
var RESULT  =  document.querySelector('.result-container');
var resultBox = document.querySelector('.result');
var TEXT = document.createElement("p");
var SCORE = document.querySelector('.score');
var scoreAns = document.createElement("p");
var WIN = 0;
var DRAW = 0;
var LOSE = 0;

function displayCompAns(){
    if(compAns == "R"){
        fistAns.style.display = 'block';
    }
    if(compAns == "S"){
        scissorsAns.style.display = 'block';
    }
    if(compAns == "P"){
        paperAns.style.display = 'block';
    }
}
function showScore(){
    scoreAns.innerHTML = "<b>Computer :-</b> <br> Win : " + LOSE + "<br>Lose : " + WIN + "<br><br> <b>You :-</b> <br> Win : " + WIN + "<br> Lose : " + LOSE + " <br><br><b>Draw :-</b>" + DRAW;
    SCORE.appendChild(scoreAns);
}
function checkAns(){
    if(compAns == userAns){
        TEXT.innerHTML = "DRAW!"
        resultBox.appendChild(TEXT);
        DRAW++;
        showScore()
    }
    if(compAns == "R" && userAns == "P" ){
        TEXT.innerHTML = "You Win!"
        resultBox.appendChild(TEXT);
        WIN++;
        showScore()
    }
    if(compAns == "R" && userAns == "S" ){
        TEXT.innerHTML = "You Lose!";
        resultBox.appendChild(TEXT);
        LOSE++;
        showScore()
    }
    if(compAns == "P" && userAns == "R" ){
        TEXT.innerHTML = "You Lose!";
        resultBox.appendChild(TEXT);
        LOSE++;
        showScore()
    }
    if(compAns == "P" && userAns == "S" ){
        TEXT.innerHTML = "You Win!";
        resultBox.appendChild(TEXT);
        WIN++;
        showScore()
    }
    if(compAns == "S" && userAns == "P" ){
        TEXT.innerHTML = "You Lose!"
        resultBox.appendChild(TEXT);
        LOSE++;
        showScore()
    }
    if(compAns == "S" && userAns == "R" ){
        TEXT.innerHTML = "You Win!";
        resultBox.appendChild(TEXT);
        WIN++;
        showScore()
    }
}

fistBtn.addEventListener("click", ()=>{
    fistOption.style.display = 'block';
    displayCompAns();
    userAns = "R";
    RESULT.style.display = 'flex';
    checkAns();
})
paperBtn.addEventListener("click", ()=>{
    paperOption.style.display = 'block';
    displayCompAns();
    userAns = "P";
    RESULT.style.display = 'flex';
    checkAns();
})
scissorsBtn.addEventListener("click", ()=>{
    scissorsOption.style.display = 'block';
    displayCompAns();
    userAns = "S";
    RESULT.style.display = 'flex';
    checkAns();
})

function continueGame(){
   fistAns.style.display = 'none';
   scissorsAns.style.display = 'none';
   paperAns.style.display = 'none';
   fistOption.style.display = 'none';
   scissorsOption.style.display = 'none';
   paperOption.style.display = 'none';
   RESULT.style.display = 'none';
}
function newGame(){
    window.location.reload();
}