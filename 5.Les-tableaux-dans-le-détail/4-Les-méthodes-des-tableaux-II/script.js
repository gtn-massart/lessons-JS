/* 
    1. Array.prototype.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

    Définition: Accumule chaque valeur d'un tableau à une valeur initiale.
    Si une valeur initiale n'est pas fournie, le premier élément du tableau est utilisé.
    
    Exemples : Permet de faire des moyennes, d'accumuler des valeurs et de résoudre toutes sortes de problèmes.


    Valeur de retour: l'accumulateur après toutes les opérations.

*/

const marks = [18,5,17,12,20,16,14]

// ↓ somme du tableau que l'on divise par le nombre d'éléments pour avoir la moyenne.
const sum = marks.reduce((acc, mark) => acc + mark, 0) / marks.length;
console.log(sum);


/* 
    2. Array.prototype.sort(callback(firstEl, secondEl))

    Définition: Permet de trier des chaînes de caractères, des nombres, des objets, etc...

    Valeur de retour : Le même tableau trié.

    Utilise un algo d'insertion implémenté différemment suivant chaque navigateur.

    Exemple : 

    base
    [10,4,12]

    étape 1
    |partie triée|
    [|4,10|,12]

    étape 2
    Si 12 est plus grand que 10 il est à sa place, fin du tri.
    [|4,10,12|]
*/

const letters = ["z","b","a","d","e"];

letters.sort(); // avec des lettres, sort() va trier en fonction de leurs valeurs en code UTF-16
console.log(letters);

// --------------------------------------------------------------

const numbers = [10,55,2,250,500,85]

// ↓ trier par ordre croissant
numbers.sort((a, b) => a - b);
console.log(numbers);

// ↓ trier par ordre décroissant
numbers.sort((a, b) => b - a);
console.log(numbers);

// On peut aussi trier des tableaux d'objets
const store = [
    {
        item: "Cahier",
        price: 20
    },
    {
        item: "Sac",
        price: 60
    },
    {
        item: "Stylo",
        price: 2
    },
]

// ↓ trier en fonction du prix
store.sort((a, b) => a.price - b.price);
console.log(store);

