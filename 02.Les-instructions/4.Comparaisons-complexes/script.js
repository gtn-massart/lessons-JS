/*  
    1. On peut comparer plusieurs expressions dans une condition, cela peut mener à des comparaisons assez complexes, mais parfois indispensables.
*/

const user1 = {
  name: "Victor",
  age: 35,
  admin: true,
  position: "CEO"
}
const user2 = {
  name: "Paul",
  age: 25,
  admin: false,
  position: "Employee"
}


// ↓ Éviter d'avoir trop d'expressions dans une condition (des fois on a pas le choix)
// function checkPermission(user) {
//   if(user.age >= 30 && user.admin && user.position === 'CEO' || user.position === "Director") {
//     return "Access granted";
//   }
//   else {
//     return "Access denied"
//   }
// }
// console.log(checkPermission(user1));


// ↓ après un refactoring
function checkPermission(user) {
  if(!user.admin || user.age < 30) {
    return "Access denied";
  } 

  if (user.position === 'CEO' || user.position === "Director") {
    return "Access granted"
  }
}
console.log(checkPermission(user1));