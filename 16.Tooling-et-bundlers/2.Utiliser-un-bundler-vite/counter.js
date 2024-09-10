export function setupCounter(element) {
  let counter = 0
  const setCounter = () => {
    element.innerHTML = `count is ${counter}`
    counter++
  }
  element.addEventListener('click', setCounter)
  setCounter(0)
}
