/* 
    1. L'erreur classique de référence.

    L'erreur classique est d'utiliser l'opérateur "=" pour copier une valeur de référence.
    Voyons un exemple avec un tableau;

*/

// const numbers = [1,2,3];

// const numbersCopy = numbers;
// console.log(numbersCopy);

// numbers.push(4);
// console.log(numbersCopy);



/* 
    2. Alors comment copier ?

    Il existe plusieurs manière de faire, avec le spread operator [...], {...}, Object.assign(), Array.from(), .concat()

    Néanmoins, toutes ces façons de faire vont créer une copie superficielle, c'est à dire que seulement les valeurs primitives seront copiées, les tableaux ou objets imbriqués seront toujours référencés.

    Vous sentez le bug arriver ?
*/

// const letters = ["a","b","c", {name:"Toto"}];

// const lettersCopy = [...letters];
// lettersCopy[3] = {...letters[3]};

// console.log(lettersCopy);

// letters[3].name = "Jim";
// console.log(letters);
// console.log(lettersCopy);




/* 
    3. Faire une copie profonde, deep copy.


    A. On peut faire une copie profonde en copiant chaque niveau d'un objet "à la main".

    B. Seconde manière de faire, utiliser la méthode structuredClone() qui permet de deep-clone facilement.
    Malheuresement, cette méthode ne permet pas de cloner des méthodes.
*/


// Superficiel (Shalow)
const shalowObj = {
    userName: "Gaëtan",
    age: 40
}

// ↓ copie superficielle à utiliser si on a que des primitives dans l'objet
const objCopy = {
    ...shalowObj
}
console.log(objCopy);




// Profonde (deep)
const deepObj = {
    collection: {
        a: 1,
        b: 2,
        c: 3,
    },
}

// ↓ copie profonde à utiliser si on a des objets imbriqués
const deepCopy = {
    collection: {...deepObj.collection}
}
console.log(deepCopy);

// ↓ On peut vérifier en modifiant deepObj et voir si ça affecte deepCopy
deepObj.collection.a = "Toto";

console.log(deepObj);
console.log(deepCopy);