/*
    1. Faites-en sorte que le premier bouton nous ramène tout en haut du site lorsqu'on clique dessus.
*/

const container = document.querySelector('.container');
const pushTopBtn = document.querySelector('.push-top-button');

pushTopBtn.addEventListener('click', pushToTop);

function pushToTop() {

    // méthode 1
    // document.documentElement.scrollTop = 0;

    //méthode 2
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

    // méthode 3
    // document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' })

}

/*
    2. Utilisez la méthode .scrollTo() pour scroller jusqu'au milieu de la section newsletter lorsqu'on clique sur le bouton .scroll-to-newsletter.

    C'est simplement pour s'exercer, le rendu ne va pas être optimal en termes d'UX mais ce n'est pas ce qui compte ici. 👍
*/

const scrollToNewsletterBtn = document.querySelector('.scroll-to-newsletter');

scrollToNewsletterBtn.addEventListener('click', slideToMidNewsletter);


function slideToMidNewsletter() {

    const newsletterDimensions = document.querySelector('.newsletter').getBoundingClientRect();
    const newsletterTopPosition = window.scrollY + newsletterDimensions.top;

    window.scrollTo({
        top: newsletterTopPosition + (newsletterDimensions.height / 2),
        behavior: 'smooth'
    })

}
