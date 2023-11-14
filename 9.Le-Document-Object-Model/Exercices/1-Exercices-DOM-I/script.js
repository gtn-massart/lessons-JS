/*
    1. Sélectionnez et changez la couleur du <h1> en "plum" en JavaScript.
*/

const title = document.querySelector("h1");
title.style.color = "plum";


/*
    2. Sélectionnez le paragraphe sous le titre à l'aide de son ID.

    Deux façons de faire sont possibles.
*/

const paragraph = document.querySelector("#subtitle");
const paragraph2 = document.getElementById("subtitle");

console.log(paragraph, paragraph2);

/*
    3. Loggez le texte du troisième <li> dans la console.
*/

const list = document.querySelector("ul");

const thirdItem = list.children[2].textContent;

console.log(thirdItem);

// OU

console.log(document.querySelector("ul li:nth-Child(3)").textContent);


/*  
    4. Loggez le contenu de l'attribut "src" de l'image dans la console.
*/

const image = document.querySelector("img"); 
console.log(image.getAttribute("src")); // retourne le chemin relatif

// OU

console.log(document.querySelector("img").src); // retourne le chemin absolu


/*
    5. Rajoutez un <li> contenant le texte "Nouveau LI !" à la liste. 
*/

const newLi = document.createElement("li");

newLi.textContent = "Nouveau LI !"

document.querySelector("ul").appendChild(newLi)

