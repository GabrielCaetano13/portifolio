import technologies from "../../assets/myTechnologies/technologies.js";

console.log(technologies)

function createTechCard(tech) {
    const card = document.createElement('div');
    card.classList.add('cardTech');
    card.setAttribute('data-aos', 'fade-down');
    card.setAttribute('data-aos-duration', '1500');

    const img = document.createElement('img');
    img.src = tech.icone;
    img.alt = `Imagem da tecnologia ${tech.name}`;

    const aboutTech = document.createElement('div');
    aboutTech.classList.add('aboutTech');

    const title = document.createElement('p');
    title.classList.add('techTitle');
    title.textContent = tech.name;

    const desc = document.createElement('p');
    desc.classList.add('techDesc');
    desc.textContent = tech.description;

    aboutTech.appendChild(title);
    aboutTech.appendChild(desc);

    card.appendChild(img);
    card.appendChild(aboutTech);

    return card;
}

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('sectionTech');

    technologies.forEach(tech => {
        const card = createTechCard(tech);
        container.appendChild(card);
    });
});