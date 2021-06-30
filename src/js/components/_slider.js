const slider = new Swiper('.swiper-container', {
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  spaceBeteeen: 0,
  autoplay: {
    delay: 5000,
  },
  keyboard: {
    enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//clients
const clientsSwiper = new Swiper('.clients__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.clients__button-next',
    prevEl: '.clients__button-prev',
  },
});