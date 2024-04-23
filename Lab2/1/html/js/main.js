const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');
const spans = document.querySelectorAll('.menu__btn span');

let isWhite = false;

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');

    spans.forEach(span => {
        if (isWhite) {
            span.style.backgroundColor = "#000000";
        } else {
            span.style.backgroundColor = "#FFFFFF";
        }
    });

    isWhite = !isWhite;
});

const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1120: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
    },
});




