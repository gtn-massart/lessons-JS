/* 
    Lorsqu'un évènement est déclenché sur un élément du DOM, cet évènement en question va remonter l'arbre du DOM jusqu'à l'objet window.
    
    On appelle ça le "bubbling" ou bouillonnement en Français.

    Sur son passage, il va exécuter tous les écouteurs d'évènement qui écoutent cet évènement en question.
    
    S'il déclenche un autre écouteur d'évènement sur son passage, l'objet d'évènement qui lui sera passé représentera la cible qui a reçu cet évènement.
*/


const container1 = document.querySelector('.container-1');
const container2 = document.querySelector('.container-2');
const container3 = document.querySelector('.container-3');


container1.addEventListener('click', handleClick1);

function handleClick1(e) {
    console.log(e.target, 'CONTAINER 1');
}



container2.addEventListener('click', handleClick2);

function handleClick2(e) {
    console.log(e.target, 'CONTAINER 2');
}



container3.addEventListener('click', handleClick3);

function handleClick3(e) {
    e.stopPropagation();
    console.log(e.target, 'CONTAINER 3');
}