'use strict';

///////////////////////////////////////

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll('.btn--show-modal-window');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1')

// Modal window
const openModalWindow = function (e) {
  e.preventDefault();
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModalWindow.forEach(button => button.addEventListener('click', openModalWindow));

btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});

// Scroll Service
btnScrollTo.addEventListener('click', function() {
  section1.scrollIntoView({ behavior: 'smooth'});
})

/// Делегирование событий
// Smooth page navigation
// 1. Добовляем event listener для ОБЩЕГО родителя
document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();
  console.log(e.target);
  // 2. Определить target элемент
  if (e.target.classList.contains('nav__link')) {
    const href = e.target.getAttribute('href');
    console.log(href);
    document.querySelector(href).scrollIntoView({behavior: 'smooth'})
  }
})

// document.querySelectorAll('.nav__link').forEach(function(htmlElement) {
//   htmlElement.addEventListener('click', function(e) {
//     e.preventDefault();
//     const href = this.getAttribute('href');
//     document.querySelector(href).scrollIntoView({behavior: 'smooth'})
//   })
// })

// Dom traversing (Перемешения по DOM)
const h1 = document.querySelector('h1');

// Перемещение вниз (к потомкам)
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.firstElementChild);
console.log(h1.firstElementChild.style.color = 'yellow');
console.log(h1.lastElementChild);
console.log(h1.lastElementChild.style.color = 'red');

// Перемещение вверх (к родителям)
console.log(h1.parentNode);
console.log(h1.parentElement);

const h2 = document.querySelector('h2');
console.log(h2);
h2.closest('.section').style.backgroundColor = 'blue';

// Перемещение в стороны
console.log(h2.previousElementSibling);
console.log(h2.nextElementSibling);

console.log(h1.parentElement.children);


//
/////// Практика ❤️❤️❤️JavaScript❤️❤️❤️ learn //////
//


// Создание и вставка элементов

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = 'Мы используем на этом сайте для улучшения функциональности. <button class="btn btn--close-cookie">Ok!</button>';
// const header = document.querySelector('.header');
// header.append(message);
//
// document.querySelector('.btn--close-cookie').addEventListener('click', function() {
//   message.remove();
// });

// Стили

// message.style.backgroundColor = '#076785';
// message.style.width = '102%';
// console.log(message.style.width);
// console.log(message.style.color);
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).height);
// message.style.height = Number.parseFloat(getComputedStyle(message).height) + 50 + 'px';
// document.documentElement.style.setProperty('--color-first', 'yellow');

// Атрибуты

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.getAttribute('src'));
// console.log(logo.className);
//
// logo.alt = 'Лого Прекрасного Банка';
//
// // Не стандартный атрибут
// console.log(logo.developer);
// console.log(logo.getAttribute('developer'));
// logo.setAttribute('id', 'logo')
// console.log(logo);
//
// // classes
//
// logo.classList.add('a', 'b');
// logo.classList.remove('a', 'b')
// logo.classList.toggle('a',);
// logo.classList.contains('a');

// Виды Событий И Обработчиков Событий

// const h1 = document.querySelector('h1');
//
// const mouseEvent = function(e) {
//   h1.style.backgroundColor = 'yellow';
// }
// h1.addEventListener('mouseenter', mouseEvent)
//
// setTimeout(() => h1.style.backgroundColor = '', 3000);


// Event Propagation
// function getRandomInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
// const getRandomColor = () => `rgb(${getRandomInclusive(0, 255)}, ${getRandomInclusive(0, 255)}, ${getRandomInclusive(0, 255)})`;
//
// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   this.style.backgroundColor = getRandomColor();
//   console.log('Link', e.target, e.currentTarget);
//   console.log(this === e.currentTarget);
//   // Stop Propagation
//   e.stopPropagation();
// })
//
// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   this.style.backgroundColor = getRandomColor();
//   console.log('LinkS', e.target, e.currentTarget);
//   console.log(this === e.currentTarget);
// })
//
// document.querySelector('.nav').addEventListener('click', function(e) {
//   this.style.backgroundColor = getRandomColor();
//   console.log('NAV', e.target, e.currentTarget);
//   console.log(this === e.currentTarget);
// })
//
// document.querySelector('header').addEventListener('click', function(e) {
//   this.style.backgroundColor = getRandomColor();
//   console.log('HEADER', e.target, e.currentTarget);
//   console.log(this === e.currentTarget);
// })
//
// document.querySelector('body').addEventListener('click', function(e) {
//   this.style.backgroundColor = getRandomColor();
//   console.log('BODY', e.target, e.currentTarget);
//   console.log(this === e.currentTarget);
// })