const slider = document.querySelector('.imageSlider');
const images = slider.querySelectorAll('img');
let currentIndex = 0;

function updateSlider() {
    images.forEach((img, index) => {
        img.classList.remove('selected', 'left', 'right');
        if (index === currentIndex) {
            img.classList.add('selected');
        } else if (index === (currentIndex + 1) % images.length) {
            img.classList.add('right');
        } else if (index === (currentIndex - 1 + images.length) % images.length) {
            img.classList.add('left');
        }
    });
}



document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    } else if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    }
});

updateSlider();
