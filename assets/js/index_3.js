document.addEventListener('DOMContentLoaded', function() {
  var sliders = document.querySelectorAll('.carousel');

  sliders.forEach(function(slider) {


    var flkty = new Flickity(slider, {
      wrapAround: true,
      imagesLoaded: true,
      freeScroll: true,
      cellAlign: 'center',
      contain: false,
      cellSpacing: 10,
      autoPlay: false
    });

    // Add event listeners to your custom arrow buttons
    var prevButton = document.getElementById('indexArrow_Left');
    var nextButton = document.getElementById('indexArrow_Right');

    prevButton.addEventListener('click', function() {
      flkty.previous();
    });

    nextButton.addEventListener('click', function() {
      flkty.next();
      flkty.resize();

    });
  });
});
