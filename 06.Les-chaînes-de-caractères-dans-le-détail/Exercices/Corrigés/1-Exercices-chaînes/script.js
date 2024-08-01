/* 
    1. Remplacez le mot chat par chien dans la chaîne qui suit.
*/

let str = "Le chat est un animal carnivore."
str = str.replace("chat", "chien");
console.log(str); 

/* 
    2. Retournez true dans la console si la chaîne suivante contient la chaîne "4578"
*/

const str2 = "45124573121214578";
console.log(str2.includes("4578"));


/* 
    3. Retournez l'index de l'occurence de la première apparition de la lettre "c" dans la phrase suivante.
*/

const str3 = "Le meilleur compagnon contre l'ennui est un bon livre."
console.log(str3.indexOf("c"));

/* 
    4. 

    A. Retournez str4 en majuscule dans la console.
    B. Retournez str5 en minuscule dans la console.
*/

const str4 = "Hello world !";
const str5 = "CHUUUUUUT";

console.log(str4.toUpperCase());
console.log(str5.toLowerCase());
