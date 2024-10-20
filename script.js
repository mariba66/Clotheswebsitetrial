// script.js
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert(`${button.previousElementSibling.innerText} imeongezwa kwenye gari la ununuzi!`); // "added to cart!"
    });
});
