'use strict';

///////////////////////////////////////

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll('.btn--show-modal-window');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContents = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

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

// Вкладки
tabContainer.addEventListener('click', function(e) {
  const clickedButton = e.target.closest('.operations__tab');
  // Guard clause - Пункт охраны
  if (!clickedButton) return

  // Активная вкладка
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'))
  clickedButton.classList.add('operations__tab--active')

  // Активная контент
  tabContents.forEach(content => content.classList.remove('operations__content--active'))
  document.querySelector(`.operations__content--${clickedButton.dataset.tab}`)
  .classList.add('operations__content--active')
})

// Анимация потускнения на панели навигации
const navLinksHoverAnimation = function(e) {
  if (e.target.classList.contains('nav__link')) {
    const linkOver = e.target;
    const siblingLinks = linkOver.closest('.nav__links')
      .querySelectorAll('.nav__link');
    const logo = linkOver.closest('.nav')
      .querySelector('img');
    const logoText = linkOver.closest('.nav')
      .querySelector('.nav__text');

    siblingLinks.forEach(el => {
      if (el !== linkOver) el.style.opacity = this;
    })
    logo.style.opacity = this;
    logoText.style.opacity = this;
  }
}

// Работа с аргументами при помощи bind() / this
nav.addEventListener('mouseover', navLinksHoverAnimation.bind(0.4));

nav.addEventListener('mouseout', navLinksHoverAnimation.bind(1));

// Sticky navigation
const navHeight = nav.getBoundingClientRect().height;
const getStickyNav = function(entries) {
  const entry = entries[0]
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

const headerObserver = new IntersectionObserver(getStickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`,
})
headerObserver.observe(header);

//  Появление частей сайта
const allSections = document.querySelectorAll('.section');

const appearanceSection = function(entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) return
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(appearanceSection, {
  root: null,
  threshold: 0.2,
})

allSections.forEach(function(section) {
  sectionObserver.observe(section)
  section.classList.add('section--hidden');
})

// Имплементация lazy loading для изображений
const lazyImages = document.querySelectorAll('img[data-src]');

const loadImages = function(entries, observer) {
  const entry = entries[0];

  if (!entry.isIntersecting) return;

  // Меняем изображение с высоким разришением
  entry.target.src = entry.target.dataset.src;
  // entry.target.classList.remove('lazy-img');

  entry.target.addEventListener('load', function() {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
}

const lazyImagesObserver = new IntersectionObserver(loadImages, {
  root: null,
  threshold: 0.7,
});
lazyImages.forEach(image => lazyImagesObserver.observe(image));


//
/////// Практика ❤️❤️❤️JavaScript❤️❤️❤️ learn //////
//

// Sticky navigation

// const section1Coords = section1.getBoundingClientRect();
//
// window.addEventListener('scroll', function() {
//   if (window.scrollY > section1Coords.top) {
//     nav.classList.add('sticky');
//   } else{
//     nav.classList.remove('sticky');
//   }
// })

// Sticky navigation - Intersection Observer API

// const observerCallback = function(entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// }
//
// const observerOptions = {
//   root: null,
//   threshold: [0, 0.2],
// }
//
// const observer = new IntersectionObserver(observerCallback, observerOptions);
// observer.observe(section1);

// document.querySelectorAll('.nav__link').forEach(function(htmlElement) {
//   htmlElement.addEventListener('click', function(e) {
//     e.preventDefault();
//     const href = this.getAttribute('href');
//     document.querySelector(href).scrollIntoView({behavior: 'smooth'})
//   })
// })

// Dom traversing (Перемешения по DOM)
// const h1 = document.querySelector('h1');

// Перемещение вниз (к потомкам)
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.firstElementChild);
// console.log(h1.firstElementChild.style.color = 'yellow');
// console.log(h1.lastElementChild);
// console.log(h1.lastElementChild.style.color = 'red');

// Перемещение вверх (к родителям)
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// const h2 = document.querySelector('h2');
// console.log(h2);
// h2.closest('.section').style.backgroundColor = 'blue';

// Перемещение в стороны
// console.log(h2.previousElementSibling);
// console.log(h2.nextElementSibling);

// console.log(h1.parentElement.children);

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