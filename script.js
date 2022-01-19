const menu = document.querySelector('#mobile-menu')

const menuLinks = document.querySelector('.navbar-menu')

const navLogo = document.querySelector('.navbar-logo')

const body = document.querySelector('body')


// Display mobile menu

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero', {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3,
})

gsap.from('.animate-services', {
    scrollTrigger: '.animate-services',
    duration: 0.6,
    opacity: 0,
    x: -150,
    stagger: 0.2,
})

gsap.from('.animate-img', {
    // scrollTrigger: '.animate-services',
    duration: 0.9,
    opacity: 0,
    y: -200,
})

gsap.from('.animate-membership', {
    scrollTrigger: '.animate-membership',
    duration: 0.6,
    opacity: 0,
    x: -150,
    stagger: 0.3,
    delay: 0.5, 
})

gsap.from('.animate-card', {
    scrollTrigger: '.animate-card',
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.2, 
})

gsap.from('.animate-team', {
    scrollTrigger: '.animate-team',
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.2, 
})

gsap.from('.animate-email', {
    scrollTrigger: '.animate-email',
    duration: 0.6,
    opacity: 0,
    x: -150,
    stagger: 0.3,
    delay: 0.4, 
})