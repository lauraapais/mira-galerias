document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.imageArchive-img');
    images.forEach((img, index) => {
      if (Math.floor(index / 3) % 2 === 0) {
        img.classList.add('behavior1');
      } else {
        img.classList.add('behavior2');
      }
    });
  });
  