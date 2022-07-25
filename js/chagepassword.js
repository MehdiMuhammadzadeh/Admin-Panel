let username = document.forms['form']['username']
let password = document.forms['form']['password']
let password2 = document.forms['form']['password2']

let user__error = document.getElementById('user__error')
let pass__error = document.getElementById('pass__error')
let repass__error = document.getElementById('repass__error')
let error_message = document.getElementById('error_message')

username.addEventListener('textInput', user_verify)
password.addEventListener('textInput', pass_verify)
password2.addEventListener('textInput', repass_verify)  


function validate() {
    if (username.value.length < 5) {
        username.style.border = '1px solid red';
        user__error.style.display = 'block';
        username.focus()
        return false;
    }

    if (password.value.length < 6) {
        password.style.border = '1px solid red';
        pass__error.style.display = 'block';
        password.focus()
        return false;
    }

    if (password2.value.length < 6) {
        password2.style.border = '1px solid red';
        repass__error.style.display = 'block';
        password2.focus()
        return false;
    }

    if(password !== password2) {
        error_message.style.display = 'block';
        return true
    }
}


function user_verify() {
    if (username.value.length >= 5) {
        username.style.border = '1px solid #a9a9a9';
        user__error.style.display = 'none'
        return true;
    }
}


function pass_verify() {
    if (password.value.length >= 6) {
        password.style.border = '1px solid #a9a9a9';
        pass__error.style.display = 'none'
        return true;
    }
}

function repass_verify() {
    if (password2.value.length >= 6) {
        password2.style.border = '1px solid #a9a9a9';
        repass__error.style.display = 'none'
        return true;
    }
}