/* 
  1. Le DOM

  Le DOM, "Document Object Model", est la représentation sous forme d'objets des éléments d'une page web par votre navigateur.

  Le DOM n'est pas du JavaScript, c'est une interface utilisable par plusieurs langages.
  
  Néanmoins, c'est bien avec JavaScript qu'on utilise le DOM le plus souvent.
  
  Toute votre page va donc être représentée sous la forme d'un grand arbre d'objets, c'est à dire des objets imbriqués les uns dans les autres.

  Ces objets contiennent des propriétés et des méthodes très pratiques.

  Grâce à ces derniers, tout est possible en JavaScript, car chaque élément va pouvoir être sélectionné, modifié, supprimé, stylisé, cliqué, glissé, scrollé et j'en passe.

  JavaScript sert donc à manipuler des pages web, et même s'il a énormément évolué et peut aujourd'hui être utilisé dans beaucoup de domaines de programmation, il reste majoritairement employé sur le web pour remplir sa fonction originelle.

*/

const title = document.querySelector("h1");
console.log(title);

title.textContent = "Le texte a été modifié"

title.style.backgroundColor = "crimson";



/* 
  2. Le BOM pour Browser object model, est l'objet global.
  
  C'est lui qui contient toutes les fonctionnalités de la page d'un navigateur.

  Il contient également le DOM, qu'on peut trouver dans la propriété Document.

  En plus du DOM, il expose un tas de méthodes très connues : alert(), setInterval, fetch(), etc...
  
  Des propriétés sur la page en cours : innerWidth, innerHeight, etc...

  Et des APIs pratiques comme History pour gérer l'historique.
*/

console.log(window);