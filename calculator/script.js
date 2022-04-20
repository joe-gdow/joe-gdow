const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const intDisplay = parseInt(display.innerHTML);
const operators = document.querySelectorAll('.op');
const calculator = document.querySelector('.calculator');
const clickable = document.querySelectorAll('.clickable');
const point = document.querySelector('#point');
let num1 = null;
let num2 = null;
let op = null;
let opRegEx = /[\*\/\+\-]/;

// object that defines operator functions, accepts two number inputs and returns the result
const mather = { 
    '+': function(x,y) {return x + y},
    '-': function(x,y) {return x - y},
    '*': function(x,y) {return x * y},
    '/': function(x,y) {return x / y},
}

//button functions
function clear() {
    display.innerHTML = '0';
    op = null;
    num1 = null;
    num2 = null;
    point.classList.add('clickable');
}
function setPoint() {
    point.classList.add('clickable');
}
function equals() {
    let splitDisp = display.innerHTML.split(op);
    display.innerHTML = mather[op](Number(splitDisp[0]), Number(splitDisp[1]));
    op = null;
}
function addToDisplay(target) {
    if (display.innerHTML === '0') {
        display.innerHTML = target;
    }
    else { display.innerHTML += target; }
} 
//click event handler
calculator.addEventListener('click', (e) => {
    if (e.target.id === 'clear') {clear()};
    if (e.target.id === 'equals')  {
        equals();
    }
    if ((e.target.id === 'point') && (e.target.classList.contains('clickable'))) {
        display.innerHTML += e.target.innerHTML;
        e.target.classList.remove('clickable');
    }
    if (e.target.classList.contains('number')) {
        addToDisplay(e.target.innerHTML);
    }
    if (e.target.classList.contains('op')) {
        if (!op) {
            op = e.target.innerHTML;
            display.innerHTML += op;
            setPoint();
        }
        else {
            equals();
            op = e.target.innerHTML;
            display.innerHTML += op;
            setPoint();
        }
    }
});