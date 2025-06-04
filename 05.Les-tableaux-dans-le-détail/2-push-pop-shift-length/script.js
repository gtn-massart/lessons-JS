/* 
    Il existe une floppée de petites méthodes permettant de rajouter ou de supprimer un élément d'un tableau.
*/

/* 
    Array.prototype.pop()

    Cette méthode supprime le dernier élément d'un tableau.
*/

const numbers_1 = [1,2,3];
numbers_1.pop();

console.log(numbers_1);

/* 
    Array.prototype.shift()

    Celle-ci supprime le premier élément d'un tableau.
*/

const numbers_2 = [1,2,3];
numbers_2.shift();

console.log(numbers_2);


/* 
    Array.prototype.unshift(element1, element2, ...)

    Rajoute les arguments qu'on lui passe au début d'un tableau.
*/

const numbers_3= [1,2,3];
numbers_3.unshift(4);

console.log(numbers_3);


/* 
    Array.prototype.push(element1, element2, ...)

    Cette méthode rajoute les arguments qu'on lui passe à la fin d'un tableau.
*/

const numbers_4 = [1,2,3];
numbers_4.push(4);

console.log(numbers_4);



/* 
    La propriété length.

    La propriété length est utilisée dans de nombreux cas.
*/

// Connaître la longueur du tableau (nb d'éléments)
const numbers_5 = [1,2,3];

console.log(numbers_5.length);


// Pour sélectionner le dernier élément.
const numbers_6 = [1,2,3];

console.log(numbers_5[numbers_5.length - 1]);


// Raccourcir un tableau (peut servir à supprimer une portion venant de la droite)
const numbers_7 = [1,2,3];

numbers_7.length = 1;

console.log(numbers_7);


// suppresion de tous les éléments

const numbers_8 = [1,2,3];

numbers_8.length = 0;

console.log(numbers_8);