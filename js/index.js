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





