// Toggle menu when click on icon, hamburguer and X
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}

// Hide menu when click on item
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', () => {
        nav.classList.remove('show')
    })
}

// Change page's header when scroll is used 
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

const changeHeaderOnScroll = () => window.scrollY >= navHeight ? header.classList.add('scroll') : header.classList.remove('scroll')
    
// Swiper: Testimonials' Slider 
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
});

// Scroll Reveal: Show elements when scroll page
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testmonials .testimonials,
    #contact .text, #contact .links,
    #footer .brand, #footer .social
    `, 
    { interval: 100 }
)

// Button back to top
const btnBackToTop = document.querySelector('.back-to-top')
function functionBackToTop() { window.scrollY >= 560 ? btnBackToTop.classList.add('show') : btnBackToTop.classList.remove('show') }

window.addEventListener('scroll', () => {
    changeHeaderOnScroll()
    functionBackToTop()
})