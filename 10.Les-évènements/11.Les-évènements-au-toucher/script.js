/*
    Les "touch events" permettent de prendre en compte le "clic" d'un doigt sur un écran tactile.
*/

    // !!! POUR TESTER, PASSER EN TOGGLE DEVICE TOOLBAR DANS LA CONSOLE !!!

    document.addEventListener('touchstart', () => console.log('touchstart'));
    document.addEventListener('touchend', () => console.log('touchend'));
    document.addEventListener('touchmove', () => console.log('touchmove'));
