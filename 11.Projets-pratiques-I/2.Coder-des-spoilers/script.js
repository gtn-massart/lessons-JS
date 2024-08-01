const jsSpoilers = document.querySelectorAll('.js-spoiler');

jsSpoilers.forEach(spoiler => spoiler.addEventListener('click', toggleSpoiler));

function toggleSpoiler(e) {
  e.target.classList.add("js-spoiler-revealed");
}