/* 
    1. La boucle for.

    La boucle for permet d'exécuter plusieurs instructions d'affilée jusqu'à ce qu'une condition ne soit plus vraie. 

    pour(initialisation, condition, incrémentation){
      fais quelque chose
    }

    1. Variable de départ initialisée, comme let i = 1;
    2. La condition est vérifiée, comme i <= 10;
    3. Le bloc de l'instruct est exécuté.
    4. L'incrémentation modifie la valeur de la variable de départ.
    5. À partir de là, on répète à partir de l'étape 2 jusqu'à que la condition ne soit plus vérifiée, ce qui nous fera sortir de la boucle.
  
*/

// boucle avec incrémentation
for(let i = 1; i <= 10; i++) {
  // console.log(i);
}


// Nous pouvons aussi décrémenter
for(let i = 10; i >= 1; i--) {
  // console.log(i);
}



// Ou effectuer toutes les opérations possibles sur l'expression initiale
for(let i = 0; i <= 100; i+=10) {
  // console.log(i);
}



// On utilise souvent une boucle for pour effectuer une opération sur tous les éléments d'un tableau.
const numbers = [1,2,3,4,5];

for (let i = 0; i < numbers.length; i++) {
  // console.log(numbers[i]); 
  numbers[i]++ // à chaque exécution ça va ajouter 1 au chiffre qui est à l'index i du tableau numbers
}
// console.log(numbers);



/* 
    2. Il existe deux instructions utiles dans les boucles : break et continue.

    L'instruction break permet de stopper les exécutions d'un boucle pour en sortir plus tôt;

    L'instruction continue permet de passer à l'itération suivante plus tôt.
*/

// break va faire sortir de la boucle quand la condition est atteinte
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 5 ) {
    break
  }
}

// continue va faire passer à l'itération suivante sans exécuter le console.log(i) 
for (let i = 1; i <= 3; i++) {
  if (i === 2 ) {
    continue
  }
  console.log(i);
}

