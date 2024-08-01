/* 
    Il est assez courant de vouloir changer la valeur de l'attribut d'un élément en JavaScript, comme "src", "class", "lang", "name", "type" etc...   

    Lorsque le DOM est créé à partir des fichiers fournis au navigateur, quasiment chaque attribut devient une propriété d'un objet représentant un élément.

    Seuls les attributs non-standards ne sont pas implémentés en tant que propriété. 
    Ces attributs non-standards seront manipulables via certaines méthodes.
*/
   
const kittyImg = document.querySelector('img');
// console.log(kittyImg);
// console.log(kittyImg.src);
// console.log(kittyImg.alt);

kittyImg.className = "kitty-img";
kittyImg.id = "kitty1"
kittyImg.src = 'ressources/kitty2.jpg';


/* 
    1. Element : attributes

    Retourne une collection live (NamedNodeMap) de tous les attributs d'un élément.
    Chaque attribut de cette liste est un objet contenant des informations sur l'attribut en question.
    On peut utiliser ce genre de liste itérable avec for...of ou les transformer en tableau avec [...nodemap], accédant  ainsi aux méthodes pratiques des tableaux.
*/

const kittyAttributes = kittyImg.attributes;

// console.log(kittyAttributes);
// console.log(kittyAttributes[0]);    // retourne le premier attribut, ici src
// console.log(kittyAttributes[1]);    // retourne le second attribut, ici alt

// for(attr of kittyAttributes) {      // retourne tous les attributs
//     console.log(attr);
// }


/*
    2. Créer un attribut personnalisé avec data-x

    On peut utiliser la notation data-attr pour créer des attributs de données contenant des valeurs utiles qu'on pourra ensuite retrouver avec la propriété dataset.

*/

// console.log(kittyImg.dataset);


/* 
    3. Element : setAttribute(strAttrName, strAttrValue)

    Rajoute un attribut à un élément.
    Cette méthode est utile pour rajouter des attributs non-standards. 
    Tous les autres sont accessibles avec la dot notation.
    Les attributs non-standards sont assez peu utilisés, on peut les mettre en place avec cette méthode ou directement à la main dans l'HTML.
*/

kittyImg.setAttribute("customAttribute", "Hello World")


/* 
    4. Element : getAttribute(strAttrName)

    Donne la valeur d'un attribut.
    Fonctionne comme la dot notation dans beaucoup de cas. 
*/

console.log(kittyImg.getAttribute("custom"));   // zzz

/* 
    5. Element : hasAttribute(strAttrName)

    Renvoie true ou false en fonction de la présence d'un attribut.
*/

    console.log(kittyImg.hasAttribute("src"));  // true

    console.log(kittyImg.src && true);// true - version sans avoir à passer par la méthode


/* 
    6. Element : removeAttribute(strAttrName)

    Supprime un attribut.

*/

   kittyImg.removeAttribute("src")  // supprime l'attribut src

   // kittyImg.src = "" // ne supprime pas totalement l'attribut. src reste mais sans valeur.


/* 
    7. Element : toggleAttribute(strAttrName)

    Supprime un attribut s'il est présent, le rajoute s'il ne l'est pas.
*/
    document.querySelector('input').toggleAttribute('disabled')// on ne peut plus utiliser l'input