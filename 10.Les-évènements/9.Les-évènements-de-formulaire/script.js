/* 
    Les formulaires sont des élèments importants du web.
    Ils possèdent beaucoup d'évènements qu'il faut maitrîser en JavaScript.

    Notez que les formulaires ont beaucoup de potentielles utilités.

    On peut évidemment s'en servir afin d'envoyer des données vers un serveur.

    Mais on peut aussi très bien les utiliser uniquement côté Front, comme pour pas mal de générateurs CSS par exemple.

    https://neumorphism.io/#e0e0e0

    Dans tous les cas, il faut bien les connaître.
*/


/* 
    1. submit

    Un écouteur d'évènement se déclenche par défaut pour celui-ci dès qu'on clique sur un bouton qui se trouve dans un formulaire.

    Il provoque un rafraîchissement de la page car il essaye d'envoyer les données sur la même page si on ne spécifie aucun attribut à l'élément form.
*/


/* 
    2. input

    Cet évènement se déclenche à chaque fois qu'il y a un changement dans un input.

    Pratique pour faire de la validation de données côté Front. (animation, UX, etc...)
*/
 


/* 
    3. change

    Cet évènement ressemble à input mais ne se déclenche que lorsque un input perd le focus.

    Pour les inputs checkbox ou radio, l'effet est identique.
*/




/* 
    4. invalid

    Celui-ci permet de déclencher le gestionnaire d'évènement quand on essaye d'envoyer un formulaire qui contient des potentielles erreurs.

    Par exemple si je rentre un texte au mauvais format dans un input type="email".
*/



    // Pour changer l'erreur dans la boxe au submit, on utilise setCustomValidity("Votre message")


/* 
    Pour enlever complètement le message d'erreur, appelez cette fonction avec une chaîne vide.
    Attention, cela va potentiellement envoyer le formulaire avec des données mal formées.
*/



/*
    5. focus et blur.

    L'évènement focus est déclenché quand un élément reçoit le focus, comme lorsqu'on clique sur un input.

    L'évènement blur est déclenché lorsqu'un élément perd le focus, comme lorsqu'on clique ailleurs.
*/
