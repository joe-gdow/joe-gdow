const clickable = document.querySelectorAll('.clickable');
const display = document.querySelector('.display');
console.log(clickable);
clickable.forEach(button => addEventListener('click', function(e) { display.innerText = e.target.innerText; }));
