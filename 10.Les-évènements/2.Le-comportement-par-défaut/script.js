/* 
    Certains éléments ont déjà des écouteurs d'évènement par défaut et vont donc avoir un comportement spécial quand on les déclenche.

    Les formulaires vont tenter d'envoyer les données vers une page.

    Les liens nous font nous déplacer au click.

    Parfois, on a envie de prévenir ces comportements par défaut, on utilisera alors EventObject.preventDefault().

    Testons tout ça...
*/

// const links = document.querySelectorAll('a');

// links.forEach(link => link.addEventListener('click', handleClick));

// function handleClick(e) {
//     e.preventDefault();
//     console.log('Tu ne bouges pas');
// }


const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit );

function handleSubmit(e) {
    e.preventDefault();
    console.log("Je n'envoie rien");
}