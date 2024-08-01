/* 
    1. Nombre de jours entre deux dates.

    Créez une fonction daysBetweenDates(firstDate, secondDate) qui retourne le nombre de jours passés entre deux dates données.

    ex : daysBetweenDates(new Data(2021,0,13), new Date(2021,0,22)) // 9
*/

function daysBetweenDates(firstDate, secondDate){

   return Math.trunc(Math.abs((Math.abs(secondDate) - Math.abs(firstDate))/(24 * 60 * 60 * 1000)));

}

console.log(daysBetweenDates(new Date(2021,0,13), new Date(2021,0,22)))


console.log(daysBetweenDates(new Date(1021,0,13), new Date(2021,0,22)))