const emailInputValue = document.getElementById('email').value
const passwordInputValue = document.getElementById('senha').value
const entrarBtn = document.getElementById('login')
function checkLogin() {
    if (emailInputValue === 'tryber@teste.com' && passwordInputValue === '123456') {
        alert('Olá, Tryber!')
    } else {
        alert ('Email ou senha inválidos.')
    }
}
entrarBtn.addEventListener('click', checkLogin)