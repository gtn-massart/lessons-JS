/* 
    L'évènement scroll se déclenche quand le contenu de l'élément sur lequel il est attaché subit un scroll.
*/

  const info = document.querySelector('.info');

  document.addEventListener('scroll', handleScroll);

  function handleScroll(e) {
    console.log('scroll', e);
    info.textContent = `Body ${window.scrollY}`
  }

/*
  L'évènement resize est disponible seulement sur l'objet window.
  Il se déclenche quand on réduit la fenêtre.  
*/

  window.addEventListener('resize', () => console.log('RESIZED !!!!!'));  
  console.log(window.innerHeight);
  console.log(window.innerWidth);
