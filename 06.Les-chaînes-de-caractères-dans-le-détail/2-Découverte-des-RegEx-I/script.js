/* 
    1. Qu'est-ce qu'une RegEx ou RegExp ?

    Les expressions régulières (ou rationnelles) représentent des modèles de chaîne de caractères.
    Elles vont permettre de détecter la présence d'un certain modèle dans une chaîne, ou pas.

    On peut s'en servir pour valider un email, un numéro de téléphone, une adresse, ou simplement pour retrouver un mot dans un texte. 

    On peut construire une regex de deux façons différentes.

    I. const regex = new RegExp("/abc/")

    II. const regex = /abc/  
    
    La seconde est plus populaire, mais ne peut utiliser d'expressions JS, donc à voir au cas par cas.
*/

const regex = /abc/;

// console.log(regex.test("abc"));
// console.log(regex.test("bac"));

// console.log(regex);

// console.dir(regex)

/*    
    2. Les options (drapeaux).

    On peut rajouter des lettres à la fin d'une regex afin de lui rajouter des fonctionnalités supplémentaires.


    A. 
    /g => la lettre g signifie qu'on teste la chaîne globalement, et qu'on ne s'arrête pas après la première correspondance.
    Cela ne va pas avoir d'effet sur certaines méthodes, mais la méthode match() renverra par exemple l'ensemble des correspondances.

    B.
    /i => la recherche n'est pas sensible à la casse.
    /a/i.test("a") // true
    /a/i.test("A") // true

    etc...
*/

// console.log('aaa'.match(/a/));
// console.log('aaa'.match(/a/g));

// console.log(/a/i.test("a"));
// console.log(/a/i.test("A"));

/* 
    3. "Classe de caractères" : N'importe quel caractère de la liste entre les crochets. 

    /[a7y]/ correspond à la première occurence de a, ou 7, ou y.
    /[e-l]/ un caractère entre e et l compris.
    /[2-4]/ un caractère entre 2 et 4 compris.


    Il existe des alternatives syntaxiques à ces classes qui permettent de créer une regex rapidement, mais il faut connaître les symboles par coeur.
    
    \w  Correspond à tous les chiffres, les lettres et les underscores, équivalent à [a-zA-Z0-9_]
    \d  Correspond à un chiffre de 0 à 9, équivalent [0-9];
    \s	Correspond à tous les sauts à la ligne.
    .   Le point seul, correspond à tous les caractères sauf un retour à la ligne. ex : /./
    \r  Correspond à un retour à la ligne quand du texte est déjà écrit (carriage return).
    \n  Correspond à une nouvelle ligne sans carriage return, comme quand on enchaîne plusieurs sauts de ligne sans rien écrire.
    \t  Correspond à un tab

    \W  Correspond à tout ce qui **n'est pas** une lettre, un chiffre ou un underscore, équivalent à [^a-zA-Z0-9_], le ^ (seulement dans une classe) signifant "tout ce qui n'est pas ce qui suit".
    \D  Tout ce qui n'est pas un digit, équivalent à [^0-9];
    \S	Correspond à tout ce qui n'est pas un retour à la ligne(tous les caractères).
*/

// const classRegexTest = /[a-z]/;

// console.log(classRegexTest.test('a'));
// console.log(classRegexTest.test('M'));
// console.log(classRegexTest.test('9'));


// const classRegexTest2 = /[0-9]/;

// console.log(classRegexTest2.test('7'));
// console.log(classRegexTest2.test(5));
// console.log(classRegexTest2.test('g'));


// const classRegexTest3 = /\d/;

// console.log(classRegexTest3.test('6'));


/* 
    4. Les caractères échappés.

    Que faire quand on recherche un caractère qui est déjà utilisé dans les symboles des regex ? Il faut l'échapper, c'est à dire mettre un anti-slash devant.

    \.  pour rechercher un point
    \\  pour rechercher un antislash
    Ou encore : \? \$ \+ \*
*/

const escapedRegex = /\//;

console.log(escapedRegex.test('654654/98945ed'));
