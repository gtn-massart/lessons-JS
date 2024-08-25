/* 
    1. Rest operator
    Le paramètre du reste permet d'accepter un nombre indéfini d'arguments sous forme d'un tableau.
*/

function concat(...strings) {
    console.log(strings);
    let fullString = "";
    for(const string of strings) {
        fullString += string; 
    }
    return fullString    
}
// console.log(concat("Bonjour", "le", "monde" ));

/* 
    2. Les paramètres par défaut.

    Ils permettent de définir une valeur par défaut si un argument correspondant au paramètre en question n'est pas fourni.
*/

function welcoming(userName = 'visiteur') {
    return `Bienvenue, ${userName}`;
}
console.log(welcoming());
console.log(welcoming("Gaëtan"));
console.log(welcoming("David"));

