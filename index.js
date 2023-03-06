const sectionElements = document.querySelectorAll('[data-animation]')
const animationClass = 'animation'

function animationScroll () {
    const topPage = window.pageYOffset+((window.innerHeight*3)/4)
    sectionElements.forEach((element) => {
        if (topPage > element.offsetTop) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })
}

if (sectionElements.length) {
    window.addEventListener('scroll', animationScroll)
}