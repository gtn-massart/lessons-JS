/* 
    1. Fonction pure.

    Une fonction pure a deux caractéristiques :

    A. Elle retourne toujours la même chose en fonction des mêmes paramètres.
    B. Elle n'utilise aucune valeur en dehors de sa portée et n'a pas d'effets secondaires en dehors de son bloc.

*/

// ↓ Fonction pure car elle n'utilise aucune variable externe.
function add(a, b) {
    return a + b
};
console.log(add(5, 5));



// ↓ Fonction impure car elle utilise une variable externe, dans ce cas-ci VAT
let VAT = 20;
function getFinalPrice1(rawPrice) {
    return rawPrice * (100 + VAT) / 100;
}
console.log(getFinalPrice1(100));

// ↓ Fonction pure de l'exemple ci-dessus
function getFinalPrice2(rawPrice, VAT) {
    return rawPrice * (100 + VAT) / 100;
}
console.log(getFinalPrice2(100, 20));