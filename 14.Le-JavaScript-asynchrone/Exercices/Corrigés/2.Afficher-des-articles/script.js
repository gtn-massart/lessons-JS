const grid = document.querySelector(".grid")

async function getArticles(){
  let articles;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    
    if(!response.ok) throw new Error(`Erreur ${response.status}`)

    articles = await response.json()
    console.log(articles)
  }
  catch(error){
    const p = document.createElement("p")
    p.textContent = error.message
    grid.appendChild(p)
  }

  if(articles) {
    fillGridWithArticles(articles)
  }
}

getArticles()

function fillGridWithArticles(articles){
  articles.forEach(article => {
    const item = document.createElement("div")
    item.className = "item"
    item.innerHTML = `
      <h2></h2>
      <a href="#">Lire l'article</a> 
    `
    console.log(item)
    item.querySelector("h2").textContent = article.title 
    grid.appendChild(item) 
  })

} 