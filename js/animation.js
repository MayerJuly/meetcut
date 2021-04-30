

document.body.onload= function() {
    let preload = document.getElementById('pagePreloader')
    setTimeout(function () {
        if (!preload.classList.contains('done')){
            preload.classList.add('done')
            const animItems = document.querySelectorAll('._anim')

            if (animItems.length > 0) {
                window.addEventListener('scroll', animOnScroll)

                function animOnScroll() {
                    for (let index = 0; index < animItems.length; index++) {
                        const animItem = animItems[index]
                        const animItemHeight = animItem.offsetHeight
                        const animItemOffset = offset(animItem)
                        const animStart = 4

                        let animItemPoint = window.innerHeight - animItemHeight / animStart

                        if (animItemHeight > window.innerHeight) {
                            animItemPoint = window.innerHeight - window.innerHeight / animStart
                        }

                        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                            animItem.classList.add('_active')
                        } else {
                            if (!animItem.classList.contains('_anim-no-hide'))
                                animItem.classList.remove('_active')
                        }
                    }
                }

                function offset(el) {
                    const rect = el.getBoundingClientRect(),
                        scrollTop = window.pageYOffset || document.documentElement.scrollTop
                    return (rect.top + scrollTop)

                }

                setTimeout(() => {
                    animOnScroll()
                }, 200)

                window.addEventListener('resize', checkNav)

                function checkNav() {
                    if (document.documentElement.clientWidth < 860) {
                        const header = document.getElementById('header')
                        header.classList.remove('_anim')
                    }
                }

                checkNav()
            }
        }

    }, 2000)
}
