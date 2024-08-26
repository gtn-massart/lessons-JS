// "https://api.thecatapi.com/v1/images/search"

async function getCatImg(url) {

  let imgData
  try {
    const response = await fetch(url)

    if(!response.ok) throw Error(`${response.status}`)

    imgData = await response.json()    
  }
  catch(error) {
    document.querySelector(".error-msg").textContent = `Error : ${error.message}`
    console.dir(error)
  }
  
  if (imgData) {
    createImg(imgData)    
  }
}

getCatImg("https://api.thecatapi.com/v1/images/search")

function createImg(imgData) {
  const img = document.createElement("img")
  img.src = imgData[0].url 
  document.body.appendChild(img)   
}
