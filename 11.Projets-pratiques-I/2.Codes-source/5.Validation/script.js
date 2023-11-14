const animatedInput = document.querySelector('.animated-input');
const validation = document.querySelector('.validation');

animatedInput.addEventListener('input', handleInput)

function handleInput(e) {

    if (e.target.value !== "") {
        e.target.parentNode.classList.add('filled-input');
    } else if (e.target.value === "") {
        e.target.parentNode.classList.remove('filled-input');
    }
    if (e.target.value.includes('$')) {
        animatedInput.classList.add('error');
        validation.textContent = "Les $ sont interdits.";
        validation.classList.add('active');
    } else {
        animatedInput.classList.remove('error');
        validation.classList.remove('active');
    }

}