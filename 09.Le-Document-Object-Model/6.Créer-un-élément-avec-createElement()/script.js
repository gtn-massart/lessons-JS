/* 
    Il est très courant de vouloir créer des éléments en JavaScript.
    Découvrons ensemble la façon de faire classique.
*/

/* 
    1. Document : createElement(tagName)  

    Créer un objet Element en fonction de l'argument de type string fourni.
*/

/* 
    2. Node : appendChild(child)

    Rajoute un noeud enfant à la fin de la liste d'enfants de l'élément appelant.
*/

/* 
    3. EventTarget : addEventListener(event, callback)

    Rajoute un écouteur d'évenement à un élément, nous reviendrons très en détail sur cette méthode plus tard.
*/

const addLiBtn = document.querySelector(".create-btn");
const list = document.querySelector(".list");

addLiBtn.addEventListener('click', handleClick);

function handleClick() {
    
    const li = document.createElement("li");

    li.textContent = "Hello World";

    list.appendChild(li);
    
}
