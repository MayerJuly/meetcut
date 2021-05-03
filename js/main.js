$(function(){
    $('.preloader__content').addClass('active')

    let burger = $('.header__burger')
    let nav = $('.header__nav')

    burger.on('click',(e)=>{
        e.preventDefault()

        nav.toggleClass('active')
        burger.toggleClass('active')
    })

//    PRELOADER AUTO-TEXT
    let preloaderText = $('#preloaderText')

    function animateText() {
        const string = preloaderText.text()
        return preloaderText.each(function(){
            const $preloaderText = $(this)
            $preloaderText.html(string.replace(/./g, '<span class="new">$&</span>'))
            $preloaderText.find('span.new').each(function(i, el){
                setTimeout(function(){ $(el).addClass('div_opacity'); }, 70*i)
            })
        })
    }

    function showPreloaderText(){
        preloaderText.css('opacity','1')
        animateText()
    }
    showPreloaderText()


    $("[data-scroll]").on('click', function(event) {
        event.preventDefault()

        let elementID = $(this).data('scroll')
        let elementOffset = $(elementID).offset().top

        if(burger.hasClass('active')){
            nav.removeClass('active')
            burger.removeClass('active')
        }

            $('html, body').animate({
                scrollTop: elementOffset,
            }, 700)
    })

// //    Fixed button
//
//     let header = $('#header')
//     let intro = $('#intro')
//     let orderButton = $('#order')
//
//     let introH = intro.innerHeight()
//     let scrollPos = $(window).scrollTop()
//
//     checkScroll(scrollPos,introH)
//
//     $(window).on('scroll resize ', () => {
//         introH = intro.innerHeight()
//         scrollPos = $(this).scrollTop()
//         checkScroll(scrollPos,introH)
//     })
//
//     function checkScroll(scrollPos, introH) {
//         if(scrollPos > introH){
//             orderButton.addClass('fixed')
//         } else{
//             orderButton.removeClass('fixed')
//         }
//     }


    //    Modal

    const close = $('.js-close-popup')
    const modalOverlay = $('.overlay')
    const popup = $('.js-popup')
    const form = document.getElementById('form')
    const username = document.getElementById('username')
    const phone = document.getElementById('phone')


    function closeModal(close,object) {
        close.click(function (){
            object.removeClass('active')
        })
    }


    function closeModalOverlay(popup,object){
        $(document).mousedown(function (e) {
            if (e.target !== popup[0] && popup.has(e.target).length === 0) {
                object.removeClass('active')
            }
        })
    }

    $('.js-button-popup').click(function (){
        modalOverlay.addClass('active')
    })

    closeModal(close,modalOverlay)
    closeModalOverlay(popup,modalOverlay)

    form.addEventListener('submit',(e)=>{
        e.preventDefault()

        checkInputs();
    })

    function checkInputs(){
    //    get values from inputs
        const usernameValue = username.value.trim()
        const phoneValue = phone.value.trim()
        let error = false

        if(usernameValue === ''){
            setErrorFor(username, 'Введите ваше имя')
            error = true

        } else{
            setSuccessFor(username)
        }

        if(phoneValue === ''){
            setErrorFor(phone, 'Введите ваш номер телефона')
            error = true

        } else if(!validatePhone(phoneValue)){
            setErrorFor(phone, 'Неккоректный ввод номера телефона')
            error = true
        }
        else{
            setSuccessFor(phone)
        }

        if(!error){
                setTimeout(()=>{
                    modalOverlay.removeClass('active')
                    alert('Успешно отправлено')
                    form.reset()
                },1500)

        }
    }

    function setErrorFor(input,message){
        const formControl = input.parentElement // .form__control
        const small = formControl.querySelector('small')

        // add error message
        small.innerText = message
        // add error class
        formControl.classList.add('error')
    }

    function setSuccessFor(input){
        const formControl = input.parentElement // .form__control
        formControl.classList.remove('error')
    }

    function validatePhone(phone){
        let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        return regex.test(phone);
    }

});