/*  
    Il est très courant de vouloir connaître les positions d'un élément par rapport aux différents bords de la fenêtre.
    Il est aussi courant de vouloir connaître ses dimensions.

    Découvrons quelques méthodes et propriétés utiles afin d'obtenir ces informations.
*/

/* 
    1. Element : getBoundingClientRect()

    Retourne un objet contenant les dimensions d'un élément et sa position par rapport au viewport, c'est à dire la fenêtre globale ou la zone d'affichage.
    
    Attention, le viewport n'est pas tout le temps le haut de la page, notamment si on a déjà scrollé.
    Ce sera toujours le haut de la fenêtre visible.

*/

    const box = document.querySelector(".box");
    
    console.log(box.getBoundingClientRect());


/* 
    Window : scrollY ou Window : pageYOffset

    Retourne le nombre de pixels scrollés depuis le haut d'un document.

    Même comportement pour  Window.scrollX ou Window.pageXOffset, mais il faut un scroll horizontal pour s'en rendre compte.
*/

    console.log(window.scrollY);


/* 
    Element : scrollWidth et Element : scrollHeight

    Largeur ou hauteur totale du contenu d'un élément.

    width :  padding + contenu + potentiel overflow sur X - largeur de la potentielle scrollbar sur Y.

    height : padding + contenu + potentiel overflow sur Y - hauteur de la potentielle scrollbar sur X

    Ne compte pas la marge et les bordures dans le résultat final.

    Ne fonctionne pas avec les éléments inline.
*/

    const container = document.querySelector(".container")
    console.log("scrollWidth " + container.scrollWidth);
    console.log("scrollHeight " + container.scrollHeight);

/* 
    Element : clientWidth et Element : clientHeight

    Même calcul qu'au-dessous sauf si du contenu est en train de dépasser avec overflow.

    Dans ce cas-là, ce contenu n'est pas pris en compte.

*/
    console.log("clientWidth " + container.clientWidth);
    console.log("clientHeight " + container.clientHeight);

/* 
    Element : offsetWidth et Element.offsetHeight

    Même calcul qu'au-dessous, en comptant cette fois les bordures.

*/
    console.log("offset " + container.offsetWidth);
    console.log("offset " + container.offsetHeight);

/* 
    Récupérer la hauteur d'un élément depuis le top.    
*/
    // rajout d'un h1
    const title =  document.querySelector("h1");
    console.log(window.scrollY + title.getBoundingClientRect().top); // ce qu'on a scrollé + la position du titre par rapport au haut du viewport = hauteur depuis le top


/* 
    Element : offsetLeft 

    Retourne la valeur en pixel de l'écart gauche entre l'élement et son parent, il n'y a pas de prop "offsetRight" disponible.
*/

    console.log(container.offsetLeft);
    console.log(container.offsetRight);
    console.log(container.offsetParent);

/* 
    calculer offsetRight
    
*/
    const containerPosition = container.getBoundingClientRect();
    console.log(containerPosition.right - containerPosition.width);

/* 
    Element : scrollTop

    Retourne la partie "scrollée" d'un élément.
    C'est à dire la distance entre le haut de l'élément et le contenu visible / qui a été scrollé.

    Attention, il faut que l'élément soit "scrollable", il faut qu'il contienne une scrollbar.

    document.body.scrollTop est déprécié, il faut plutôt utiliser document.documentElement.scrollTop;

    Ou encore mieux, window.scrollY;

*/
    console.log(document.documentElement.scrollTop);
    console.log(window.scrollY);

    container.addEventListener('scroll', () => {
        console.log(container.scrollTop);
    })


