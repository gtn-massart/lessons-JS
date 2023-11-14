/* 
    1.Les méthodes.

    Une méthode est une propriété d'un objet contenant une fonction.
    On appelle une méthode en utilisant le nom de la propriété qui lui est associée.

*/

// Méthodes avec trois synthaxe différentes
const athlete = {
    // ↓ fonction flèchée
    jump: () => {
        console.log("Jump");
        console.log(this);  // ici this fait référence au context englobant (window).
    },
    // ↓ fonction classique
    swim: function() {
        console.log("Swim");
        console.log(this);  // ici this fait référence au context appelant càd l'objet lui-même (athlete).
    },
    // ↓ raccourci de la fonction classique
    run() {
        console.log("Run");
        console.log(this);
    }
}

athlete.jump();
athlete.swim();
athlete.run();
