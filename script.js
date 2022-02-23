
let string = " ";
let newStringArr = [];
let buttonStart = document.querySelector(".start");
buttonStart.addEventListener("click", function(){

    newStringArr = JSON.parse(localStorage.getItem("strArr"));
    string = newStringArr[Math.floor(Math.random() * newStringArr.length)];

    returnWord.textContent = linesWord(string);;

    console.log(string);
    returnWrongWords.textContent = " ";
    gameStatus.textContent = " ";
    clearScreen();
    mistakes = 0;
});



let returnWord = document.querySelector(".word-result");
let returnWrongWords = document.querySelector(".words-wrong");
let gameStatus = document.querySelector(".game-status");
let mistakes = 0;
let wordRandom = document.querySelector(".word-random");

let input = document.querySelector(".chart");
let button = document.querySelector(".send");
button.onclick = validation;
    

    


function validation() {

    for (i = 0; i < string.length; i++) {

        if (string.substring(i, i + 1).includes(input.value.toLowerCase())) {

            console.log(input.value);
            returnWord.textContent = returnWord.textContent.replaceAt(i, input.value.toLowerCase());
        }
    }

    if (string.includes(returnWord.textContent)){
        gameStatus.textContent = "Felicitaciones, has ganado!!";
    }

    if (!string.includes(input.value.toLowerCase())) {

        returnWrongWords.textContent = returnWrongWords.textContent + input.value.toLowerCase() + " - ";
        bodyPart(mistakes);
        mistakes = mistakes + 1;
    }

    if (mistakes >= 6) {
        
        gameStatus.textContent = "GAME OVER!";
        wordRandom.textContent = "La palabra era " + string;
    }

    input.value = "";
}



String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}


function linesWord(string){
   let lines = string;
  
    for (i=0; i<lines.length; i++){
    lines = lines.replaceAt(i,"_");
    }

   return lines;
}