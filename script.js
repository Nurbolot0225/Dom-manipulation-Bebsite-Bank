'use strict';

///////////////////////////////////////
// Modal window

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
  '.btn--show-modal-window'
);

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

// Scroll Service
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', function() {
  section1.scrollIntoView({ behavior: 'smooth'});
})

// Виды Событий И Обработчиков Событий

const h1 = document.querySelector('h1');

const mouseEvent = function(e) {
  h1.style.backgroundColor = 'yellow';
}
h1.addEventListener('mouseenter', mouseEvent)

setTimeout(() => h1.style.backgroundColor = '', 3000);
