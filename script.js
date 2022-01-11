// Requisito 3
const entrarBtn = document.getElementById('login');
function checkLogin() {
const emailInputValue = document.getElementById('email').value;
const passwordInputValue = document.getElementById('senha').value;
  if (emailInputValue === 'tryber@teste.com' && passwordInputValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
entrarBtn.addEventListener('click', checkLogin);

// Requisito 18
const enviarBtn = document.getElementById('submit-btn');
const agreementCheck = document.getElementById('agreement');
function enviarBtnState() {
  const agreementCheckValue = document.getElementById('agreement').checked;
  if (agreementCheckValue === true) {
    enviarBtn.disabled = false;
  }
  if (agreementCheckValue === false) {
    enviarBtn.disabled = true;
  }
}
agreementCheck.addEventListener('click', enviarBtnState);
// Requisito 20
const textArea = document.getElementById('textarea');
const contador = document.getElementById('counter');

function countTextArea() {
  contador.value = 500 - textArea.textLength;
  contador.innerText = 500 - textArea.textLength;
}
countTextArea();
textArea.addEventListener('keyup', countTextArea);