import '../scss/style.scss';

console.log('Works!');

// Импортируйте стили Swiper
import 'swiper/swiper-bundle.css';

// Импортируйте сам Swiper
import Swiper from 'swiper/bundle';

// Инициализация Swiper после загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
    
    let firstSwiper, secondSwiper, thirdSwiper;

    function initSwipers() {
        // Инициализация первого слайдера
        firstSwiper = new Swiper('.first-swiper', {
            loop: false,
            navigation: {
                nextEl: '.first-swiper .swiper-button-next',
                prevEl: '.first-swiper .swiper-button-prev',
            },
            pagination: {
                el: '.first-swiper .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                120: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                250: {
                    slidesPerView: 1,
                    spaceBetween: 140,
                },
                350: {
                    slidesPerView: 2,
                    spaceBetween: 180,
                },
                600: {
                    slidesPerView: 3,
                    spaceBetween: 180,
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 80,
                },
            },
        });
    
        // Второй слайдер
        const secondSwiper = new Swiper('.second-swiper', {
            loop: false,
            navigation: {
                nextEl: '.second-swiper .swiper-button-next',
                prevEl: '.second-swiper .swiper-button-prev',
            },
            pagination: {
                el: '.second-swiper .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                120: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                250: {
                    slidesPerView: 1,
                    spaceBetween: 140,
                },
                350: {
                    slidesPerView: 2,
                    spaceBetween: 180,
                },
                600: {
                    slidesPerView: 3,
                    spaceBetween: 180,
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 80,
                },
            },
        });
    
        // Третий слайдер
        const thirdSwiper = new Swiper('.third-swiper', {
            loop: false,
            navigation: {
                nextEl: '.third-swiper .swiper-button-next',
                prevEl: '.third-swiper .swiper-button-prev',
            },
            pagination: {
                el: '.third-swiper .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                250: {
                    slidesPerView: 1,
                    spaceBetween: 25,
                },
                400: {
                    slidesPerView: 2,
                    spaceBetween: 240,
                },
                650: {
                    slidesPerView: 3,
                    spaceBetween: 290,
                },
                900: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            },
        });
    
        // Инициализация второго слайдера
        secondSwiper = new Swiper('.second-swiper', {
            loop: false,
            navigation: {
                nextEl: '.second-swiper .swiper-button-next',
                prevEl: '.second-swiper .swiper-button-prev',
            },
            pagination: {
                el: '.second-swiper .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                120: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                250: {
                    slidesPerView: 1,
                    spaceBetween: 140,
                },
                350: {
                    slidesPerView: 2,
                    spaceBetween: 180,
                },
                600: {
                    slidesPerView: 3,
                    spaceBetween: 180,
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 80,
                },
            },
        });
    
        // Инициализация третьего слайдера
        thirdSwiper = new Swiper('.third-swiper', {
            loop: false,
            navigation: {
                nextEl: '.third-swiper .swiper-button-next',
                prevEl: '.third-swiper .swiper-button-prev',
            },
            pagination: {
                el: '.third-swiper .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                250: {
                    slidesPerView: 1,
                    spaceBetween: 25,
                },
                400: {
                    slidesPerView: 2,
                    spaceBetween: 240,
                },
                650: {
                    slidesPerView: 3,
                    spaceBetween: 290,
                },
                900: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            },
        });
    }
    
    function checkWidth() {
        const swiperContainers = document.querySelectorAll('.swiper');
    
        swiperContainers.forEach(swiperContainer => {
            if (window.innerWidth > 815) {
                swiperContainer.style.display = 'none'; // Скрыть Swiper при ширине больше 815px
            } else {
                swiperContainer.style.display = 'block'; // Показать Swiper при ширине меньше или равной 815px
            }
        });
    }
    
    // Проверка ширины при загрузке страницы
    checkWidth();
    initSwipers(); // Инициализация свайперов
    
    // Проверка ширины при изменении размера окна
    window.addEventListener('resize', function() {
        checkWidth();
    
        if (window.innerWidth <= 815) { // Если ширина меньше или равна 815px
            if (!firstSwiper) initSwipers(); // Инициализируем только если еще не инициализировано
        } else { 
            if (firstSwiper) { 
              firstSwiper.destroy(); 
              firstSwiper = null; 
              secondSwiper.destroy(); 
              secondSwiper = null; 
              thirdSwiper.destroy(); 
              thirdSwiper = null; 
              checkWidth(); // Обновляем видимость контейнеров после уничтожения свайперов
          }
       }
    })
});

var showButton = document.querySelector('#block__link-list__show-button'); // кнопка Показать всё/Скрыть всё
var showButtonImg = document.querySelector('#block__link-list__show-button__img'); // иконка рядом с кнопкой^
var linkListItem = document.querySelectorAll('.block__link-list__li-hidden'); // скрытые элементы
var isVisible = false; // проверка отображения

function checkWidth() {
    const swiperContainers = document.querySelectorAll('.swiper'); // Получаем все элементы с классом .swiper

    swiperContainers.forEach(swiperContainer => {
        if (window.innerWidth > 815) {
            swiperContainer.style.display = 'none'; // Скрыть Swiper при ширине больше 798px
        } else {
            swiperContainer.style.display = 'block'; // Показать Swiper при ширине меньше или равной 798px
        }
    });
}

// Проверка ширины при загрузке страницы
checkWidth();

// Проверка ширины при изменении размера окна
// Добавляем обработчик события resize для правильной функции
window.addEventListener('resize', checkScreenSize);

function checkScreenSize() {
    const li7 = document.querySelector('.block__link-list__li-7');
    const li8 = document.querySelector('.block__link-list__li-8');

    if (window.innerWidth > 1080) {
        li7.classList.remove('hidden');
        li8.classList.remove('hidden');
        li7.classList.remove('block__link-list__li-hidden');
        li8.classList.remove('block__link-list__li-hidden');
    } else {
        li7.classList.add('hidden');
        li8.classList.add('hidden');
        li7.classList.add('block__link-list__li-hidden');
        li8.classList.add('block__link-list__li-hidden');
    }
}

// Проверяем размер экрана при загрузке страницы
checkScreenSize();

// Добавляем обработчик события для изменения размера окна
window.addEventListener('resize', checkScreenSize);

showButton.addEventListener('click', function() {
    isVisible = !isVisible;
    console.log(linkListItem);
    
    linkListItem.forEach(function(item) {
        item.style.display = isVisible ? 'block' : 'none'; // Показываем или скрываем элементы
        showButtonImg.setAttribute('href', isVisible ? './img/expand.svg' : './img/expand.svg');
    });
    showButtonImg.setAttribute('href', isVisible ? './img/expand.svg' : './img/expand.svg');
    showButton.textContent = isVisible ? 'Скрыть всё' : 'Показать всё'; 
    
    // Изменяем источник изображения правильно
    showButtonImg.setAttribute('href', isVisible ? './img/expandup.svg' : './img/expand.svg');
    // Или если требуется xlink:
    // showButtonImg.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', isVisible ? './img/expand.svg' : './img/expanddown.svg');

    checkScreenSize(); // Убедитесь, что эта функция определена
});



var showButton1 = document.querySelector('#repair-type__list__show-button'); // кнопка Показать всё/Скрыть всё
var showButtonImg1 = document.querySelector('#repair-type__list__show-button__img'); // иконка рядом с кнопкой^
var linkListItem1 = document.querySelectorAll('.repair-type__link-a-hidden'); // скрытые элементы
var isVisible1 = false; // проверка отображения

showButton1.addEventListener('click', function() {
    isVisible1 = !isVisible1;
    console.log(linkListItem1);
    
    linkListItem1.forEach(function(item) {
        item.style.display = isVisible1 ? 'block' : 'none'; // Показываем или скрываем элементы
        showButtonImg1.setAttribute('href', isVisible1 ? './img/expand.svg' : './img/expand.svg');
    });
    showButtonImg1.setAttribute('href', isVisible1 ? './img/expand.svg' : './img/expand.svg');
    showButton1.textContent = isVisible1 ? 'Скрыть всё' : 'Показать всё'; 
    
    // Изменяем источник изображения правильно
    showButtonImg1.setAttribute('href', isVisible1 ? './img/expandup.svg' : './img/expand.svg');
    // Или если требуется xlink:
    // showButtonImg.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', isVisible ? './img/expand.svg' : './img/expanddown.svg');

    checkScreenSize(); // Убедитесь, что эта функция определена
});


function setupShowHideButton(buttonId, imgId, hiddenClass) {
    const showButton = document.querySelector(buttonId);
    const showButtonImg = document.querySelector(imgId);
    const linkListItems = document.querySelectorAll(hiddenClass);
    
    let isVisible = false;

    showButton.addEventListener('click', function () {
        isVisible = !isVisible;

        linkListItems.forEach(item => {
            item.style.display = isVisible ? 'block' : 'none';
        });

        showButton.textContent = isVisible ? 'Скрыть всё' : 'Показать всё';
        showButtonImg.setAttribute('href', isVisible ? './img/expandup.svg' : './img/expand.svg');

        // Обновите высоту родительского контейнера
        const parentContainer = showButton.closest('.grid-container');
        if (parentContainer) {
            parentContainer.style.height = isVisible ? 'auto' : 'initial'; // Установите высоту в auto при раскрытии
        }
        
        checkScreenSize(); // Убедитесь, что эта функция определена в вашей области видимости
    });
}