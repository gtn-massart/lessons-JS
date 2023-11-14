/* 
    1. Le chaînage optionnel

    L'opérateur ? permet de lire une propriété ou de retourner undefined si la propriété ou la chaîne de propriétés n'est pas valide.
    Sans cet opérateur, JavaScript retourne normalement une erreur.
*/

const store = {
  dairyProducts: {
    cheeses: ["Camembert", "Roquefort", "Cantal"],
    yogurt: ["Vanilla", "Strawberry", "Peach"],
  },
  pasta: {
    freshPasta: {
      flourPasta: ["Spaghetti", "Ravioli","Fusilli"],
      flourAndPotato: ["Gnocchi"]
    },
  },
  getPrice: () => {
    return 20
  }
}


console.log(store.dairyProducts.cheeses[1]);

// ↓ retourne une erreur car n'existe pas.
// console.log(store.dairyProducts.iceCreams.chocolateCreams[3]);

// ↓ retourn undefined car le ? permet de demander d'afficher l'élément SI IL EXISTE. !!! ATTENTION À LA SYNTAXE AVEC UN TABLEAU !!!
console.log(store.dairyProducts.iceCreams?.chocolateCreams?.[3]);

console.log(store.getPrice());
console.log(store.getQuantity?.());