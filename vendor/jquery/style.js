
// $(window).on('load', function() {
//   // Hide loader when all images are loaded
//   $('.loading-screen').fadeOut('slow');
// });
//Loading screen//
document.addEventListener("DOMContentLoaded", function() {
  // Hide loading screen on index.html
  if (window.location.pathname === '/index.html') {
    var loadingScreen = document.getElementById("loadingScreen");
    if (loadingScreen) {
      loadingScreen.style.display = "none";
    }
  } else {
    // Show loading screen on other pages
    var loadingScreen = document.getElementById("loadingScreen");
    if (loadingScreen) {
      loadingScreen.style.display = "flex";
    }
  }

  // Set timeout to hide loading screen after a certain duration (in milliseconds)
  var timeoutDuration = 11000; // 11 seconds

  setTimeout(function() {
    var loadingScreen = document.getElementById("loadingScreen");
    if (loadingScreen) {
      loadingScreen.style.display = "none";
    }
  }, timeoutDuration);

  // Hide the loading screen when the entire page is loaded
  window.addEventListener("load", function() {
    var loadingScreen = document.getElementById("loadingScreen");
    if (loadingScreen) {
      loadingScreen.style.display = "none";
    }
  });
});
////////////////////

var $window = $(window);

function loop_through_images(bounce_image, container, popup){
  var window_height =  parseInt(container.height());
  var window_top_position =  parseInt(container.scrollTop());
  var window_bottom_position =  parseInt(window_top_position + window_height);

  $.each(bounce_image, function() {
    var element_height = parseInt($(this).outerHeight());
    var element_top_position =  parseInt($(this).offset().top);
	if(popup==1){
		element_top_position =  parseInt(this.offsetTop);
	}	
    var element_bottom_position =  parseInt(element_top_position + element_height);

    //check to see if this current container is within viewport
	if(popup!=1){
		if ((element_bottom_position >= window_top_position) &&
		  (element_top_position <= window_bottom_position)) {
		  $(this).addClass('in-view');
		} else {
		  $(this).removeClass('in-view');
		}
	} else {
	if( element_top_position < (window_top_position+$(window).height()) ){
		$(this).find('img, p, h2').addClass('in-view');
	} else {
		$(this).find('img, p, h2').removeClass('in-view');
	}	
	}
  });
}	

//Portfolio content

$window.on('scroll resize', function(){
	loop_through_images($('.portfolio-item'), $(window), 0);
});

$('.portfolio-modal').bind('scroll', function(){
	loop_through_images($('.portfolio-modal.in .img-wrapper'), $('.portfolio-modal.in'),1);
});

$(document).on('show.bs.modal',".portfolio-modal", function () {
	loop_through_images($(this).find('.img-wrapper'), $(this),1);
})

$window.trigger('scroll');


	//fade out entire section when portfolio button text is clicked.
$(function() {

    $('#work_button').click(function() {
      $('.portfolio-thumbs').fadeOut("slow");
      $('.portfolio-thumbs').fadeIn("slow");
      $('.work_thumbs').fadeIn("slow");
      $('.inde_thumbs').fadeOut("slow");
    });
    $('#inde_button').click(function() {
      $('.inde_thumbs').fadeIn("slow");
      $('.work_thumbs').fadeOut("slow");
    });
    $('#everything_button').click(function() {
      $('.portfolio-thumbs').fadeOut("slow");
      $('.portfolio-thumbs').fadeIn("slow");
      $('.work_thumbs').fadeIn("slow");
      $('.inde_thumbs').fadeIn("slow");
    });
})

/* main menu operation */
$(function() {
	
  //toggle menu
  $(".menu-link").click(function(e) {
    e.preventDefault();
    
    $(".menu-overlay").toggleClass("open");
    $(".menu").toggleClass("open");
  });
  
  //toggle menu when nav link is clicked
   $(".menu-overlay ul a").click(function(e) {
    $(".menu-overlay").toggleClass("open");
    $(".menu").toggleClass("open");
  });

  $(".open").click(function() {
    $(".menu-link").addClass(".fixed");
  });


  $(document).ready(function() {
    // Rotates close icon on hover
      $(".close_x").hover(
          function() {
              $('.close-line-1').addClass("rotate-line-1");
              $(".close-line-2").addClass('rotate-line-2');
          },
          function() {
              $('.close-line-1').removeClass("rotate-line-1");
              $('.close-line-2').removeClass("rotate-line-2");
          }
      );

      // Redirects to index.html when close icon is clicked
      $(".close_x").click(function() {
          window.location.href = "index.html";
      });
  });
});