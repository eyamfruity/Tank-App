$(document).ready(function(){
    //Flat Scroll
    let hashLink = $("a[href^='#']");

    hashLink.click(function(){
        let hashLinkVal = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(hashLinkVal).offset().top+"px"
        });
    });

    //Nav Burger
    let navBurger = $('.nav-burger');
    let navList = $('.nav__list');
    let navItem = $('.nav__item');

    navBurger.click(function(){
        navBurger.toggleClass('nav-burger_active');
        navList.toggleClass('nav__list_active');
    });
    navItem.click(function(){
        navBurger.toggleClass('nav-burger_active');
        navList.toggleClass('nav__list_active');
    });

    //Form
    let form = $('form');
    let btn = $('.btn');

    form.validate({
        rules: {
            email: 'required'
        }
    });
    btn.click(function(){
        if(form.valid()){
            $.ajax({
                type: 'POST',
                url: form.attr('action'),
                // dataType: 'html',
                data: form.serialize()
            }).done(function(){
                form.trigger('reset');
            });
            return false;
        }
    });

    //Slider
    $('.about-us-slider').slick({
        dots: true,
        arrows: false
    });

    //Page Speed
    document.addEventListener('touchstart', onTouchStart, {passive: true});
    document.addEventListener('scroll', onScroll, {passive: true});
});
