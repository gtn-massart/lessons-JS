/* 
    1. Les fonctions.
    
    Les fonctions permettent d'executer du code et de retourner une valeur.
    On peut leur passer des arguments qui correspondent aux paramètres de la fonction.
    Ces paramètres sont des variables locales, utilisables dans le corps de cette fonction.
*/

/* 
  Une fonction (classique) est composée: 
  - du mot clé function
  - d'un nom
  - de paramètres (optionnel)
  - d'un return (optionnel)

  On execute une fonction en utilisant son nom + ()
  Ex : getResults()
*/

function addition(a , b) {
    return a + b;
}
console.log(addition(5 , 5));


// Les fonctions sont des objets, même si typeof retourne "function"

// On appelle les functions des "first class objects", car on peut les exécuter.
console.log(typeof addition);

/* 
    2. Nommer une fonction.

    Une fonction doit avoir un nom explicite, évitez les noms trop courts a(), z(), ie(), mo() ou pas assez explicite, comme user() game() page().
    Préférez getUser() ou isUser(), setGame() ou startGame(), getPage() ou readPage(), etc ...

    Utilisez des verbes+XXX() comme get,is,read,are,has...
*/

/* 
    Voici quelques exemples de débuts de nom communs utiles.
*/
    // "get...()"       –  Retourne une valeur ex : getWeather()
    // "is...()"        -  Retourne une valeur booléenne true ou false ex : isAuthenticated()
    // "calc...()"      –  Effectue un calcul.
    // "create...()"    –  Crée quelque chose, ex : createListElement(),
    // "check...()"     –  Retourne un booléen, similaire à is...().
    // "to...()"        -  Effectuer une conversion, ex : toEur()
    // "has...()"       -  Vérifie si un objet possède une certaine propriété ou valeur, ex : hasAdminAccess()
    //  etc ...



/* 
    3. Les fonctions fléchées

    Ces fonctions ont été rajoutées en 2015 en JavaScript.
    Elles ont une syntaxe plus courte et quelques différences avec les fonctions classiques.
*/

const multiply = (a,b) => a * b;
console.log(multiply(2, 3));

