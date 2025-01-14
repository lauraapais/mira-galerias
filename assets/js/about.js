/*const carousel = document.querySelector('.aboutCarousel');
const images = document.querySelectorAll('.aboutCarousel img');
const nextButton = document.querySelector('.nextButton');
const backButton = document.querySelector('.backButton');

let currentIndex = 0; // Track the current image index

function updateCarousel(index) {
    const imageWidth = images[0].getBoundingClientRect().width;
    const gap = parseInt(getComputedStyle(carousel).gap);
    let scrollAmount = index * (imageWidth + gap);

    // Align the last image to the right if needed
    if (index === images.length - 1) {
        const containerWidth = carousel.parentElement.getBoundingClientRect().width;
        scrollAmount = carousel.scrollWidth - containerWidth;
    }

    carousel.style.transform = `translateX(-${scrollAmount}px)`;

    // Enable/disable buttons based on the current index
    updateButtonState();
}

function updateButtonState() {
    // Disable the back button if on the first image
    if (currentIndex === 0) {
        backButton.style.pointerEvents = 'none';
        backButton.style.cursor = 'default';
        backButton.style.opacity = '0.5'; // Optional: Visual feedback
    } else {
        backButton.style.pointerEvents = 'auto';
        backButton.style.cursor = 'pointer';
        backButton.style.opacity = '1'; // Reset visual feedback
    }

    // Always enable the next button
    nextButton.style.pointerEvents = 'auto';
    nextButton.style.cursor = 'pointer';
    nextButton.style.opacity = '1';
}

nextButton.addEventListener('click', function () {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first image
    }
    updateCarousel(currentIndex);
});

backButton.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; // Loop back to the last image
    }
    updateCarousel(currentIndex);
});

// Initialize with the first image in focus and button states
updateCarousel(currentIndex);
*/