$(document).ready(function () {
    function setTop(el) {
        var $top = el.outerHeight() - el.find('.title').outerHeight();
        el.css('top', $top);
    }
    function deleteBr() {
        if ($(window).width() > 639) {
            $('.h1').find('br').detach();
        }
    }
    function changeServicesClass(){
        var sc = $('.services').find('.content');
        if ($(this).outerWidth() > 639 ) {
            sc.removeClass('full').addClass('static');
        }else{
            sc.removeClass('static').addClass('full');
        }
    }

    deleteBr();
    changeServicesClass();
    $('.slider').find('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        items: 1
    });
    $('#schedule').find('.owl-carousel').owlCarousel({
        nav: true,
        dots: false,
        responsive: { //РђРґР°РїС‚РёРІРЅРѕСЃС‚СЊ. РљРѕР»-РІРѕ РІС‹РІРѕРґРёРјС‹С… СЌР»РµРјРµРЅС‚РѕРІ РїСЂРё РѕРїСЂРµРґРµР»РµРЅРЅРѕР№ С€РёСЂРёРЅРµ.
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            915: {
                items: 3
            },
            1300:{
                items: 4
            }
        }
    });
    $('.partners').find('.owl-carousel').owlCarousel({
        nav: true,
        dots: false,
        responsive: { //РђРґР°РїС‚РёРІРЅРѕСЃС‚СЊ. РљРѕР»-РІРѕ РІС‹РІРѕРґРёРјС‹С… СЌР»РµРјРµРЅС‚РѕРІ РїСЂРё РѕРїСЂРµРґРµР»РµРЅРЅРѕР№ С€РёСЂРёРЅРµ.
            0: {
                items: 1
            },
            640: {
                items: 3
            },
            1020: {
                items: 4
            }
        }
    });
    $('.slider').find('button.owl-dot').each(function (i) {
        var n = 0;
        if (i < 9) {
            n = '0' + (++i);
        } else {
            n = ++i;
        }
        $(this).find('span').html(n);
    });
    $(window).resize(function () {
        changeServicesClass();
        var $items = $('.text-item'),
            $itemContainer = $items.find('.preview-fluid');

        $itemContainer.each(function (i, el) {
            setTop($(this));
        });

    });
    $('.mobile-button').on('click', function () {
        var $menu = $('.menu-list'),
            $items = $menu.find('li'),
            $l = $items.length,
            i = 0,
            $item = '';
        if ($menu.hasClass('closed')) {
            setTimeout(function o() {
                $item = $items[i];
                $item.style.left = '0';
                i++;
                if (i < $l) {
                    setTimeout(o, 100);
                }
            }, 100);
            $menu.removeClass('closed');
        }
        else {
            i = $l;
            setTimeout(function o() {
                i--;
                $item = $items[i];
                $item.style.left = '-100%';
                if (i > 0) {
                    setTimeout(o, 100);
                }
                else {
                    $menu.addClass('closed');
                }
            }, 100);
        }
    });

    var $items = $('.text-item'),
        $itemContainer = $items.find('.preview-fluid');

    $itemContainer.each(function (i, el) {
        setTop($(this));
    });

    $items.mouseenter(function () {
        $(this).find('.preview-fluid').css('top', '0');
    }).mouseleave(function () {
        setTop($(this).find('.preview-fluid'));
    });

    var $inp = $('.uw-authform-input-container input');
    $inp.each(function () {
        if (!!$(this).val())
            $(this).closest('.uw-authform-formgroup-container').find('.uw-authform-label-container').hide();
    });
    $inp.focus(function () {
        $(this).closest('.uw-authform-formgroup-container').find('.uw-authform-label-container').hide();
    }).blur(function () {
        if (!$(this).val())
            $(this).closest('.uw-authform-formgroup-container').find('.uw-authform-label-container').show();
    });
    var $textarea = $('.uw-authform-input-container textarea');
    if (!!$textarea.html())
        $textarea.closest('.uw-authform-formgroup-container').find('.uw-authform-label-container').hide();
    $textarea.focus(function () {
        $(this).closest('.uw-authform-formgroup-container').find('.uw-authform-label-container').hide();
    }).blur(function () {
        if (!$(this).val())
            $(this).closest('.uw-authform-formgroup-container').find('.uw-authform-label-container').show();
    });

});