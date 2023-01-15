const inputEmail = document.getElementById('email');
const validatee = document.getElementById('validate');
const emailField = document.querySelector('.email-field');
const errorTwo = document.getElementById('Error2')

const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



validatee.addEventListener('click',() => {
if(!inputEmail.value.match(pattern)){
    return errorTwo.textContent = 'Mumu put a valid email address';
}else{
    return errorTwo.textContent = ''
}
});