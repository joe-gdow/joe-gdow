const form = document.querySelector("#signupform");
const pwnomatchmsg = document.querySelector('#pwnomatchmsg');
const conf = document.querySelector('#confirm');

function pwCheck(e) {
  e.preventDefault();
  const pw1 = document.querySelector("#pw");
  const pw2 = document.querySelector("#confirm");
  if (pw1.value===pw2.value) {
    pw1.classList.remove('error');
    pw2.classList.remove('error');
    pwnomatchmsg.style.display = 'none';
  }
  else {
    pw1.classList.add('error');
    pw2.classList.add('error');
    pwnomatchmsg.style.display = 'initial';
  }
}

form.addEventListener('submit', pwCheck, false);
conf.addEventListener('keyup', pwCheck, false);