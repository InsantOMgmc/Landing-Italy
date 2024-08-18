const burger = document.querySelector('.burger');
const links = document.querySelectorAll('a[href*="#"]');
const body = document.body;
const nav = document.querySelector('.header__nav');
const header = document.querySelector('.header');
// Burger
burger.addEventListener('click', function () {
  this.classList.toggle('active');
  nav.classList.toggle('open');
  body.classList.toggle('lock');
  header.style.animation = 'none';
  header.style.opacity = '1';
});

// smooth scrolling
links.forEach(function (link) {
  link.addEventListener('click', event => {
    event.preventDefault();

    const blockId = link.getAttribute('href').substring(1);
    if (blockId) {

      document.getElementById(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      nav.classList.remove('open');
      body.classList.remove('lock');
      burger.classList.remove('active');
    }
  });

});

if (window.innerWidth < 1450) {
  const aboutBg = document.querySelector(".about__bg");
  aboutBg.classList.remove('rightShow')
  aboutBg.classList.add('fade-bottom');

  const leftShowItems = document.querySelectorAll('.leftShow')
  leftShowItems.forEach(element => {
    element.classList.remove('leftShow');
    element.classList.add('fade-bottom');
  })
}