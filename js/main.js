
$('.offer_special-slider').slick({
        speed : 1000,
        infinite : true,
        slidesToScroll: 1,
        prevArrow: "<img src='images/arrow-left-offer.png' class='prev' alt='1'>",
        nextArrow: "<img src='images/arrow_right_offer.png' class='next' alt='2'>",
    });

    // slider in prev pre-last block 

    $('.awards_special-slider').slick({
        speed : 800,
        infinite : true,
        slidesToScroll: 1,
        variableWidth: true,
        row : 2,
        prevArrow: "<img src='images/keyboard-left-arrow-awards.png' class='awards_prev' alt='1'>",
        nextArrow: "<img src='images/keyboard-right-arrow-awards.png' class='awards_next' alt='2'>",
    });

    $('.awards_btm_special-slider').slick({
        speed : 800,
        infinite : true,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: "<img src='images/arrow-left-offer.png' class='awards_prev' alt='1'>",
        nextArrow: "<img src='images/arrow_right_offer.png' class='awards_next' alt='2'>",
    });

// increase the picture
    $(function(){
        $('.minimized').click(function(event) {
          var i_path = $(this).attr('src');
          $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
          $('#magnify').css({
              left: ($(document).width() - $('#magnify').outerWidth())/2,
              // top: ($(document).height() - $('#magnify').outerHeight())/2 
                  top: ($(window).height() - $('#magnify').outerHeight())/2
            });
          $('#overlay, #magnify').fadeIn('fast');
        });
        
        $('body').on('click', '#close-popup, #overlay', function(event) {
          event.preventDefault();
       
          $('#overlay, #magnify').fadeOut('fast', function() {
            $('#close-popup, #magnify, #overlay').remove();
          });
        });
      });
// increase the picture