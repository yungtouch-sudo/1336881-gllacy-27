

var slides = document.querySelectorAll('.slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
};



//var header = document.querySelector('.header');
//var colorPage = function(slideInterval){
  //if (slideInterval){
  //  header.classList.remove('backcolor1');
  //  header.classList.add('backcolor2');
//  }
//};
//colorPage();
