/* 
    Les méthodes setTimeout() et setInterval() sont très utilisées en JavaScript.
    
    Elles permettent d'exécuter une fonction callback de manière différée dans le temps, sans polluer le fil principal d'exécution JS.

    Ces opérations sont dîtes asynchrones.
*/


/*  
    1. window.setTimeout(callback, delay).

    Valeur de retour : un id permettant de stopper le timeout si on le souhaite avec clearTimeout().

    Exécute une callback ou bout d'un certain délai en millisecondes.
*/

setTimeout(() => { console.log("Log au bout de 2 secondes")}, 2000)

const timeoutID = setTimeout(() => { console.log("Log au bout de 3 secondes")}, 3000)
clearTimeout(timeoutID)


/* 
    2. window.setInterval(callback, delay)

    Valeur de retour : Un id permettant de mettre fin au setInterval.

    Fonctionnement : Exécute une fonction callback tous les x millisecondes définies par le second argument.
*/

const intervalID = setInterval(() => { console.log("Log toutes les 2 secondes")}, 2000)
clearTimeout(intervalID)