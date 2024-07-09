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
function checkAns(){
    if(compAns == userAns){
        TEXT.innerHTML = "DRAW!"
        resultBox.appendChild(TEXT);
    }
    if(compAns == "R" && userAns == "P" ){
        TEXT.innerHTML = "You Win!"
        resultBox.appendChild(TEXT);
    }
    if(compAns == "R" && userAns == "S" ){
        TEXT.innerHTML = "You Lose!";
        resultBox.appendChild(TEXT);
    }
    if(compAns == "P" && userAns == "R" ){
        TEXT.innerHTML = "You Lose!";
        resultBox.appendChild(TEXT);
    }
    if(compAns == "P" && userAns == "S" ){
        TEXT.innerHTML = "You Win!";
        resultBox.appendChild(TEXT);
    }
    if(compAns == "S" && userAns == "P" ){
        TEXT.innerHTML = "You Lose!"
        resultBox.appendChild(TEXT);
    }
    if(compAns == "S" && userAns == "R" ){
        TEXT.innerHTML = "You Win!";
        resultBox.appendChild(TEXT);
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

function clearPage(){
    window.location.reload();
}