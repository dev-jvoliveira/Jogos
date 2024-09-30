const input = document.querySelector('.login__input');
const botton = document.querySelector('.login__button');
const form = document.querySelector('.login-form')

const validateInput = ({ target }) =>{
    if (target.value.length > 2){
        botton.removeAttribute('disabled');
        return;
    }

    botton.setAttribute('disabled', '')   
}

const handlesubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location.href = 'pages/game.html'
}

input.addEventListener('input', validateInput)
form.addEventListener('submit', handlesubmit)
