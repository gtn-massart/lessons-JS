## Conseils pour résoudre cet algorithme

- object arguments 
- forEach()
- indexOf()
- push()
- new Set()
- flat()


// function merging(arr) {
//   const newArr = [];
//   // console.log(arguments);
//   // arguments objet contenu nos arguments, on les met dans un tableau
//   [...arguments].forEach(subArray => subArray.forEach(el => newArr.indexOf(el) === 1 ? "" : newArr.push(el)))
//   return newArr;
// }

// set = collection de données uniques à partir d'un tableau ou d'un élément iterable.
// qui ressemblent à un tableau mais sans les méthodes
function merging(arr) {
  return [...new Set([...arguments].flat())]
}
