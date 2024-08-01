const animatedInput = document.querySelector(".animated-input");
const inputGroup = document.querySelector(".input-group")
const validation = document.querySelector(".validation");

animatedInput.addEventListener("input", handleInput);

function handleInput(e) {

  if(e.target.value !== "") {
    inputGroup.classList.add("filled-input");
  }
  else if(e.target.value === "") {
    inputGroup.classList.remove("filled-input");
  }

  if(e.target.value.includes("$")) {
    animatedInput.classList.add("error");
    validation.classList.add("active");
    validation.textContent = "Les $ sont interdits.";
  }
  else  {
    animatedInput.classList.remove("error");
    validation.classList.remove("active")
  }

}