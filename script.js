let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const slider = document.getElementById('slider');
  const navel = document.getElementById('navele');
  const alw = document.getElementById('always');

  function showSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    const translateValue = -currentIndex * 100 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
    updateDots();
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }
  setInterval(() => {
    nextSlide();
  }, 5000);



  //next

let customCurrentIndex = 0;
const customSlides = document.querySelectorAll('.custom-slide');
const customTotalSlides = customSlides.length;
const customSlider = document.getElementById('custom-slider');

function showCustomSlide(index) {
  if (index < 0) {
    customCurrentIndex = customTotalSlides - 1;
  } else if (index >= customTotalSlides) {
    customCurrentIndex = 0;
  } else {
    customCurrentIndex = index;
  }

  const customTranslateValue = -20 + 50 - customCurrentIndex * 50 + '%';
  customSlider.style.transform = 'translateX(' + customTranslateValue + ')';
}

function customNextSlide() {
  showCustomSlide(customCurrentIndex + 1);
}

function customPrevSlide() {
  showCustomSlide(customCurrentIndex - 1);
}

// customNextSlide(0);

// Automatic sliding every 5 seconds
setInterval(() => {
  customNextSlide();
}, 5000);

// -- -----------mainmenu---------------- --

function menuView(){
  const head = document.querySelector('#header');
  const ham = document.querySelector('#hamburger');
  if(navel.style.visibility == 'hidden'){
    navel.style.visibility = 'visible';
    head.style.height = '380px';
    ham.style.transform = 'translateY(0px)';
  }
  else{
    navel.style.visibility = 'hidden';
    head.style.height = '80px';
    ham.style.transform = 'translateY(-38px)';
  }
}

var maxWidthQuery = window.matchMedia("(max-width: 800px)");

function handleMaxWidthChange(e) {
  if (e.matches) {
    menuView();
  }
}

handleMaxWidthChange(maxWidthQuery);

maxWidthQuery.addEventListener("change", handleMaxWidthChange);

function resetHeaderWidth() {

  const head = document.querySelector('#header');
  const ham = document.querySelector('#hamburger');

  if(window.innerWidth < 800){
    navel.style.visibility = 'hidden';
  }
  else{
    navel.style.visibility = 'visible';
  }
  head.style.height = '80px';
  ham.style.transform = 'translateY(-38px)';
}

window.addEventListener('resize', resetHeaderWidth);


const scrip = document.createElement('script');
scrip.crossOrigin = 'anonymous';
scrip.src = 'https://kit.fontawesome.com/a936defa0a.js'; // Specify the path to your external CSS file here
document.body.appendChild(scrip);
