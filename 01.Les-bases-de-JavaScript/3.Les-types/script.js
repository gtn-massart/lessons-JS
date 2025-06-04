/* 
    En JavaScript, il existe plusieurs types permettant de manipuler des valeurs avec des comportements et des caractéristiques différents.
*/

/* 
    NUMBER : Le type nombre représente un nombre entier ou à virgule entre -9007199254740991 et 9007199254740991.
    Au-delà de ces nombres, les calculs ne sont plus fiables et nous pouvons utiliser un nouveau type bigInt.
*/
let age = 40;
console.log(typeof age); 
console.log(age);


/*  
    STRING : Le type représentant des chaînes de caractères.
    On peut utiliser la longueur de la chaîne grâce à length.
    On peut accéder à une lettre avec la bracket notation.
*/
let userName = "Gaëtan";
console.log(typeof userName);
console.log(userName);
console.log(userName.length);
console.log(userName[2]);


/* 
    BOOLEAN : Un type représentant une valeur vraie(true) ou fausse(false).
*/
let isAdult = false;
console.log(typeof isAdult);
console.log(isAdult);


/* 
    UNDEFINED : Le type représentant une valeur non-définie, typiquement quand une variable n'a pas encore reçue de valeurs.
*/
let price;
console.log(typeof price);
console.log(price);


/* 
    NULL : Ce type réprésente une valeur qui n'existe pas, typiquement quand on essaye d'utliser une variable non créée. 
*/



/* 
    BIGINT : Ce type représente des nombres très grands.
    Il a été rajouté récemment pour palier à des problèmes assez rares.
*/
let numberOfStars = 9999999999999999n;
console.log(typeof numberOfStars);


/* 
    SYMBOL : Un symbole est un identifiant unique qui permet d’éviter des collisions entre des valeurs similaires.
*/



/* 
    OBJECT : Un objet est un container de propriétés représentant des valeurs.
    On appelle une propriété "méthode" lorsque sa valeur est une fonction.
    C'est un type très important, qu'il faut maîtriser et qui représente une grande partie du fonctionnement du langage JavaScript.
*/
const norway = {
    // propriété: valeur
    name: "Norway",
    capital: "Oslo",
    population: 5400000,

    // méthode
    addition: function(a, b) {
        return a + b
    }
}

console.log(norway);
console.log(norway.name);
console.log(norway.capital);
console.log(norway.population);

console.log(norway.addition(7, 3));

/* 
    FUNCTION : Les fonctions sont des objets! Même si typeof nous donne le "type" function, ce sont bien des objets éxécutables. 
*/
function getSquare(a) { // (a) est un paramètre
    return a * a;
}

console.log(typeof getSquare);
console.log(getSquare(5)); // (5) est un argument



/* 
    ARRAY : Les tableaux sont également des objets!
*/
const salaries = [1580, 5000, 1800 , 3658, 1964, 4685];
                // 0      1     2      3     4     5

console.log(typeof salaries);
console.log(salaries[3]);

// Les tableaux ont des méthodes
salaries.forEach(salary => console.log(salary)); // Fonction flèchée (Ici, affiche la valeur pour chaque salaire)

// On accède aux élément d'un tableau grâce à l'indice de ce dernier qui commence à 0
// C'est à dire que le premier élément est à l'indice 0.
