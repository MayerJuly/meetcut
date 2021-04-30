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

});