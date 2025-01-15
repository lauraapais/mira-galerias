document.addEventListener('DOMContentLoaded', function() {
  var sliders = document.querySelectorAll('.carousel');

  sliders.forEach(function(slider) {
    var flkty = new Flickity(slider, {
      wrapAround: true,
      imagesLoaded: true,
      freeScroll: true,
      cellAlign: 'center',
      contain: true,
      cellSpacing: 10,
      autoPlay: false
    });

    // Function to auto-advance the slide
    function autoAdvance() {
      flkty.next();
    }

    // Set the interval to 5 seconds (5000 milliseconds)
    var autoPlayInterval = setInterval(autoAdvance, 5000);

    // Function to reset the interval
    function resetAutoPlayInterval() {
      clearInterval(autoPlayInterval);
      autoPlayInterval = setInterval(autoAdvance, 5000);
    }

    // Reset the interval when the user interacts with the slider
    ['mouseenter', 'mouseleave', 'click', 'touchstart'].forEach(event => {
      slider.addEventListener(event, resetAutoPlayInterval);
    });
  });
});
