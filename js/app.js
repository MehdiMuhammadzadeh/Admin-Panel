// Loading Part Codes
$('.section').hide();

setTimeout(function () {
    $('.section').fadeIn();
    $('.loader').fadeOut();
}, 1000)

// Backdrop and modal codes

let backdrop = document.querySelector('.backdrop')
let inbox = document.querySelectorAll('.messages')
let modalBox = document.querySelector('.modal-box')
let closeModalBtn = document.querySelector('.return__btn')

for (let i = 0; i < inbox.length; i++) {
    inbox[i].addEventListener('click', () => {
        backdrop.style.display = 'block';
        modalBox.style.display = 'block';
    })
}
// This is how it can be 


backdrop.addEventListener('click', closeModal)
modalBox.addEventListener('click', closeModal)



function closeModal() {
    backdrop.style.display = 'none'
    modalBox.style.display = 'none'
}