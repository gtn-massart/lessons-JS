/* 
    Comment transformer une chaîne en nombre ?
    Voilà un problème sur lequel on peut tomber en JS.
    Il existe, étrangement, beaucoup de façons de le résoudre.
*/

    // .parseInt

    console.log(Number.parseInt("129"));

    // .parseFloat

    console.log(Number.parseFloat("129.16564"));

    // Le constructeur Number(), appelé en tant que fonction, peut convertir une chaîne en nombre.

    console.log(Number("555"));
    console.log(new Number(555));

    // Multiplier avec un nombre

    console.log("129" * 2);

    // Math.floor(), même avec un argument entier.

    console.log(Math.floor("10.15665"));

    // L'opérateur unaire +
    // L'opérateur unaire (+) précède son opérande et essaye de le convertir en nombre si ce n'est pas déjà une valeur numérique.

    console.log(+"55");