
let customStringsArray = [];
let newWord = document.getElementById("new-word");
let buttonSave = document.getElementById("save");
buttonSave.addEventListener("click", function(){

    customStringsArray.push(newWord.value.toLowerCase());

    customStringsArray.forEach(function(element) {
        console.log(element);
    });
   
    localStorage.setItem("arrNewWords", JSON.stringify(customStringsArray));

});
