let slideIndex = 1;

function showSlides(pos) {
  let slides = document.getElementsByClassName('slides');
  let dots = document.getElementsByClassName('dot');

  if (pos > slides.length) {
    slideIndex = 1;
  }

  if (pos <= 0) {
    slideIndex = slides.length;
  }

  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';

    if (dots[i].classList.contains('active')) {
      dots[i].classList.remove('active');
    }
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
}

function previousSlide() {
  showSlides(--slideIndex);
}

function nextSlide() {
  showSlides(++slideIndex);
}

function setSlide(n) {
  slideIndex = n;
  showSlides(n);
}
