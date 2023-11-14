/* 
    Ces deux méthodes sont similaires mais possèdent quelques différences.
    Découvrons-les dans cette leçon rapide.
*/

/* 
    1. Node : appendChild(element)

    Rajoute l'élément passé en argument à la fin de la liste des enfants du noeud appelant cette méthode.

    Si l'élément à rajouter est un élément déjà existant, il est déplacé de son ancienne à sa nouvelle position.

    Ne fonctionne pas avec du simple texte.
    
    Ne peut ajouter qu'un seul élément à la fois.

    Retourne l'élément en question.
*/

    document.body.appendChild(document.createElement("input"))

/* 
    2. Element : append(element)

    Rajoute l'argument fourni à la fin de l'élément appelant.
    
    Fonctionne avec du texte et des éléments.

    Peut ajouter plusieurs enfants.
    
    Ne retourne rien.
*/

    document.body.append("test")
    document.body.append(document.createElement("input"),document.createElement("input"),document.createElement("input"))