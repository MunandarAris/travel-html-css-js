let navbar = document.querySelector('nav');

document.querySelector('.icons-bars').onclick = () => {
    navbar.classList.add('active')
}

document.querySelector('.close-icons').onclick = () => {
    navbar.classList.remove('active')
}

window.addEventListener('scroll', () => {
    navbar.classList.remove('active')
})

let searchArea = document.querySelector('.serach-form');

document.querySelector('.icons-search').onclick = () => {
    searchArea.classList.add('active-search')
}

document.querySelector('.close-icons-search').onclick = () => {
    searchArea.classList.remove('active-search')
}

window.onscroll = () => {
    searchArea.classList.remove('active-search')
}

let swiper = new Swiper(".home-slider", {
    loop : true,
    grabCursor : true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('header-active', window.scrollY > 20)
})

let swiperShop = new Swiper(".shop-slider", {
    loop : true,
    grabCursor : true,
    spaceBetween: 20,
    breakpoints: {
        0 : {
            slidesPerView : 2
        },
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 5,
        },
    }
});

let swiperPriviews = new Swiper(".riviews-swiper", {
    spaceBetween: 10,
    grabCursor : true,
    loop : true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
