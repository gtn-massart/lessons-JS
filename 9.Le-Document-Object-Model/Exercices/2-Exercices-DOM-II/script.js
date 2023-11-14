const data = [
    {
        content: "Lait",
        category: "Diary"
    },
    {
        content: "Fromage",
        category: "Diary"
    },
    {
        content: "Savon",
        category: "Wellness"
    },
    {
        content: "Pommes",
        category: "Fruits"
    },
    {
        content: "Poulet",
        category: "Meat"
    },
]

/*
1. Écrivez une fonction fillList(list, data) qui transforme les données data en <li>.

Un <li> par objet doit être créé.

Chaque <li> contiendra un <p> avec le contenu de la propriété .content et un autre <p> avec le contenu de la propriété .category.

Ajoutez ensuite chaque <li> dans la liste <ul>
*/

const list = document.querySelector(".list");
console.log(list);

function fillList(list, data) {

    data.forEach( data => {
        const li = document.createElement("li");

        const liContent = `
        <p></p>
        <p></p>
        `;

        li.innerHTML = liContent;

        console.log(li);

        li.querySelector("p:nth-child(1)").textContent = `${data.content}`;
        li.querySelector("p:nth-child(2)").textContent = `${data.category}`;

        list.appendChild(li);
    })

}

fillList(list, data);

/*
    2. Supprimez maintenant le premier et dernier élément de la liste.
*/

document.querySelector(".list li:first-child").remove();
document.querySelector(".list li:last-child").remove();
