/*
    AJAX veut dire : Asynchronous JavaScript And XML.
    
    C'est une fonctionnalité permettant d'envoyer des requêtes vers un serveur et de recevoir des données alors que la page a déjà chargé. 

    On va donc pouvoir envoyer et recevoir des données sans actualiser la page.
*/

/*
    Voici l'ancienne façon de faire, on utilise aujourd'hui la méthode fetch() qui est plus simple à utiliser mais qui utilise XMLHttpRequest sous le capot.
*/

// https://api.thecatapi.com/v1/images/search

function getCatImage(url, callback) {
    const xhr = new XMLHttpRequest()
    console.log(xhr);
    
    xhr.open("GET", url, true)
    xhr.responseType = "json"

    xhr.addEventListener("load", handleLoad)
    function handleLoad() {
        callback(xhr.response)
    }
    xhr.send()
}

getCatImage("https://api.thecatapi.com/v1/images/search", data => {
    console.log(data);
    const img = document.createElement("img")
    img.src = data[0].url 
    document.body.appendChild(img)    
})