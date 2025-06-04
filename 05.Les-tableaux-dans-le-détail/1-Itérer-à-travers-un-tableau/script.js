/* 
    1. Itérer à travers un tableau.

    Vouloir itérer à travers un tableau est très courant et il existe plusieurs moyens d'y arriver.

    La boucle for. // méthode classique, un peu datée mais très efficace
    La boucle for...of. // méthode plus moderne (2015+)
    Les méthodes des tableaux (forEach, map, etc...). // méthodes classiques et pratiques

    On entend souvent certaines personnes dirent que les boucles sont plus performantes que .forEach(), 
    c'est vrai mais seulement notable quand on effectue des milliers d'opérations, ce qui est rarement le cas, mais pas impossible.

*/

const animals = ["cat", "dog", "elephant", "lion", "peacock"]

/* Avec une boucle for */ 

for( let i = 0; i< animals.length; i++) {
    console.log(animals[i]);
}

/* Avec une boucle for...of */

for(const animal of animals) {
    console.log(animal);
}

//console.log(animals);

/* Avec .forEach */

animals.forEach((animal, index, array) => console.log(animal, index, array));

// On peut également ne demander que les animaux

animals.forEach(animal => console.log(animal));