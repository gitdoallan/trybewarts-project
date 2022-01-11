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
const agreementState = document.getElementById('agreement');
const enviarBtn = document.getElementById('submit-btn');
function enviarBtnState() {
  const agreementCheckValue = document.getElementById('agreement').checked;
  if (agreementCheckValue === true) {
    enviarBtn.disabled = false;
  }
  if (agreementCheckValue === false) {
    enviarBtn.disabled = true;
  }
}
agreementState.addEventListener('click', enviarBtnState);