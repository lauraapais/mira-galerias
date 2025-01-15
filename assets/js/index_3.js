document.addEventListener("DOMContentLoaded", function () {
  var sliders = document.querySelector(".carousel");

  var flkty = new Flickity(sliders, {
    wrapAround: true,
    imagesLoaded: true,
    freeScroll: true,
    cellAlign: "center",
    contain: false,
    cellSpacing: 10,
    autoPlay: 5000,
    pauseAutoPlayOnHover: false
  });

  var prevButton = document.getElementById("indexArrow_Left");
  var nextButton = document.getElementById("indexArrow_Right");

  prevButton.addEventListener("click", function () {
    flkty.previous();
  });

  nextButton.addEventListener("click", function () {
    flkty.next();
  });
});
