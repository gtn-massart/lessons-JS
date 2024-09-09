const grid = document.querySelector(".grid")

async function getArticles(){

  let articles;

  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    if(!response.ok) throw Error(`Error : ${response.status}`)

    articles = await response.json()
  }
  catch(error){
    const li = document.createElement("li")
    li.textContent = error.message
    grid.appendChild(li)
  }
  if(articles){
    console.log(articles);
    
    createArticles(articles)
  }
}

getArticles()
function createArticles(articles){
  articles.forEach(article => {
    const item = document.createElement("li")
    item.className = "item"
    item.innerHTML = `
      <h2></h2>
      <a href="#">Lire l'article</a>
    `
    item.querySelector("h2").textContent = article.title
    grid.appendChild(item)
  });
}