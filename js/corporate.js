$(document).ready(function($){


	$(".fancybox").fancybox();

	$('.reviews').owlCarousel({
	    loop:true,
	    margin:10,
	    nav: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
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
	            items:2,
	            nav:true
	        },
	        600:{
	            items:1,
	            nav:false
	        },
	        1000:{
	            items:4,
	            nav:true,
	            loop:false
	        }
	    }
	})
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
})
