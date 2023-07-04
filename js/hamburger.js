const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header__menu');

hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('header__menu--active');
});
menu.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.classList.contains('header__tabs-link')) {
        hamburger.classList.remove('hamburger--active');
        menu.classList.remove('header__menu-active');
    }
});

const burgerClose = () => {
    if (hamburger.classList.contains('hamburger--active')) {
        hamburger.click()
    }
}
document.addEventListener('wheel', (e) => {
    burgerClose()
});


$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});