document.addEventListener('DOMContentLoaded', function() {
  var sliders = document.querySelectorAll('.carousel');

  sliders.forEach(function (slider) {
    var flkty = new Flickity(slider, {
      wrapAround: true,
      imagesLoaded: true,
      freeScroll: true,
      cellAlign: 'left',
      contain: true,
      cellSpacing: 10 // Adjust this value to set the spacing between images
    });

    var prevButton = slider.querySelector('.flickity-prev-next-button.previous');
    var nextButton = slider.querySelector('.flickity-prev-next-button.next');

    if (prevButton && nextButton) {
      prevButton.innerHTML = '<span class="custom-prev-button">Previous</span>';
      nextButton.innerHTML = '<span class="custom-next-button">Next</span>';
    }
  });
});
