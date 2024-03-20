import './accordeon.js';

const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');

if (headerBurger && headerNav) {
  headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active');
    headerNav.classList.toggle('active');
    document.body.classList.toggle('hidden');
  });

  headerNav.addEventListener('click', (event) => {
    if (event.target.classList.contains('close')) {
      event.currentTarget.classList.remove('active');
      headerBurger.classList.remove('active');
      document.body.classList.remove('hidden');
    }
  });
}

const overviewSlider = new Swiper('.overview__slider .swiper', {
  slidesPerView: 1,
  spaceBetween: 18,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: '.overview__slider .swiper-pagination',
  },
  navigation: {
    nextEl: '.overview__slider .swiper-button-next',
    prevEl: '.overview__slider .swiper-button-prev',
  },
});
