/* Découvrons la méthode fetch en JavaScript */

// https://api.thecatapi.com/v1/images/search



fetch("https://api.thecatapi.com/v1/images/search")
.then(response => {
  if(!response.ok) throw Error(`${response.status}`)
  console.log(response)
  return response.json()    
})
.then(data => {
  console.log(data);
  createImg(data)
})
.catch(error => {
  document.querySelector(".error-msg").textContent = `Error : ${error.message}`
  console.dir(error)
});


function createImg(imgData) {
  const img = document.createElement("img")
  img.src = imgData[0].url 
  document.body.appendChild(img)   
}

