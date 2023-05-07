document.querySelector('.arrowDown').addEventListener('click', () => {
    const aboutMeSection = document.getElementById('about-me')
    aboutMeSection.scrollIntoView({ behavior: 'smooth' })
})

