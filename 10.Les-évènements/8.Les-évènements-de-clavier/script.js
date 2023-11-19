/* 
    Les évènements de clavier peuvent nous permettre de connaître les touches pressées, ce qui peut être très utile dans de nombreux cas.
*/

const keyboardInfo = document.querySelector('.keyboard-info');

// document.addEventListener('keydown', handleKey);
document.addEventListener('keyup', handleKey);

function handleKey(e) {
    console.log(e);
    keyboardInfo.textContent = `${e.key}`
}
