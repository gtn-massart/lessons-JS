function sortedStudents(arr) {

  // console.log(arr[0].grades.reduce((acc, cur) => acc + cur) / arr[0].grades.length);

  return arr.sort((a,b) => {
    return (
      b.grades.reduce((acc, cur) => acc + cur) / arr[0].grades.length -
      a.grades.reduce((acc, cur) => acc + cur) / arr[0].grades.length 
      )
    })
}

// > 0 a après b
// < 0 a avant b
// === 0 garder l'ordre


// (a,b) => a - b // ordre croissant 

// [10,5,15]
// 10 - 5 = 5     a passe après b
// [5,10,15]
// 10 - 15 = -5   a reste avant b


// (a,b) => b - a // ordre décroissant

// [10,5,15]
// 5 - 10 = -5    a reste avant b
// [10,5,15]
// 15 - 5 = 10    a après b
// [10,15,5]
// 15 - 10 = 5    a après b
// [15,10,5]


/* ÉNONCÉ 📚 */

/*  
  Vous recevez un tableau rempli d'objets représentant les élèves d'une classe et leurs notes.
  Retournez un tableau dont les objets précédents ont été triés par ordre décroissant en fonction de la moyenne de chaque élève.
*/

/* Test à passer 🧪 */

console.log(
sortedStudents([
  { name: "Tom", grades: [1, 3, 5, 9, 2, 7] },
  { name: "Jack", grades: [20, 4, 18, 10, 14, 12] },
  { name: "Ana", grades: [11,14,3,14,12,14] },
  { name: "Sara", grades: [10,12,14,15,14,19] },
])
);

/* Returns */

/* 
[
  { name: 'Sara', grades: [ 10, 12, 14, 15, 14, 19 ] },
  { name: 'Jack', grades: [ 20, 4, 18, 10, 14, 12 ] },
  { name: 'Ana', grades: [ 11, 14, 3, 14, 12, 14 ] },
  { name: 'Tom', grades: [ 1, 3, 5, 9, 2, 7 ] }
]
*/