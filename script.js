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
const agreementState = document.getElementById('agreement');
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

// Requisito 20
const textArea = document.getElementById('textarea');
const contador = document.getElementById('counter');

function countTextArea() {
  contador.value = 500 - textArea.textLength;
  contador.innerText = 500 - textArea.textLength;
}
countTextArea();
textArea.addEventListener('keyup', countTextArea);

// Requisito 21
function sendForm(e) {
  e.preventDefault();
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const familia = document.querySelector('.family:checked').value;
  const casa = document.getElementById('house').value;
  const materias = document.querySelectorAll('.subject:checked');
  const avaliacao = document.querySelector('.rate:checked').value;
  const observacao = document.getElementById('textarea').value;
  let materiasSelection = [];
  for (let i = 0; i < materias.length; i += 1) {
    materiasSelection.push(materias[i].value);
  }
  materiasSelection = materiasSelection.join(', ');
  const theForm = document.getElementById('evaluation-form');
  theForm.innerHTML = `<p>Nome: ${nome} ${sobrenome}</p> <p>Email: ${email}</p> <p>Casa: ${casa}</p>
  <p>Família: ${familia}</p> <p>Matérias: ${materiasSelection}</p> <p>Avaliação: ${avaliacao}</p>
  <p>Observações: ${observacao}</p>`;
}
enviarBtn.addEventListener('click', sendForm);
