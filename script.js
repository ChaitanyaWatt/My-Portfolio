const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconCloses = document.querySelectorAll('.close_icon');


iconToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

iconCloses.forEach((iconCloses) => {
    iconCloses.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    })
});

// Change background header
function scrollHeader() {
    const header = document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);

// Hero type effect
const typed = document.querySelector('.typed');

if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

// Scroll sections active link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;

        let sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);


// Portfolio
let filterItems = document.querySelectorAll('.portfolio_filters li');

function activePortfolio() {
    filterItems.forEach(el => {
        el.classList.remove('filter-active');
        this.classList.add('filter-active');
    })
}

filterItems.forEach(el => {
    el.addEventListener('click', activePortfolio);
})

// mixitup filter portfolio
let mixerPortfolio = mixitup('.portfolio_warp-container', {
    selectors: {
        target: '.portfolio_item'
    },
    animation: {
        duration: 300
    }
})

//Testimonal Swiper
let swiper = new Swiper(".testimonal_container", {
    effect: 'slide',
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 100,
    breakpoints: {
        768: {
            slidesPerView: 2,
        }
    }
});

//Service section
let modalBtns = document.querySelectorAll('.services_button'),
    modalViews = document.querySelectorAll('.services_modal'),
    modalClose = document.querySelectorAll('.modal_close-icon');


let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtns, i) => {
    modalBtns.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach(el => {
    el.addEventListener('click', () => {
        modalViews.forEach(modalViews => {
            modalViews.classList.remove('active-modal')
        })
    })
})