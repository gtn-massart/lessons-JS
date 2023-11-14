/* 
    Découvrons et rappelons les principales caractéristiques des déclarations let et const, et leurs différences avec le mot-clé var.
*/

/* 
    1. let & const sont block-scoped, var est function-scoped.
    Si une variable var est déclarée en dehors d'une fonction, elle devient disponible globalement ! 
*/




/* 
    2. On ne peut pas déclarer de const vide, contrairement à let ou var.
*/



/* 
    3. Une variable var se fait 'hoisted'(hissée dans la mémoire) et peut être utilisée avant sa déclaration.
    Let et const se font aussi hoisted, mais le moteur JS bloque leur accès avant leur initialisation. 
*/



/* 
    4. Une variable var déclarée globalement se fait enregistrer dans l'objet global, pouvant provoquer des bugs de clash entre variables globales.
    Let et const se font enregistrer dans la mémoire, mais sans être accessible comme propriété directe de window.
*/






