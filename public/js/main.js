console.log("HIOIIIOOO");
var letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'W'];
var randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
var letterbtn = document.getElementById("letterbtn");
var resetbtn = document.getElementById("resetbtn");
var letterDisplay = document.getElementById("letterDisplay");
var form = document.getElementsByClassName("box");

if(letterbtn){
    letterbtn.addEventListener("click", updateLetter);
}

function updateLetter() {
    letterArray.forEach(function(){
        letterDisplay.textContent = randomLetter;
    });
}

if(resetbtn){
    resetbtn.addEventListener("click", reset);
}

function reset() {
    letterDisplay.textContent = randomLetter;
    for(var i = 0; i < form.length; i++){
        form[i].value = "";
    }

}
