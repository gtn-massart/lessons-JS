/* 
    1. Est-ce qu'une date se trouve entre un intervalle de deux autres dates ?

    Créez la fonction daysBetweenDates(begin, end, test) qui retourne un booléen en fonction de la présence du troisième paramètre dans l'intervalle formé par les deux premiers.
*/

function isBetweenDates(begin, end, test) {

  return test > begin && test < end

}

console.log(
  isBetweenDates(
    new Date(10, 9, 2004),
    new Date(20, 9, 2004),
    new Date(14, 9, 2004)
  )
)
