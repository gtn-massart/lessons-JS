
const text = document.querySelector("h2")

function countdownValue() {

  const now = new Date()
  const countdownDate = new Date("September 1, 2024")
  const distance =countdownDate - now
  console.log(distance);  

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const secondes = Math.floor((distance % (1000 * 60)) / 1000)

  console.log(days, hours, minutes,secondes);

  text.textContent = `${days}j ${hours}h ${minutes}m ${secondes}s`
}

setInterval(countdownValue, 1000)