const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})

const nextEl = document.getElementsByClassName('swiper-button-next')[0]
const prevEl = document.getElementsByClassName('swiper-button-prev')[0]
nextEl.addEventListener('click', setBg)
prevEl.addEventListener('click', setBg)
window.addEventListener('load', setBg)

function setBg() {
    const img = document.getElementsByClassName('swiper-slide-active')[0].childNodes[0]
    const background = document.getElementsByClassName('background')[0]

    background.style.backgroundImage = 'url(' + img.src + ')';
}