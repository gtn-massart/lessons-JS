/* 
    1. Les événements.

    Les évènements permettent à l'utilisateur d'une page web d'intéragir avec celle-ci.
    Voici quelques évènements très connus : click, submit, input, mousedown/up/over, drag&drop, load, scroll, touch, etc ...

*/

const title = document.querySelector("h1");
console.log(title);

//                    ↓ event , ↓ callback function 
title.addEventListener("click", handleClick)

function handleClick(event) {
    console.log(event);
    console.log("clicked !");
    // title.textContent = `${title.textContent + "a"}`
    title.style.backgroundColor = "crimson";
}

window.addEventListener("load", handleLoad)

function handleLoad() {
    console.log("Page loaded !");
}