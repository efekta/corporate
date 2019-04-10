$(document).ready(function($){


	$(".fancybox").fancybox();

	$('.reviews').owlCarousel({
	    loop:true,
	    margin:20,
	    nav: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        600:{
	            items:1,
	            nav:false
	        },
	        1000:{
	            items:3,
	            nav:true,
	            loop:false
	        }
	    }
	})
	$('.chef-owl').owlCarousel({
	    loop:true,
	    margin:10,
	    nav: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2.25,
	            nav:false,
	            margin:0
	        },
	        600:{
	            items:2.25,
	            nav:false
	        },
	        1000:{
	            items:3,
	            nav:true,
	            loop:false
	        },
	        1200:{
	            items:4,
	            nav:true,
	            loop:false
	        }
	    }
	})

var $ = jQuery;
var isMobile = false;
// mobile device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
$(window).bind("load", function() {
// copy default code before carousel loaded
var header_links__html = $('.chef-wrapp__list').html();
window_resize();
$(window).resize(function() {
window_resize();
});
function window_resize() {
// mobile
if ( $(window).width() <= 768 ) {
if ( !$('.chef-wrapp__list').find('.owl-carousel').hasClass('owl-loaded') ) {
$('.chef-wrapp__list').find('.owl-carousel').owlCarousel({
	dots: false,
	items: 2,
	loop: true,
	nav: false,
	// margin:10,
	responsive: {
		0: {
		items: 1.25
		},
		320: {
		items: 1.25
		},
		600: {
		items: 2
		},
		768: {
		items: 2
		},
		1200: {
		items: 3
		}
		},
		smartSpeed: 350
		});
	}
}
//desktop
else {
	if ( $('.chef-wrapp__list').find('.owl-carousel').hasClass('owl-loaded') ) {
	$('.chef-wrapp__list').find('.owl-carousel').remove();
	$('.chef-wrapp__list').append( chef-wrapp__list__html );
	}
	if ( !$('.chef-wrapp__list').find('.owl-carousel').length ) {
	$('.chef-wrapp__list').append( chef-wrapp__list__html );
	}
	}
}
});
	// accordion
	$('.set > span').on('click', function() {
	    if ($(this).hasClass("active")) {
	      $(this).removeClass("active");
	      $(this)
	        .siblings(".accordion-content")
	        .slideUp(200);
	      $(".set > span i")
	        .removeClass("fa-minus")
	        .addClass("fa-plus");
	    } else {
	      $(".set > span i")
	        .removeClass("fa-minus")
	        .addClass("fa-plus");
	      $(this)
	        .find("i")
	        .removeClass("fa-plus")
	        .addClass("fa-minus");
	      $('.set > span').removeClass('active');
	      $(this).addClass("active");
	      $('.accordion-content').slideUp(200);
	      $(this)
	        .siblings('.accordion-content')
	        .slideDown(200);
	    }
	  });


	/*========================
	 mask input phone
	=========================*/
  $(".phone").mask("+7(999) 999-9999");
  
var input = document.querySelectorAll('.js-date')[0];
  
var dateInputMask = function dateInputMask(elm) {
  elm.addEventListener('keypress', function(e) {
    if(e.keyCode < 47 || e.keyCode > 57) {
      e.preventDefault();
    }
    
    var len = elm.value.length;
    
    // If we're at a particular place, let the user type the slash
    // i.e., 12/12/1212
    if(len !== 1 || len !== 3) {
      if(e.keyCode == 47) {
        e.preventDefault();
      }
    }
    
    // If they don't add the slash, do it for them...
    if(len === 2) {
      elm.value += '/';
    }

    // If they don't add the slash, do it for them...
    if(len === 5) {
      elm.value += '/';
    }
  });
};
dateInputMask(input);
 


})
