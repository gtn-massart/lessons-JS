/* 
    La méthode .filter() est très importante à maîtriser, mais peut être assez complexe à appréhender au départ.
    
    Mettez votre chapeau de filtreur en chef et résolvez ces différents problèmes.
*/


/* 
    A. Vers l'infini et au delà.

    Filtrez les entreprises dont le revenue annuel est supérieur à 500 milliards de dollars dans un nouveau tableau appelé "filteredCompanies" et retournez le dans la console.
*/

const companies = [
  {
    name: "Walmart",
    revenu: 600
  },
  {
    name: "Saudi Aramco",
    revenu: 552
  },
  {
    name: "Amazon",
    revenu: 513
  },
  {
    name: "Sinopec",
    revenu: 480
  },
  {
    name: "PetroChina",
    revenu: 480
  },
  {
    name: "Exxon Mobil",
    revenu: 398
  },
]

const filterdCompany = companies.filter(company => company.revenu > 500);
console.log(filterdCompany);


/* 
    B. Ménage de printemps.

    Supprimez toutes les valeurs falsy du tableau "values" ci-dessous.
    Retournez dans la console un tableau "truthyValues" contenant les valeurs restantes.
*/

const values = ["", undefined, "a", "a", 99, 0, true, false, 5, 5, 5];

const truthyValues = values.filter(value => value); // !!! la méthode filter retourne uniquement les valeurs true !!!
console.log(truthyValues);


/* 
    C. Nom de nom.

    Retournez un nouveau tableau "filteredNames" contenant seulement les prénoms commençant par la lettre A et ayant une longueur minimale de 5.
*/

const names = ["Adrien", "Paul", "Victor", "Alexandre", "Aurélie", "Antoine"];

const filterdNames = names.filter(name => name[0] === "A" && name.length >= 5);
console.log(filterdNames);