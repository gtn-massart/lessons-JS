/* 
    En JavaScript, on peut construire un objet date à l'aide du constructeur Date().
*/  

const date = new Date();
console.log(date);
console.log(typeof date);
console.dir(date);

/* 
    1. Date.prototype.getDate/Day/FullYear/Hours/Millisecondes/Minutes/Month/Seconds()

    Retourne le jour, l'heure, l'année, les minutes, etc ... en fonction de la méthode utilisée.
*/

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMonth());


/* 
    2. Date.now() 

    Retourne le nombre de millisecondes écoulées depuis le 1er Janvier 1970.
    C'est un date arbitraire qui a été choisie pour faciliter les calculs.
*/

console.log(Date.now());

/* 
    3. Modifier une date avec Date.prototype.setHours/Minutes/Secondes() etc ... 
*/

console.log(date.setHours(18));
console.log(date.setMinutes(55));
console.log(date.setFullYear(2004));

console.log(date);


/*
    4. On peut directement faire des calculs avec les objets Date.
    La valeur en millisecondes de ces dates sera utilisée.

    On peut également accèder à cette valeur avec Date.prototype.valueOf().
*/

console.log(new Date(1988, 5, 13));
console.log(new Date(1995, 2, 24));

console.log(new Date(1995, 2, 24) - new Date(1988, 5, 13));