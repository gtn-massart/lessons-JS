/* 
    1. Le mot-clé this avec les objets.

    Le mot-clé this représente une réfèrence à quelque chose.
    Néanmoins, cette référence est différente suivant les endroits où on l'utilise.
    
    Cela peut-être une référence à l'objet appelant quand on est dans une fonction classique, ou alors une référence au contexte englobant quand on est dans une fonction fléchée.
    
    Il existe d'autres cas de figure dont nous parlerons plus tard.
*/

const house = {
    room: 5,
    area: 200,
    priceWithoutTaxe: 850000,
    district: 7,
    // ↓ Dans une fonction classique d'un OBJET, this fait référence à l'objet appelant (ici house)
    getFullPrice() {
        return this.priceWithoutTaxe * 1.2;    
    },
    // ↓ Dans une fonction flèchée d'un OBJET, this fait référence au context englobant (ici l'oblet window)
    convertSFtoSM: () => {
        console.log(this);
       return this.area * 0.92;
    }
}
console.log(house.getFullPrice());
console.log(house.convertSFtoSM()); // NaN


// ↓ Dans une fonction classique, this fait référence à l'objet englobant (ici window)
function foo() {
    return this;
}
console.log(foo());


// ↓ Dans une fonction flèchée, this fait référence au context englobant (ici l'oblet window)
const foo2 = () => {
    return this;
}
console.log(this);