/* 
    1. Les fonctions fléchées.

    Apparues en 2015, elles sont plus concises et pratiques dans certains cas, mais moins lisibles dans d'autres.
    Elles ont également quelques différences de fonctionnement avec les fonctions classiques.
    Il ne faut pas les opposer, mais les utiliser judicieusement, en fonction de leurs caractéristiques.

*/

// ↓ fonction classique
function getSquareArea1(side) {
    return side * side
}
console.log(getSquareArea1(4));


// ↓ fonction flèchée
const getSquareArea2 = (side) => side * side; // le return est implicite
console.log(getSquareArea2(6));



// Exemples d'utilisation

const myArray = [1, 2, 3, 4];

// ↓ fonction classique pour itérer dans un tableau
myArray.forEach(function(item){
    console.log(item);
})

// ↓ fonction flèchée
myArray.forEach(item => console.log(item));
