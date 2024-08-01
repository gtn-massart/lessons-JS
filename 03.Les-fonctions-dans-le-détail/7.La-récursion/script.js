/* 
    1. La récursion.

    La récursion est le comportement d'une fonction qui s'appelle elle-même.

    Attention, la récursion est moins rapide qu'une boucle et en général moins simple à comprendre.
*/

function recurtion(num) {
  num++;

  if(num > 10) {
    console.log(num, "Num est strictement supérieur à 10 !");
  }
  else {
    recurtion(num)
  }
}

recurtion(0)