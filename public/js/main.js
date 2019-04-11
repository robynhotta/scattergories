console.log("HIOIIIOOO");
var letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'W'];
var randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
var letterbtn = document.getElementById("letterbtn");
var resetbtn = document.getElementById("resetbtn");
var letterDisplay = document.getElementById("letterDisplay");
var form = document.getElementsByClassName("box");
var scoreDisplay = document.getElementById("scoreDisplay");
var finalScore = 0;

if(letterbtn){
    letterbtn.addEventListener("click", updateLetter);
}

function updateLetter() {
        letterDisplay.textContent = randomLetter;
}

if(resetbtn){
    resetbtn.addEventListener("click", reset);
}

function reset() {
    letterDisplay.value = randomLetter;
    for(var i = 0; i < form.length; i++){
        form[i].value = "";
    }

}

function scoring() {
    //for each box, if it is filled, add 1 to finalScore, but if it is empty, subtract 1 to finalScore
    form.forEach(function(){
        if(form.value == ""){
            finalScore--;
        } else {
            finalScore++;
        }
    scoreDisplay.textContent = finalScore;
    });
}