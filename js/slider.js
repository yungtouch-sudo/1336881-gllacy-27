var slides = document.querySelectorAll('.slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);
var header = document.querySelector('.header');
var mainAvantages = document.querySelector('.main-advantages');
var mainPreview = document.querySelector('.main_preview');

var shopInfo = document.querySelector('.shop-info');
var mainNews = document.querySelector('.main-news');
var footer = document.querySelector('.footer');

var colors = ['#849d8f', '#8996a6', '#9d8b84'];
var currentColor = 0;

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slide showing';
  currentColor += 1;
  if (currentColor >= colors.length) {
    currentColor = 0;
  }

  header.style.background = colors[currentColor];
  mainAvantages.style.background = colors[currentColor];
  mainPreview.style.background = colors[currentColor];
  shopInfo.style.background = colors[currentColor];
  mainNews.style.background = colors[currentColor];
  footer.style.background = colors[currentColor];
};
