/* 
    Les événements sont au coeur du JavaScript côté navigateur, ils permettent de répondre à des actions effectuées par les utilisateurs.
*/

/* 
    1. .addEventListener(event, callback, option)
    
    Elle permet d'être à l'écoute d'un évenement particulier sur un élément, c'est à dire de déclencher une fonction callback quand un évènement a été déclenché sur un élément.
*/
    
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', handleClick);
    btn.addEventListener('click', handleClick2);

    // ↓ !!! c'est moins manipulable avec une fonction anonyme, par exemple si on veut retirer l'évenement.
    btn.addEventListener('click', () => console.log('clicked 3 !!!'));

    function handleClick(event) {
        console.log('Clicked !!!');
    }

    function handleClick2(event) {
        console.log('Clicked 2 !!!');
    }

    // → Dans la console on peut vérifier les différents eventListener appliqués à un élément. Cela fonctionne UNIQUEMENT dans la console
    // → getEventListeners(document.querySelector('.btn'));



/* 
    L'objet d'évènement.

    Un objet d'évènement contenant des informations de ce dernier est TOUJOURS passé en argument à la fonction callback que vous définissez dans addEventListener().

    À vous de voir si vous voulez l'utiliser, ou pas.

*/
    btn.addEventListener('click', handleClick4);

    function handleClick4(event) {
        console.log(event);
    }



/* 
    .removeEventListener(type, callbackListener)

    Enlève un écouteur d'évènement d'un certain élément.
    Cela permet, dans certains cas, d'alléger le fonctionnement d'une application et d'avoir de meilleures performances.

    Attention, on ne peut qu'enlever des écouteurs d'évènements rajoutés avec la méthode addEventListnerner ET lorsque on a passé une fonction nommée et pas une fonction anonyme.
*/

    // btn.removeEventListener('click', handleClick2);

    // ↓ ne fonctionnera pas car a été créé avec une fonction anonyme ()
    // btn.removeEventListener('click', handleClick3)

/* 
    Déclarer un écouteur d'évènement en ligne.

    Element.onclick = EventListenerCallback;

    Trois gros désavantages de cette technique :
    - On ne peut pas rajouter plusieurs event listeners sur le même élément avec cette technique
    - On ne peut pas les enlever
    - On ne peut pas utiliser les paramètres supplémentaires d'addEventListeners()
*/

    // !!! NE PLUS UTILISER
    // btn.onclick = handleClick;

/* 
    Rajouter des évènements en HTML.
*/