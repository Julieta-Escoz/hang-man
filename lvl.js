
let stringsArray = ["armario", "naranja", "domingo", "granizo", "lampara", "palanca"];


let confirmation = document.querySelector(".confirm");

let selectLvL = document.getElementById("lvl-option");



confirmation.addEventListener("click", function() {

    switch (selectLvL.value) {
        case "easy":
            
            stringsArray = ["gusano", "puerta", "pomelo", "figura", "martes", "animal", "tomate", "diente"];
            break;

        case "normal":
            
            stringsArray = ["armario", "naranja", "domingo", "granizo", "lampara", "palanca"];
            break;

        case "hard":
            
            stringsArray = ["frutilla","amarillo", "etiqueta", "elefante", "langosta", "almohada"];
            break;

        case "custom":
            
            stringsArray = JSON.parse(localStorage.getItem("arrNewWords"));
            if (stringsArray.length === 0) {
                alert("Debe ingresar palabras para poder jugar en este modo");
            }

    }

    
    localStorage.setItem("strArr", JSON.stringify(stringsArray));
    console.log(stringsArray);

});


