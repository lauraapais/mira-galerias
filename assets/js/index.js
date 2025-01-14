const slider = document.getElementById('slider');
const leftArrow = document.getElementById('indexArrow_Left');
const rightArrow = document.getElementById('indexArrow_Right');

let currentIndex = 0;

function updateSliderPosition() {
    const sliderWidth = slider.offsetWidth;
    const eventElements = slider.querySelectorAll('.eventIndex');
    const elementWidth = eventElements[0].offsetWidth;
    const gap = parseInt(getComputedStyle(slider).gap);

    const centerOffset = (sliderWidth - elementWidth) / 2;
    const scrollPosition = currentIndex * (elementWidth + gap) - centerOffset;

    slider.style.transform = `translateX(${-scrollPosition}px)`;
}

leftArrow.addEventListener('click', () => {
    const eventElements = slider.querySelectorAll('.eventIndex');
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = eventElements.length - 1;
    }
    updateSliderPosition();
});

rightArrow.addEventListener('click', () => {
    const eventElements = slider.querySelectorAll('.eventIndex');
    if (currentIndex < eventElements.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSliderPosition();
});

// Center the first item on load
updateSliderPosition();
