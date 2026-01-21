const buttonElem = document.querySelector('.btn');
const inputElem = document.querySelector('.js-input');
const copyIcon = document.querySelector('.fa-copy');
const alertmsg = document.querySelector('.js-alert');
buttonElem.addEventListener('click', () => {
    createPassword();
});
copyIcon.addEventListener('click', () => {
    inputElem.select();
    inputElem.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputElem.value);
    alertmsg.innerText = `${inputElem.value} Copied!`;
    alertmsg.classList.remove('active');
    setTimeout(() => {
        alertmsg.classList.add('active');
    }, 2000);
});
function createPassword(){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-+";
    let password = "";
    for (let i = 0; i < 14; i++) {
        const random = Math.floor(Math.random() * chars.length);
        password+= chars.substring(random, random + 1);
    }
    inputElem.value = password;
}