const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.op');
let num1;
let op;
let num2;


numbers.forEach(button => addEventListener('click', function(e) {
    if (e.target.classList.contains('number')) {
        num1 = e.target.textContent;
        display.textContent = num1;
    }
}));

operators.forEach(button => addEventListener('click', function(e) {
    if (e.target.classList.contains('op')) {
        op = e.target.textContent;
        display.textContent += op;
    }
}));
