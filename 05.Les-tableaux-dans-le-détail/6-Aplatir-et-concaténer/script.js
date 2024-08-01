/* 
    1. Array.prototype.concat(arr1,arr2,...)

    Définition: La méthode concat permet de fusionner plusieurs tableaux dans un nouveau tableau qu'elle retourne.

    Valeur de retour: Un nouveau tableau contenant tous les tableaux fusionnés.

*/

const mathClassroomMarks = [10,12,18,20,8,17]
const englishClassroomMarks = [5,10,12,14,18,17]

const mergedMarks = mathClassroomMarks.concat(englishClassroomMarks);

console.log(mergedMarks);



/* 
    2. Array.prototype.flat(depth)

    Définition: Permet d'aplatir un tableau, c'est à dire de créer un tableau à un seul niveau à partir d'un tableau à plusieurs niveaux.

    Paramètres: profondeur(1 niveau va être aplati par défaut).
    
    Valeur de retour: Un nouveau tableau issu de la concaténation de tous les niveaux du tableau fourni.
*/

const arr = [1,2,3,[1,2,3,[1,2,3]]]

console.log(arr.flat(2));