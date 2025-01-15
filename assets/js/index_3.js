document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the 'carousel' class
    var sliders = document.querySelectorAll('.carousel');

    // Loop through each slider and customize it
    sliders.forEach(function (slider) {
      var flkty = new Flickity(slider, {
        wrapAround: true,
        imagesLoaded: true,
        freeScroll: true,
      });

      var prevButton = slider.querySelector('.flickity-prev-next-button.previous');
      var nextButton = slider.querySelector('.flickity-prev-next-button.next');

      if (prevButton && nextButton) {
        prevButton.innerHTML = '<span class="custom-prev-button">Previous</span>';
        nextButton.innerHTML = '<span class="custom-next-button">Next</span>';
      }
    });
  });