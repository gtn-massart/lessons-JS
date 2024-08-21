/* 
    Découvrons et rappelons les principales caractéristiques des déclarations let et const, et leurs différences avec le mot-clé var.
*/

/* 
    1. let & const sont block-scoped, var est function-scoped.
    Si une variable var est déclarée en dehors d'une fonction, elle devient disponible globalement ! 
*/

// if(true) {
//     if (true) {
//         var test = "Hello world !";           
//     }
// }
// console.log(test);
// console.log(window.test);

// if(true) {
//     if (true) {
//         let test2 = "Hello world 2 !";
//         console.log(test2);
//     }
// }
// console.log(test2);

// function foo() {
//     if (true) {
//         var number = 10;
//     }
//     console.log(number);
//     let number2 = 99;    
// }
// foo();


/* 
    2. On ne peut pas déclarer de const vide, contrairement à let ou var.
*/

// var animal;
// let lion;
// const cat;  // Erreur car non initialisée
// const cat2 = "Tom"; // OK

/* 
    3. Une variable var se fait 'hoisted'(hissée dans la mémoire) et peut être utilisée avant sa déclaration.
    Let et const se font aussi hoisted, mais le moteur JS bloque leur accès avant leur initialisation. 
*/

// console.log(hoistedVar);
// var hoistedVar = 99;
// console.log(hoistedVar);

// console.log(letVar);
// let letVar= "abc";
// console.log(letVar);

/* 
    4. Une variable var déclarée globalement se fait enregistrer dans l'objet global, pouvant provoquer des bugs de clash entre variables globales.
    Let et const se font enregistrer dans la mémoire, mais sans être accessible comme propriété directe de window.
*/

var newWindowProp = "Hello world";
console.log(window);    // On y retrouve la variable newWindowProp

const customID = 1564648;
console.log(window);    // On ne retrouve pas la variable customID
console.log(customID);






