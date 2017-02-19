var navbar = document.getElementById('navbar'); 

$('#navbarBtn').click(function(){
    $('#navMenu').slideToggle(300);
})

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

    if ($(window).width() <= 768){  
         swiper.slidesPerView = 1;
    }



