var navbar = document.getElementById('navbar'); 
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 2,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        grabCursor: true,
        loop: true,
        parallax: true,
        nextButton: '.swiper-button-next',
   		prevButton: '.swiper-button-prev'
    });

 window.onscroll = function(){
    if(document.body.scrollTop > 540) {
        navbar.style.backgroundColor = 'black';
    }else {
        navbar.style.backgroundColor = 'transparent';
    }

 }

