/* 
  JSON, pour JavaScript Object Notation, est un format représentant des données.
  Il ressemble beaucoup aux objets JavaScript, mais ce n'est pas du JavaScript.

  Ce format est un formidable moyen de partager des données, notamment sur le web.

  Lorsque des applications communiquent entre elles avec du JSON, elles le transforment en chaîne de caractères afin de le rendre plus rapide et maniable, puis le transforment dans le language souhaité lorsqu'elles veulent l'utiliser, par exemple en JavaScript.
*/

/* 
    1. Le format

    On doit entourer les propriétés de guillements.
    Une propriété d'objet JSON ne peut pas contenir de fonctions, de date ou d'undefined.
*/

/*
{
  "userName" : "Paul",
  "age": 25 
}
*/

const JSONTextFormat = '{"userName" : "Paul","age": 25}'


/*
    2. Manipuler du JSON
*/

// La méthode JSON.parse() analyse du texte JSON et retourne l'objet JS correspondant.


// La méthode JSON.stringify() fait l'inverse, elle transforme un objet JS en JSON.
const cat = {
  catName: "Toto",
  age: 5, 
  weight: 4 
}






