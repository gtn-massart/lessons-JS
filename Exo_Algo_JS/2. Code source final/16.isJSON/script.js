function isJSON(obj){

  try {
    throw new Error("XXXX")
    // JSON.parse(obj);
    // console.log(JSON.parse(obj));
    // return true;
  } 
  catch(e) {
    console.log(e);
    return false;
  }

}



/* ÉNONCÉ 📚 */

/* 
Créez un programme qui sert à détecter si l'argument est bien du JSON valide ou non.
Renvoyez true si ça l'est, false si ça ne l'est pas.
*/


/* Tests à passer 🧪 */

console.log(isJSON('{"name":"Adam","age":20}')); // true
console.log(isJSON('{"name":"Adam",age:"20"}')); // false






