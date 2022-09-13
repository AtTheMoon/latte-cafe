const btns = document.querySelectorAll('#menu__btn')
const burger = document.querySelector('.preview__header_burger')
const burgerMenu = document.querySelector('.preview__mobile_menu')
const mobileOverlay = document.querySelector('.preview__mobile_overlay')

btns.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('#menu__btn.active').classList.remove('active')
        btn.classList.add('active')
    })
})

burger.addEventListener('click', ()=>{
    burgerMenu.style.transform = 'translate(0, 0%)'
    mobileOverlay.style.display  = 'block'
})

mobileOverlay.addEventListener('click', (e)=>{
    if(e.target !== burgerMenu){
        burgerMenu.style.transform = 'translate(0, -100%)'
        mobileOverlay.style.display  = 'none'
    }
})