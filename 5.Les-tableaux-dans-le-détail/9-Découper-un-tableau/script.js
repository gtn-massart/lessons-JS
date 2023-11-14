/* 
    On a souvent envie de découper une partie d'un tableau en JavaScript.
    Il existe deux méthodes dont les noms peuvent porter à confusion : .slice() et .splice()
*/

/* 
    1. Array.prototype.splice(start, deleteCount, item1, item2, ...)

    Définition: Cette méthode supprime ou remplace une partie d'un tableau.

    Paramètres : départ, nombre d'éléments à supprimer, élément(s) à rajouter.

    Valeur de retour : Un tableau contenant les éléments supprimés.
*/

const fruits  = ["🍓","🍑","🍇","🍊","🍒"];

deletedElements = fruits.splice(0,2,"🍒");

console.log(fruits);
console.log(deletedElements);

/* 
    1. Array.prototype.slice(start,end)

    !!! start est inclu, end est non-inclu !!!

    Définition: Retourne une copie superficielle d'une partie d'un tableau.

    Valeur de retour : Un nouveau tableau représentant la portion extraite.
*/

const fruits2  = ["🍓","🍑","🍇","🍊","🍒"];

console.log(fruits2.slice(1,3));