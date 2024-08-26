/* Découvrons la méthode fetch en JavaScript */

// https://api.thecatapi.com/v1/images/search

function getCatImg(url) {

  fetch(url)
  .then(response => {
    console.log(response)
    return response.json()    
  })
  .then(data => {
    console.log(data);
    createImg(data)
  })
}

function createImg(imgData) {
  const img = document.createElement("img")
  img.src = imgData[0].url 
  document.body.appendChild(img)   
}

getCatImg("https://api.thecatapi.com/v1/images/search")