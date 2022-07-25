let code = document.forms['form']['number']

let code__error = document.getElementById('code__error')

code.addEventListener('textInput', code__verify)

function validate() {
    if (code.value.length < 6) {
        code.style.border = '1px solid red';
        code__error.style.display = 'block'
        code.focus();
        return false;
    }
}


function code__verify() {
    if (code.value.length >= 6) {
        code.style.border = '1px solid #a9a9a9';
        code__error.style.display = 'none';
        return true
    }
}