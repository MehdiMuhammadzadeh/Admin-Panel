let username = document.forms['form']['username']
let password = document.forms['form']['password']

let user__error = document.getElementById('user__error')
let pass__error = document.getElementById('pass__error')

username.addEventListener('textInput', username_verify)
password.addEventListener('textInput', pass_verify)




function validate() {
    if (username.value.length < 9) {
        username.style.border = '1px solid red';
        user__error.style.display = 'block';
        username.focus();
        return false
    }

    if (password.value.length < 6) {
        password.style.border = '1px solid red';
        pass__error.style.display = 'block';
        password.focus();
        return false
    }
}


function username_verify() {
    if(username.value.length >= 8) {
        username.style.border = '1px solid #a9a9a9';
        user__error.style.display = 'none';
        return true;
    }
}

function pass_verify() {
    if(password.value.length >= 6) {
        password.style.border = '1px solid #a9a9a9';
        pass__error.style.display = 'none';
        return true;
    }
}