/* 
    1. Les opérations "Short circuit"

    Les expressions utilisant des opérateurs logiques (||, &&) retournent des valeurs.

    Le ET logique retourne le second opérande si le premier et le second opérande sont évalués comme truthy.

    Le OU logique retourne le premier opérande s'il est évalué comme truthy, ou le second si c'est ce dernier qui est truthy. 
*/

let isAuthenticated = true;
const user = {
  name: "Hanz",
  level: 99
}

//             ↓ true         ↓ true  
console.log(isAuthenticated && user); // → retourne user

// ↓ Moins utilisé
//             ↓ false        ↓ true 
console.log(isAuthenticated || user); // → retourne user