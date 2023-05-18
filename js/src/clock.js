let hourElement = document.querySelector('.clock')

function updateClock() {
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    hourElement.innerText = `${hour}:${minutes}:${seconds}`
}

setInterval(updateClock, 1000)