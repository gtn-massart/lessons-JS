/* 
    Ces trois propriétés pratiques se ressemblent, mais il faut bien comprendre leurs différences.
*/

const container = document.querySelector(".container");
const title = document.querySelector("h1");

/* 
    Element : innerHTML = string

    Transforme la chaîne de caractères fournie en éléments HTML si la syntaxe est respectée.
    Rajoute du texte au contenu d'un élément si la chaîne fournie n'est pas au format HTML.
    
    Cette propriété comporte des risques si elle est mal utilisée.
    Nous en parlerons un peu plus tard.
*/

    // Rajoute un élément HMTL dans l'élément container.
    // container.innerHTML = "<input type='text'/>"    // remplace le contenu du container par un input

    // Retourne le contenu interne de container.
    // container.innerHTML = "Nouveau texte"

/* 
    Element : textContent

    Retourne ou modifie le texte à l'intérieur d'un élément.
    Retournera également le contenu en "visibility: hidden;", contrairement à innerText.
*/

    // Retourne le texte à l'intérieur de container, caché ou pas.
    // console.log(container.textContent); // montre tout le contenu de l'élément même le texte dissimulé

    // Change le texte à l'intérieur de container
    // title.textContent = "Nouveau texte" // préférable pour modifier les textes, moins de risques qu'avec innerHTML

/* 
    Element : innerText
    
    Retourne ou modifie le texte à l'intérieur d'un élément.
    Retournera seulement le texte visible, non-dissimulé par visibility: hidden.
*/

    // Retourne seulement le texte visible
    console.log(container.innerText);

    container.innerText = "Nouveau Texte";


/* 
    De la dangerosité d'innerHTML.

    Il ne faut jamais transformer en HTML des données qu'on reçoit d'une source non-sûre.

    Par prévention, HTML n'exécute pas un "<script></script>"" avec innerHTML.

    Par exemple : body.innerHTML = "<script>alert("script malicieux)</script>" // ne fonctionne pas.

    Mais il existe d'autres façons d'exécuter du JS, comme par exemple avec ... l'élément <img> !

    `<img src='1' onerror='alert("Error loading image")'>`;
*/

// document.body.innerHTML = "<script>alert(\"script malicieux\")</script>";    // Le code du script ne fonctionnera pas

// !!! ATTENTION, DANGEREUX SI ON NE CONNAIS PAS LA SOURCE !!!
// const data = `<img src='1' onerror='alert("Error loading image")'>`;    // imaginons que les datas viennent d'une API
// document.body.innerHTML = data;   // celui-ci se lancera à cause de onerror et pourrait contenir du code malveillant.


/* 
    textContent vs innerText

    Une petite guerre existe pour savoir s'il faut utiliser textContent ou innerText.
    Il y a certes, certaines différences entre les deux, mais vous pouvez la plupart du temps les utiliser de manière interchangeable.
    Je vous conseille d'utiliser textContent qui est en général plus acceptée.
*/


