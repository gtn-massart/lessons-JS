const modal = document.querySelector(".modal");
const toggleTriggers = document.querySelectorAll(".toggle-modal");

toggleTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
  modal.classList.toggle("active")
}

const modalContainer = document.querySelector('.modal-content')
modalContainer.addEventListener("click", handleModalClick)

function handleModalClick(e){
  e.stopPropagation()
}