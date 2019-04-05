

console.log("HIOIIIOOO");
var letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'W'];
var randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
var letterbtn = document.getElementById("letterbtn");
var letterDisplay = document.getElementById("letterDisplay");
var resetbtn = document.getElementById("resetbtn");
var form = document.querySelector("form-group")

if(letterbtn){
    letterbtn.addEventListener("click", updateLetter);
}

function updateLetter() {
    console.log(randomLetter);
    letterDisplay.textContent = randomLetter;
}

if(resetbtn){
    resetbtn.addEventListener("click", reset);
}

function reset(){
    form.textContent = " ";
}