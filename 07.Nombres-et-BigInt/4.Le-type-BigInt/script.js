/* 
    Récemment, JavaScript a rajouté le type BigInt qui permet de manipuler de très grands nombres.
    Il faut rajouter la lettre n minuscule à la fin d'un bigInt afin que JavaScript l'interprète correctement.
    Les BigInt representent des nombres supérieurs à (2^53) - 1
*/


const bigIntNumber1 = 676878678676876877n;
const bigIntNumber2 = 976878678676876877n;

console.log(bigIntNumber1);
console.log(typeof bigIntNumber1);

console.log(bigIntNumber1 > bigIntNumber2);
