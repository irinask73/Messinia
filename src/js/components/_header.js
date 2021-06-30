
const burger = document.querySelector('[data-burger]');
const menu = document.querySelector('[data-menu]');
const header = document.querySelector('[data-header]');
const firstBlock = document.querySelector('.slider');

burger.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('burger--active');
  menu.classList.toggle('menu--active');
  header.classList.toggle('bg--active');
});

//fixed header
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY;
  let firstBlockCenter = firstBlock.offsetHeight / 2;
 (scrollTop >= firstBlockCenter) ? header.classList.add('header--scroll') : header.classList.remove('header--scroll');
  });
});