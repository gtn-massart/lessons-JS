function scanAndFind(data, source) {

}


/* ÉNONCÉ 📚 */

/*
 Le premier argument que l'on passe à cet algorithme est une liste de données, le second un objet qui nous informe d'un nom et d'une valeur.
 Retournez dans un nouveau tableau tous les objets du premier argument qui ont la même propriété ET valeur que le second.
*/

/* Tests à passer 🧪 */

console.log(
  scanAndFind(
  [
    { prenom: "Tom", nom: "Durand" },
    { prenom: "Juliette", nom: "Garcia" },
    { prenom: "Jean", nom: "Lafite" },
    { prenom: "Lucien", nom: "Lafite" },
    { prenom: "Lucien", abc: "Lafite" }
  ], 
    { nom: "Lafite" }
  )
);
  // Résultat -> [{ prenom: 'Jean', nom: 'Lafite' },{ prenom: 'Lucien', nom: 'Lafite' }]

console.log( 
  scanAndFind(
  [
    { prenom: "Joe", code: 65421 },
    { prenom: "John", id: 556487 },
    { prenom: "Melinda", identification: 54834 },
    { prenom: "Rose", id: 68784 },
    { prenom: "Jack", id: 41244 }
  ], 
    { id: 556487 }
  )
);
  // Résultat -> [ { prenom: 'John', id: 556487 } ]

