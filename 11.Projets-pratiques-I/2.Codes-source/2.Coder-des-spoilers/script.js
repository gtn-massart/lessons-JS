const jsSpoilers = document.querySelectorAll(".js-spoiler")

jsSpoilers.forEach(spoiler => spoiler.addEventListener("click", toggleSpoiler))

function toggleSpoiler(){
  this.classList.add("js-spoiler-revealed");
}

