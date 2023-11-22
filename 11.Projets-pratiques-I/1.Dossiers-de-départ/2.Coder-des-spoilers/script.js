const jsSpoilers = document.querySelectorAll('.js-spoiler');

jsSpoilers.forEach(spoiler => spoiler.addEventListener('click', toggleSpolier));

function toggleSpolier(e) {
  e.target.classList.add("js-spoiler-revealed");
}