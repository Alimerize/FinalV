import '../scss/style.scss';

console.log('Works!');

// Импортируйте стили Swiper
import 'swiper/swiper-bundle.css';

// Импортируйте сам Swiper
import Swiper from 'swiper/bundle';

// Инициализация Swiper после загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
    const swipers = document.querySelectorAll('.swiper'); // Получаем все элементы с классом .swiper

    swipers.forEach(swiperElement => {
        new Swiper(swiperElement, {
            // Опции Swiper
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination', // Элемент для пагинации
                clickable: true, // Возможность клика по пагинации
            },
            breakpoints: {
                120: {
                    slidesPerView: 2,
                    spaceBetween: 160, // 20px между слайдами на экранах шириной 640px и более
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 50, // 40px между слайдами на экранах шириной 1024px и более
                },
            },
        });
    });
});

var showButton = document.querySelector('#block__link-list__show-button'); // кнопка Показать всё/Скрыть всё
var showButtonImg = document.querySelector('#block__link-list__show-button__img'); // иконка рядом с кнопкой^
var linkListItem = document.querySelectorAll('.block__link-list__li-hidden'); // скрытые элементы
var isVisible = false; // проверка отображения

function checkWidth() {
    const swiperContainers = document.querySelectorAll('.swiper'); // Получаем все элементы с классом .swiper

    swiperContainers.forEach(swiperContainer => {
        if (window.innerWidth > 798) {
            swiperContainer.style.display = 'none'; // Скрыть Swiper при ширине больше 798px
        } else {
            swiperContainer.style.display = 'block'; // Показать Swiper при ширине меньше или равной 798px
        }
    });
}

// Проверка ширины при загрузке страницы
checkWidth();

// Проверка ширины при изменении размера окна
window.addEventListener('resize', checkWidth);

function checkScreenSize() {
    const li7 = document.querySelector('.block__link-list__li-7');
    const li8 = document.querySelector('.block__link-list__li-8');

    if (window.innerWidth > 1120) {
        if (li7) li7.classList.remove('hidden');
        if (li8) li8.classList.remove('hidden');
    } else {
        if (li7) li7.classList.add('hidden');
        if (li8) li8.classList.add('hidden');
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
    });
    showButton.textContent = isVisible ? 'Скрыть всё' : 'Показать всё'; 
    showButtonImg.href = isVisible ? './img/expand.svg' : './img/expanddown.svg';
    checkScreenSize();
});