/*  
    Les élément imbriqués de notre page HTML deviennent des objets imbriqués du DOM après analyse d'un navigateur.

    <div>
        <p>Hello</p>
    </div>
    
    =>

    {
        tag: "div",
        content: "",
        children: [
            {
                tag: "p",
                content: "Hello"
            },
            ...
        ]
    }
    // 🔼 Ceci est une image pour vous aider à comprendre, ça ne représente pas les propriétés exactes utilisées.

    Découvrons les propriétés pratiques liées aux relations parents / enfants.
*/

const card = document.querySelector(".card");

// console.log(card);
// console.log(card.childNodes);
// console.log(card.children);  // préférable pour travailler
// console.log(card.children[1]);  // sélectionne le paragraphe
// console.log(card.firstChild); // retourne le premier noeud
// console.log(card.firstElementChild); // retourne le premier élément html
// console.log(card.lastChild);  // retourne le dernier noeud
// console.log(card.lastElementChild);  // retourne le dernier élément html


const title = document.querySelector("h2");

// console.log(title);
// console.log(title.nextSibling); // retourne le noeud suivant au même niveau
// console.log(title.nextElementSibling); // retourne l'élement suivant
// console.log(title.previousSibling); // retourne le noeud précedent au même niveau
// console.log(title.previousElementSibling);  // retourne l'élément précédent  

// console.log(title.parentNode);  // retourne le noeud parent
// console.log(title.parentElement);   // reoturne l'élément parent
// console.log(title.nodeName);    // retourne le nom du noeud
