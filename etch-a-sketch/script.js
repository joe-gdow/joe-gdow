const container = document.querySelector('.grid-container'); 
const squareButton = document.getElementById('makeASquare');
const output = document.querySelector('.output');
const colorSquare = document.querySelectorAll('.colors>div');
const colorButton = document.querySelector('#addColor');
const inputId = document.querySelector('#colorInput').value;

let makeColor = function(color) { //fill the color pallete with colored squares
    
    if (color) {
        let newDiv = document.createElement
    }
    for (div of colorSquare) {
        div.style.background = div.className;
    }

}
makeColor();

colorButton.addEventListener('click', )//get input from field on button click



squareButton.addEventListener('click', function(){
    clearPage();
    let size = getValue();
    let i = 0;
    while (i < size*size) {
        addDiv();
        i++;
    }
    let converted = 480 / size;
    container.style.gridTemplateColumns = `repeat(${size}, ${converted}px)`;
    container.style.gridTemplateRows = `repeat(${size}, ${converted}px)`;
    let squareDiv = document.getElementsByClassName('square');
    let j = 0;
    while (j < squareDiv.length) {
        squareDiv[j].style.width = `${converted}px`;
        squareDiv[j].style.height = `${converted}px`;
        j++;
    }
    output.textContent = `canvas ${size}px high and ${size}px wide`;
});

function clearPage() {
    container.innerHTML = "";
}

function getValue() {
    value = document.getElementById('userInput').value;
    if (value > 100) {
        value = 100;
    }
    return value;
}

function addDiv() {
    let newDiv = document.createElement("div");
    newDiv.classList.add("square");
    container.appendChild(newDiv);
}

/* function setSize() {
    let gridSize = getValue();
    document.querySelector('.square').style.width = gridSize + 'px;';
    document.querySelector('.square').style.height = gridSize + 'px;';
} */

function printGrid() {
    clearPage();
    let size = getValue();
    let i = 0;
    while (i < size*size) {
        addDiv();
        i++;
    }
    container.style.gridTemplateColumns = 'repeat(' + size + ', ' + size + 'px);';
    //setSize();
}