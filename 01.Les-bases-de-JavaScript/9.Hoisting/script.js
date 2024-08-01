/* 
    1. Le "Hoisting"

    Le hissage, est la façon dont les variables déclarées avec var et les déclarations de fonction se font analyser en premier et "hisser" en haut du code lors de l'execution d'un fichier JS. 
    Cela les rend donc accessibles à tout le reste du code, même si les variables et fonctions sont déclarées après leur utilisation.

    Les var retourneront néanmoins undefined, car elles sont analysées sans qu'on leur assigne de valeur...
    La valeur est assignée au moment où la ligne de la var se fait exécuter, après le hissage.
    Cela fait partie des nombreux comportements problématiques des var, d'où la création de let&const.

    Attention, il n'y a pas de hoisting avec les let & const. 
*/

