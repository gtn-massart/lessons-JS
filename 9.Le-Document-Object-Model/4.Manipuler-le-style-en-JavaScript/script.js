/* 
  1. La propriété "style"

  Elle peut : 
  A. Retourner le style en ligne d'un élément.
  B. Changer le style en ligne d'un élément si on modifie la valeur d'une de ses propriétés(setter).

  element.style.backgroundColor = "red";

  Notez le camelCase pour le nom des propriétés et la chaîne pour la valeur.
  Attention, on parle ici de style en ligne, donc de style avec une spécificité très haute.

  Si du style inline est déjà présent, ça ne le supprime pas mais le rajoute à la fin de ce dernier.

*/

// ATTENTION le style en ligne à une haute spécificité !!!

const box = document.querySelector(".box");
console.log(box.style);

box.style.backgroundColor = "blue"; // <div class="box" style="font-size: 45px; background-color: blue;"></div>
console.log(box.style.backgroundColor);

// Avec setAttribute, le style inline déjà présent est supprimé.
box.setAttribute("style", "background-color: gold");  // <div class="box" style="background-color: gold"></div>
console.log(box.style.backgroundColor);

// Si on veut les valeurs de la feuille de style
console.log(window.getComputedStyle(box).height); // On va chercher la valeur de la hauteur de box → 200px