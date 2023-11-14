/* 
    Lorsqu'un évènement est déclenché sur un élément du DOM, cet évènement en question va remonter l'arbre du DOM jusqu'à l'objet window.
    
    On appelle ça le "bubbling" ou bouillonnement en Français.

    Sur son passage, il va exécuter tous les écouteurs d'évènement qui écoutent cet évènement en question.
    
    S'il déclenche un autre écouteur d'évènement sur son passage, l'objet d'évènement qui lui sera passé représentera la cible qui a reçu cet évènement.
*/







