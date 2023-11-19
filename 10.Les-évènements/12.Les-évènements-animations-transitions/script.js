/*
    Il existe des évènements utiles avec les animations et les transitions.

    Transitions : transitionend, transitioncancel, transitionend, transitionrun, transitionstart

    Animation : animationstart, animationend
*/

    const box = document.querySelector('.box');

    box.addEventListener('transitionstart', () => console.log('Transition start'));
    box.addEventListener('transitionend', () => console.log('Transition end'));
    box.addEventListener('transitionrun', () => console.log('Transition run'));
    box.addEventListener('transitioncancel', () => console.log('Transition cancel'));

    
    box.addEventListener('animationstart', () => console.log('animation start'));
    box.addEventListener('animationend', () => console.log('animation end'));