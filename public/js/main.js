console.log("HIOIIIOOO");
var letterbtn = document.getElementById("letterbtn");
var resetbtn = document.getElementById("resetbtn");
var letterDisplay = document.getElementsByClassName("letterDisplay");
var form = document.getElementsByClassName("box");
var scoreDisplay = document.getElementById("scoreDisplay");


function getRandomLetter() {
    var letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'W'];
   return letterArray[Math.floor(Math.random() * letterArray.length)];
}

if(letterbtn){
    letterbtn.addEventListener("click", updateLetter);
}

// function updateLetter() {
//         letterDisplay.textContent = getRandomLetter();
// }

function updateLetter() {
    var letter = getRandomLetter();
        for(var i = 0; i < letterDisplay.length; i++){
            letterDisplay[i].textContent = letter;
            letterDisplay[i].value = letter.toLowerCase();
        }
        return letter;
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

// function scoring(gameValues) {
//         var finalScore = 0;
//             for(var i = 0; i < gameValues.length; i++){
//                 if(!gameValues[i] == "" && gameValues[i].charAt(0) === getRandomLetter()){
//                     finalScore += 1;
//                 }
//             }
//             return finalScore;
//         }