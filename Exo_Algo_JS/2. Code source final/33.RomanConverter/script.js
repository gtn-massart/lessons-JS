function romanConverter(num) {

  const decimalBase = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  const romanNumbers = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  let result = "";

  for(let index = 0; index < decimalBase.length; index++) {

    while(num >= decimalBase[index]) {
      result += romanNumbers[index]
      num -= decimalBase[index]
    }

  }

  return result;
}

/* ÉNONCÉ 📚 */


/*
Créez un algorithme qui transforme le paramètre "num" en son équivalent en chiffre romain et retournez-le.
Vous disposez des deux tableaux (decimalBase et romanNumbers) pour faire les conversions.
*/ 


/* Tests à passer 🧪 */

console.log(romanConverter(36));     // XXXVI
console.log(romanConverter(2000));   // MM
console.log(romanConverter(5648));   // MMMMMDCXLVIII
