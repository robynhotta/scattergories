console.log("HIOIIIOOO");
var letterbtn = document.getElementById("letterbtn");
var resetbtn = document.getElementById("resetbtn");
var letterDisplay = document.getElementById("letterDisplay");
var form = document.getElementsByClassName("box");
var scoreDisplay = document.getElementById("scoreDisplay");
var finalScore = 0;

function getRandomLetter() {
    var letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'W'];
   return letterArray[Math.floor(Math.random() * letterArray.length)];
}

if(letterbtn){
    letterbtn.addEventListener("click", updateLetter);
}

function updateLetter() {
        letterDisplay.textContent = getRandomLetter();
}

if(resetbtn){
    resetbtn.addEventListener("click", reset);
}

function reset() {
    updateLetter();
    for(var i = 0; i < form.length; i++){
        form[i].value = "";
    }

}