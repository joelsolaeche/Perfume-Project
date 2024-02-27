let images = Array.from(document.querySelectorAll('#avon img'));
let currentIndex = 0;

images[currentIndex].classList.add('active');

document.getElementById('avon').addEventListener('click', function() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
});