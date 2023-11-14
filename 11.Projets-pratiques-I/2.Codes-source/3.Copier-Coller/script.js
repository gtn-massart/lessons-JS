const copyToClipboardButton = document.querySelector(".copy-clipboard-btn")

copyToClipboardButton.addEventListener("click", handleCopyToClipboard)

let runningAnimation = false
function handleCopyToClipboard(e){
  console.log(e.target.previousElementSibling)
  navigator.clipboard.writeText(e.target.previousElementSibling.textContent)

  if (!runningAnimation) {
    runningAnimation = true
    e.target.textContent = "Copié 🎉"
  
    setTimeout(() => {
      e.target.textContent = "Copier 📚"
      runningAnimation = false
    }, 1000)
  }

}

