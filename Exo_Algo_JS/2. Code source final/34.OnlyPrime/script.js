function addPrime(num) {
  
  if(num === 1) {
    return 0;
  }

  function isPrime(number) {
    for(let i = 2; i < number; i++) {
      if(number % i === 0){
        return false;
      }
    }
    return true;
  }

  if(isPrime(num)){
    return num + addPrime(num - 1)
  }
  else {
    return addPrime(num - 1)
  }

}


/* ÉNONCÉ 📚 */

/*
  Additionnez tous les nombres premiers contenus dans un nombre donné, en comptant ce nombre.
  Les nombres premiers sont les nombres qui peuvent seulement être divisés par 1 et par eux-mêmes.
  1 n'est pas un nombre premier.
  La liste des nombres premiers commence comme cela :
  2, 3, 5, 7, 11, 13, 17, 19 etc ...
*/


/* Tests à passer 🧪 */

console.log(addPrime(10));   // 17
console.log(addPrime(5));    // 10
console.log(addPrime(13));   // 41