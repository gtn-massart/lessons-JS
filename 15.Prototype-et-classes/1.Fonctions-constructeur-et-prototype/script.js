/* 
  Les fonctions constructeur permettent de créer des objets lorsqu'elles sont appelées avec le mot-clé new.
*/




/*
  Chaque fonction est un objet, et chaque fonction possède une propriété appelée "prototype".

  N'oubliez pas que chaque fonction est un objet "appelable", et que vous pouvez lire ses propriétés avec console.dir(function test(){})
*/




/*
  Ce prototype est un objet, et il est partagé, par référence, à toutes les instances créées à partir de cette fonction constructeur.

  Une instance est un objet créé à partir d'un constructeur.

  Chaque instance va donc se voir attribuer une propriété spéciale "prototype", qui sera une référence à la propriété "prototype" de la fonction constructeur qui a servi à le construire.
*/



/*
  Comment utiliser ce prototype ?  

  Lorsqu'on appelle une propriété située dans le constructeur depuis un objet, le moteur JS va avoir un comportement spécial.

  Il va d'abord la chercher dans l'objet en lui-même, puis il remontera dans le prototype.
*/



/*
    Cet héritage de prototype par référence est donc très bon en termes de performance.

    Cela évite de recréer toutes les propriétés du prototype originel dans chaque nouvelle instance.
    
    Une simple propriété spéciale "prototype" est créée et elle référence l'objet originel de la fonction constructeur.
*/ 




// Ce qui est génial, c'est que le this de chaque fonction définie dans le prototype d'une fonction constructeur est égal à l'objet qui appelle lesdites fonctions.

// Souvenez-vous qu'un objet qui appelle une méthode devient la valeur de son this (dans le cas d'une fonction classique)
