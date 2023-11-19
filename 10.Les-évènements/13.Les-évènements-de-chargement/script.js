/*
    Voici les évènements concernant le chargement d'une page : DOMContentLoaded, load.
*/

    document.addEventListener('DOMContentLoaded', () => console.log("Construction du Dom terminé"));

    window.addEventListener('load', () => console.log("Données chargées"))