/* 
  Par défaut, tous les objets héritent du prototype du constructeur Object.

  C'est-à-dire que la chaîne de prototypes se terminera toujours par le prototype Object.

  Mais on peut rajouter autant de maillons qu'on veut à cette chaîne.
  
  Le but de cette approche est de faire hériter plusieurs ensembles de méthodes et de propriétés pratiques.

  Par exemple, lorsqu'on construit un tableau, on hérite à la fois du prototype du constructeur Array, mais aussi du constructeur Object.

*/



/*
    On peut créer une chaîne de prototypes soi-même.
*/
