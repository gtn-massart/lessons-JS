/* 
    1. Ternaire est l'immobilier.

    Loggez l'expression ternaire suivante dans la console.

    Si squareFeet est strictement supérieur à 70, retournez "Large", sinon retournez "Small/Medium".
*/

const squareFeet = 100;
console.log(squareFeet > 70 ? "Large" : "Small/Medium");


/* 
    2. Panique à la librairie.

    C'est la crise du papier, il faut augmenter de 1€ le prix de tous les livres(objets) de la bibliothèque(library).
    Utilisez une boucle for ou for...of pour ça.
*/
const library = [
  {
    name: "The Picture of Dorian Gray",
    price: 7
  },
  {
    name: "Harry Potter",
    price: 10
  },
  {
    name: "The old man and the sea",
    price: 5
  }
]
// for
// for(let i = 0; i < library.length; i++) {
//   library[i].price++;
// }
// console.log(library);

// for...of
for(const book of library){
  book.price++;
}
console.log(library);