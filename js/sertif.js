$(document).ready(function () {
    //counter
    if((jQuery('.sertif__counter').length)||(jQuery('.cart-item__counter').length)) {
        $('.qtyplus').click(function(e){
            e.preventDefault();
            // Get the field name
            fieldName = $(this).attr('field');
            // Get its current value
            var currentVal = parseInt($(this).parent().find('input[name='+fieldName+']').val());
            var currentSum = parseInt($(this).parent().parent().find('input[name='+fieldName+'Sum]').val());
            // If is not undefined
            if (!isNaN(currentVal)) {
                // Increment
                $(this).parent().find('input[name='+fieldName+']').val(currentVal + 1);
                $(this).parent().parent().find('input[name='+fieldName+'Sum]').val(currentSum + 4500+' p');
            } else {
                // Otherwise put a 0 there
                $(this).parent().find('input[name='+fieldName+']').val(0);
                $(this).parent().parent().find('input[name='+fieldName+'Sum]').val(0 +' р');
            }
        });
        // This button will decrement the value till 0
        $(".qtyminus").click(function(e) {
            e.preventDefault();
            // Get the field name
            fieldName = $(this).attr('field');
            // Get its current value
            var currentVal = parseInt($(this).parent().find('input[name='+fieldName+']').val());
            var currentSum = parseInt($(this).parent().parent().find('input[name='+fieldName+'Sum]').val());
            // If it isn't undefined or its greater than 0
            if (!isNaN(currentVal) && currentVal > 0) {
                // Decrement one
                $(this).parent().find('input[name='+fieldName+']').val(currentVal - 1);
                $(this).parent().parent().find('input[name='+fieldName+'Sum]').val(currentSum - 4500+' p');
            } else {
                // Otherwise put a 0 there
                $(this).parent().find('input[name='+fieldName+']').val(0);
                $(this).parent().parent().find('input[name='+fieldName+'Sum]').val(0 +' р');
            }
        });
    }
    //slider
    $('.sertif__slider').find('.owl-carousel').owlCarousel({
        loop:true,
        nav: true,
        dots: false,
        margin: 30,
        responsive: { 
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            680: {
                items: 2
            },
            1080:{
                items: 3
            }
        }
    });
    $( ".sertif__slider .owl-prev").html('<span aria-label="Previous"><svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><path id="left" d="M130 1781a1 1 0 0 0 0-2h-11.586l5.293-5.293a1 1 0 0 0-1.414-1.414l-7 7a.997.997 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414l-5.293-5.293z"/></defs><use xlink:href="#left" transform="translate(-115 -1772)"/></svg></span>');
    $( ".sertif__slider .owl-next").html('<span aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="next" d="M1311 1779a1 1 0 0 1 0-2h11.586l-5.293-5.293a1 1 0 0 1 1.414-1.414l7 7a.997.997 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414l5.293-5.293z"/></defs><use xlink:href="#next" transform="translate(-1310 -1770)"/></svg></span>');
    //select-number form
    if(jQuery('.phone-mask').length) {
        jQuery(function($){
        $(".phone-mask").mask("+7(999) 999-9999");
    });
    } 

    //popup
    if(jQuery('.btn--popup').length) {
        $(".btn--popup").click(function(e) {
            // e.preventDefault();
            let popupPaid = document.querySelector('#popupPaid');
            popupPaid.classList.remove('disabled');
            popupPaid.classList.add('flex');


        });
        let popupPaidWrap = document.querySelector('.popupPaid__wrap'),
            popupPaidClose = document.querySelector('#popupPaid-close');
            popupPaid.addEventListener('click', e => {
            if (e.target !== popupPaidWrap && e.target == popupPaid) {
                sfCLose();
            }
        });
        function sfCLose() {
            setTimeout("popupPaid.classList.add('disabled')", 100);
            setTimeout("popupPaid.classList.remove('flex')", 200);
        }
        popupPaidClose.addEventListener('click', () => {
            sfCLose();
        });
    }

});