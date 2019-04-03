console.log("HIOIIIOOO");
var letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'W'];
var randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
var letterbtn = document.getElementById("letterbtn");
var letterDisplay = document.getElementById("letterDisplay");

letterbtn.addEventListener("click", function(){
	letterDisplay.textContent = randomLetter;
});