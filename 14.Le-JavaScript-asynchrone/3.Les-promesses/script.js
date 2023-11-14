/*
  Les promesses permettent d'enchaîner des exécutions de code en JavaScript.
*/

/* 
  On commence par instancier (créer un objet à partir d'un constructeur) une nouvelle promessse.
  
  Cet objet instancié prend une callback avec deux arguments.
  
  Cette callback est exécutée au moment de la création de l'objet.

  Si l'opération est un succès (appel d'API, animation, etc...), on appelle la fonction resolve avec le résultat de ce succès, ce qui nous permet d'enchaîner des exécutions de fonction asynchrone à l'aide des méthodes then disponibles dans le prototype des promesses.

  Si c'est un échec, on appelle reject qui nous permet d'exécuter une méthode catch, elle aussi disponible dans le prototype des promesses.
*/
