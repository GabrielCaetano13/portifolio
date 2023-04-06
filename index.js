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


document.querySelector('.mobile-menu-icon').addEventListener('click', () => {
    let menuMobile = document.querySelector(".mobile-menu")

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = './assets/images/open-icon.svg'
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = './assets/images/close-icon.svg'
    }

    document.querySelector('.open').addEventListener('click', () => {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = './assets/images/open-icon.svg'
    })
})




