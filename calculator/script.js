const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const intDisplay = parseInt(display.innerHTML);
const operators = document.querySelectorAll('.op');
const calculator = document.querySelector('.calculator');
let num1;
let num2;
let op;

calculator.addEventListener('click', (e) => {
    if (parseInt(display.innerHTML) === 0) {
        display.innerHTML = '';
    }
    if (e.target.classList.contains('number')) display.innerHTML += e.target.innerHTML;
    if (e.target.classList.contains('op')) {
        num1 = display.innerHTML;
        op = e.target.innerHTML;
        display.innerHTML = num1 + op;
    }
    if (e.target.classList.contains('equals')) {
        let equation = Number(display.innerHTML);
        display.innerHTML = equation;
    }
})

/* function updateDisplay (num) {
    if (parseInt(display.innerHTML) === 0) {
}
for (let button of operators) {
    if (e.target.classList.contains('op')) {
        addEventListener('click', function(e) {
            let op = e.target.textContent;
            display.textContent =  op;
        })
    }
}

if (parseInt(display.innerHTML) === 0) {
    e.target.classList.contains('number') ? display.innerHTML = e.target.innerHTML : null;
    e.target.classList.contains('op') ? display.innerHTML = e.target.innerHTML : null;
}
else {
    e.target.classList.contains('number') ? display.innerHTML += e.target.innerHTML : null;
    e.target.classList.contains('op') ? display.innerHTML += e.target.innerHTML : null;
 } */