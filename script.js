var colors = [];
var hledanaBarva = document.getElementById("hledanaBarva");
var result = document.getElementById("result");
var header = document.getElementById("header");
var playAgain = document.getElementById("play-again");
var diff = 3;
var colorBox = document.getElementById("barvaBox");
var footer = document.getElementsByClassName("tlacitko");
var list; 

var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");

var pickedColor;

function createBarvy(x) {

        for (i = 0; i < x; i++) {

            var item = document.createElement("div");
            item.classList.add("color");
            colorBox.appendChild(item);


        }
        list = document.getElementsByClassName("color");
        
    }



easy.addEventListener("click", function () {
    colors = [];
    colorBox.innerHTML = "";
    diff = 3;
    createBarvy(diff);
    generateColor();
    setColors();
    pickedColor = getRandomColor();
    checkColor();

})
medium.addEventListener("click", function () {
    colors = [];
    colorBox.innerHTML = "";
    diff = 6;
    createBarvy(diff);
    generateColor();
    setColors();
    pickedColor = getRandomColor();
    checkColor();
})

hard.addEventListener("click", function () {
    colors = [];
    colorBox.innerHTML = "";
    diff = 9;
    createBarvy(diff);
    generateColor();
    setColors();
    pickedColor = getRandomColor();
    checkColor();
})






function generateColor() {
    var i;

    for (i = 0; i < diff; i++) {

        var hexR = Math.floor(Math.random() * 256).toString(16);
        var hexG = Math.floor(Math.random() * 256).toString(16);
        var hexB = Math.floor(Math.random() * 256).toString(16);

        if (hexR.length === 1) { hexR = "0" + hexR; }
        if (hexG.length === 1) { hexG = "0" + hexG; }
        if (hexB.length === 1) { hexB = "0" + hexB; }

        colors.push(
            "#" + hexR + hexG + hexB
        );
    }
}



function setColors() {
    var i;

    
    for (i = 0; i < diff; i++) {
        list[i].style.backgroundColor = colors[i];
        list[i].setAttribute("data-color", colors[i]);
    }
}


function getRandomColor() {
    var randomColor = colors[Math.floor(Math.random() * diff)];
    hledanaBarva.innerText = randomColor;
    return randomColor;
}



function checkColor() {
    var i, j;

    for (i = 0; i < diff; i++) {
        list[i].onclick = function () {
            console.log("moreee");
            var getColor = this.getAttribute("data-color");
            if (getColor == pickedColor) {

                for (j = 0; j < diff; j++) {
                    list[j].style.opacity = "1";
                    list[j].style.backgroundColor = pickedColor;
                }
                playAgain.innerHTML = "Play Again";
                header.style.background = pickedColor;
                footer[0].style.background = pickedColor;
                result.innerText = "Correct";
            } else {
                result.innerText = "Wrong";
                this.classList.add("fade");
            }
        }
    }
}

playAgain.onclick = function () {
    reset();
}


function reset() {
    window.location = location.href;
}




