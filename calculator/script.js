const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const intDisplay = parseInt(display.innerHTML);
const operators = document.querySelectorAll('.op');
const calculator = document.querySelector('.calculator');
let num1;
let num2;
let op;

const mather = {
    '+': function(x,y) {return x + y},
    '-': function(x,y) {return x - y},
    '*': function(x,y) {return x * y},
    '/': function(x,y) {return x / y},
}

calculator.addEventListener('click', (e) => {
    if (e.target.classList.contains('number')) {
        e.target.style.boxShadow = '2px 2px black inset';
        display.innerHTML += e.target.innerHTML;
    } 
    if (e.target.classList.contains('op')) {
        num1 = Number(display.innerHTML);
        console.log(num1);
        op = e.target.innerHTML;
        display.innerHTML = num1 + op;
    }
    if (e.target.classList.contains('equals')) {
        let num2 = parseInt(display.innerHTML.split(/[\*\/\+\-]/)[1]);//this regex searches for an operator
        console.log('the operator is ' + op);
        console.log('num2 is ' + num2);
        display.innerHTML = mather[op](num1, num2);//figure out a way to take the operator out of the display string
    }
    if (e.target.id === 'clear') {display.innerHTML = '0'}
})