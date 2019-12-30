
$('.offer_special-slider').slick({
        speed : 1000,
        infinite : true,
        slidesToScroll: 1,
        prevArrow: "<img src='/images/arrow-left-offer.png' class='prev' alt='1'>",
        nextArrow: "<img src='/images/arrow_right_offer.png' class='next' alt='2'>",
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