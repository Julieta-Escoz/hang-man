var screen = document.querySelector(".hangman");
var brush = screen.getContext("2d");

brush.fillStyle = "lightYellow";
brush.fillRect(0, 0, 400, 500);
hang();


function clearScreen(){
brush.fillStyle = "lightYellow";
brush.fillRect(0, 0, 400, 500);
hang();
}


function bodyPart(mistakes) {
    switch (mistakes) {
        case 0:
            head();
            break;
        case 1:
            torso();
            break;
        case 2:
            rightArm();
            break;
        case 3:
            leftArm();
            break;
        case 4:
            rightLeg();
            break;
        case 5:
            leftLeg();
            face();
    }
}



function hang() {
    brush.fillStyle = "black";
    brush.lineWidth = 5;
    brush.beginPath();
    brush.moveTo(47, 40);
    brush.lineTo(200, 40);
    brush.lineTo(200, 75);
    brush.moveTo(50, 40);
    brush.lineTo(52, 450);
    brush.moveTo(20, 450);
    brush.lineTo(350, 450);
    brush.closePath();
    brush.stroke();

}

function rightLeg() {
    brush.fillStyle = "black";
    brush.lineWidth = 5;
    brush.beginPath();
    brush.moveTo(200, 310);
    brush.lineTo(130, 370);
    brush.closePath();
    brush.stroke();
}

function leftLeg() {
    brush.fillStyle = "black";
    brush.lineWidth = 5;
    brush.beginPath();
    brush.moveTo(200, 310);
    brush.lineTo(280, 370);
    brush.closePath();
    brush.stroke();
}

function rightArm() {
    brush.fillStyle = "black";
    brush.fillRect(130, 180, 70, 5);
}

function leftArm() {
    brush.fillStyle = "black";
    brush.fillRect(198, 180, 70, 5);
}

function torso() {
    brush.fillStyle = "black";
    brush.fillRect(198, 160, 5, 150);
}

function head() {
    circle(200, 120, 40, "black");
    circle(200, 120, 38, "#FFCBC1");
}

function circle(x, y, radius, color) {
    brush.fillStyle = color;
    brush.beginPath();
    brush.arc(x, y, radius, 0, 2 * Math.PI);
    brush.fill();
}

function face() {
    brush.fillStyle = "black";
    brush.lineWidth = 2;
    brush.beginPath();
    brush.moveTo(180, 100);
    brush.lineTo(190, 120);
    brush.closePath();
    
    
    brush.moveTo(190, 100);
    brush.lineTo(180, 120);
    brush.closePath();
    
    
    brush.moveTo(210, 100);
    brush.lineTo(220, 120);
    brush.closePath();
    
    
    brush.moveTo(220, 100);
    brush.lineTo(210, 120);
    brush.closePath();
   

    brush.moveTo(175, 135);
    brush.lineTo(188, 140);
    brush.closePath();
    brush.moveTo(188,140);
    brush.lineTo(198, 135);
    brush.closePath();
    brush.moveTo(198, 135);
    brush.lineTo(208, 140);
    brush.closePath();
    brush.moveTo(208,140);
    brush.lineTo(219,135);
    
    brush.closePath();
    brush.stroke();

}