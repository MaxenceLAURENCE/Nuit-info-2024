const images = [
    'img/lyreco.png'
];

const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];

const img = document.createElement('img');
img.src = randomImage;
img.classList.add('ranimg');

function getRandomPosition() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const randomX = Math.random() * (windowWidth - 200);
    const randomY = Math.random() * (windowHeight - 200);

    return { x: randomX, y: randomY };
}

const position = getRandomPosition();
img.style.left = position.x + 'px';
img.style.top = position.y + 'px';

document.body.appendChild(img);
