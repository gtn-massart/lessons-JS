/*
    Prévenez le comportement par défaut du formulaire afin de récupérer les données écrites dans les inputs et les afficher dans les paragraphes correspondants.
*/

const form = document.querySelector('form');
const inputs = document.querySelectorAll('form input')
const firstnameText = document.querySelector('.firstname');
const lastnameText = document.querySelector('.lastname');

console.log(inputs[1]);

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    firstnameText.innerText = `${firstnameText.innerText} ${inputs[0].value}`;
    lastnameText.innerText = `${lastnameText.innerText} ${inputs[1].value}`;

    form.reset();
}