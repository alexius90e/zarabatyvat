
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

const themeTogglers = document.querySelectorAll('.theme-toggler');

themeTogglers.forEach((themeToggler) => {
  themeToggler.addEventListener('click', () => {
    themeTogglers.forEach((toggler) => toggler.classList.toggle('theme-toggler_dark'));
    document.body.classList.toggle('dark');
  });
});
