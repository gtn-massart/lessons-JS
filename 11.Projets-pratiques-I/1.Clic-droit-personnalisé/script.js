const customMenu = document.querySelector('.custom-menu');
const customMenuBtns = document.querySelectorAll('button');

document.addEventListener('contextmenu', handleCustomMenu)

function handleCustomMenu(e) {
  e.preventDefault();

  customMenu.style.display = 'block';
  customMenu.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`
}


document.addEventListener('click', handleDocumentClick);

function handleDocumentClick() {
  customMenu.style.display = 'none';
}


customMenuBtns.forEach(btn => btn.addEventListener('click', handleCustomMenuFeature));

function handleCustomMenuFeature(e) {
  e.stopPropagation();
  console.log(e.target.dataset);
  document.body.style.backgroundColor = `${e.target.dataset.color}`
}