$(function(){

    let burger = $('.header__burger')
    let nav = $('.header__nav')

    burger.on('click',(e)=>{
        e.preventDefault()

        nav.toggleClass('active')
        burger.toggleClass('active')
    })


});