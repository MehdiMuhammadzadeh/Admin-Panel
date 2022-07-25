let email = document.forms['form']['email']

let email_error =document.getElementById('email__error')

email.addEventListener('textInput', email_verify)


function validate() {
    if(email.value.length < 9) {
        email.style.border = '1px solid red';
        email_error.style.display = 'block';
        email.focus();
        return false;
    }
}


function email_verify() {
    if(email.value.length >= 8) {
        email.style.border = '1px solid #a9a9a9';
        email_error.style.display = 'none'
        return true
    }
}