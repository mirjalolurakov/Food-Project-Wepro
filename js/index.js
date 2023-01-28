let modalWindow = document.querySelector('.modal')
let openBtnWhite = document.querySelector('.btn_white')
let closeBtnWhite = document.querySelector('.modal__close')
let openBtnDark = document.querySelector('.btn_dark')
let closeBtnDark = document.querySelector('.modal__close')
let modalBg = document.querySelector('.modal__bg')

openBtnWhite.onclick = () => {
    modalWindow.style.display = 'flex'
    modalBg.style.display = 'block'


    setTimeout(() => {
        modalWindow.style.opacity = '1'
        modalBg.style.opacity = '1'
        modalWindow.style.scale = '1'
        modalWindow.style.rotate = '0deg'

    }, 200)

}



closeBtnWhite.onclick = () => {
    modalWindow.style.display = 'none'
    modalWindow.style.rotate = '360deg'
    modalWindow.style.scale = '.2'
    modalWindow.style.opacity = '0'
    modalBg.style.opacity = '0'

    setTimeout(() => {
        modalWindow.style.display = 'none'
        modalBg.style.display = 'none'
    }, 200)
}




openBtnDark.onclick = () => {
    modalWindow.style.display = 'flex'
    modalBg.style.display = 'block'

    setTimeout(() => {
        modalBg.style.display = "none"
        modalWindow.style.opacity = '1'
        modalBg.style.opacity = '1'
        modalWindow.style.scale = '1'
        modalWindow.style.rotate = '0deg'

    }, 200)
}

closeBtnDark.onclick = () => {
    modalWindow.style.display = 'none'
    modalWindow.style.rotate = '360deg'
    modalWindow.style.scale = '.2'
    modalWindow.style.opacity = '0'
    modalBg.style.opacity = '0'

    setTimeout(() => {
        // modalWindow.style.display = 'none'
        modalBg.style.display = 'none'
    }, 200)
}

const slides = document.querySelectorAll('.offer__slide')
const next = document.querySelector('.offer__slider-next')
const prev = document.querySelector('.offer__slider-prev')
const currentSlideNum = document.querySelector('#current')
let lideIndex = 0

function ShowSlides(n) {
    slides.forEach(slide => {
        slide.classList.add('hide')
    })
    slides[n].classList.remove('hide')
    slides[n].classList.add('show', 'fade')
}
ShowSlides(lideIndex)
currentSlideNum.textContent = `0${lideIndex + 1}`

next.onclick = () => {
    if (lideIndex >= slides.length - 1) {
        lideIndex = -1
    }
    lideIndex++
    ShowSlides(lideIndex)
    currentSlideNum.textContent = `0${lideIndex + 1}`

}

prev.onclick = () => {
    if (lideIndex < 1) {
        lideIndex = slides.length
    }
    lideIndex--
    ShowSlides(lideIndex)
    currentSlideNum.textContent = `0${lideIndex + 1}`

}

const allTabs = document.querySelectorAll('div[data-type]')
const allTabContent = document.querySelectorAll('.tabcontent')
const tabContainer = document.querySelectorAll('div[data-tab]')
const tab1 = document.querySelector('#tab-0')
const tab2 = document.querySelector('#tab-1')
const tab3 = document.querySelector('#tab-2')
const tab4 = document.querySelector('#tab-3')

allTabs.forEach((tab, index) => {

    tab.onclick = () => {
        if (index == 0) {
            tab1.style.display = 'block'
            tab2.style.display = 'none'
            tab3.style.display = 'none'
            tab3.style.display = 'none'
        } else if (index == 1) {
            tab1.style.display = 'none'
            tab2.style.display = 'block'
            tab3.style.display = 'none'
            tab3.style.display = 'none'
        } else if (index == 2) {
            tab1.style.display = 'none'
            tab2.style.display = 'block'
            tab3.style.display = 'none'
            tab3.style.display = 'none'
        } else if (index == 3) {
            tab1.style.display = 'none'
            tab2.style.display = 'none'
            tab3.style.display = 'none'
            tab3.style.display = 'block'
        }
    }
})

// for (let tab of allTabs) {
//     tab.addEventListener('click', function () {
//         const content = document.querySelector('#' + tab.dataset.type)
//         content.classList.remove('hide')
//     })
// }