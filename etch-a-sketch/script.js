const container = document.querySelector('.grid-container'); 
const squareButton = document.getElementById('makeASquare');
const output = document.querySelector('.output');
const colorSquare = document.querySelectorAll('.colors>div');
const colorButton = document.querySelector('#addColor');
const grid = document.querySelectorAll('.grid-container');
const colorsContainer = document.querySelector('.colors');
const clear = document.querySelector('#clear');
const filled = document.querySelector('.filled');
const gridInput = document.querySelector('#userInput');
const colorInput = document.querySelector('#colorInput');
let currentColor = 'black';

function makeColor(color) { //fill the color pallete with colored squares
    if (color) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', color);
        newDiv.classList.add('color');
        colorsContainer.appendChild(newDiv);
        newDiv.style.backgroundColor = color;
    }
    for (div of colorSquare) {
        div.style.background = div.id;
    }
}
function makeSquares(size) { //populate the grid with the users choice
    let i = 0;
    while (i < size*size) {
        addDiv();
        i++;
    }
    let converted = 480 / size;
    container.style.gridTemplateColumns = `repeat(${size}, ${converted}px)`;
    container.style.gridTemplateRows = `repeat(${size}, ${converted}px)`;
    let squareDiv = document.getElementsByClassName('square');
    console.log(squareDiv)
    let j = 0;
    while (j < squareDiv.length) {
        squareDiv[j].style.width = `${converted}px`;
        squareDiv[j].style.height = `${converted}px`;
        j++;
    }
    output.textContent = `canvas ${size}px high and ${size}px wide`;
}
function getValue() {  //pull grid size value from user input
    value = document.getElementById('userInput').value;
    if (value > 100) {
        value = 100;
    }
    return value;
}
function addDiv() {  //adds divs for grid
    let newDiv = document.createElement("div");
    newDiv.classList.add("square");
    container.appendChild(newDiv);
}
function clearPage() { // clears the page
    container.innerHTML = "";
    gridInput.value = '';
    colorInput.value = '';
    //makeSquares(16);
}

makeColor();
makeSquares(50);

document.addEventListener('click', function(e){
    if (e.target.id === 'makeASquare') {
        let size = getValue();
        clearPage();
        makeSquares(size);
    }
    if (e.target.id === 'addColor') {
        let colorName = document.querySelector('#colorInput').value;
        makeColor(colorName);

    }
    if (e.target.id === 'clear') {
        clearPage();
        makeSquares(50);
    }
    if (e.target.classList.contains('color')) {
        currentColor = e.target.id;
        console.log(currentColor);
    }
});
document.addEventListener('mousedown', function(e) {
    if (e.target.classList.contains('square')) {
        e.target.style.background = currentColor;
    }
})
gridInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        let size = getValue();
        clearPage();
        makeSquares(size);
        gridInput.value = '';
    }
})
colorInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        let colorName = document.querySelector('#colorInput').value;
        makeColor(colorName);
        colorInput.value = '';
    }
})

// figure out how to click and hold to drag colors