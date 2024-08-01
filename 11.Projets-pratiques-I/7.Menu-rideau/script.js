const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav")

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav(e) {
  hamburgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
}