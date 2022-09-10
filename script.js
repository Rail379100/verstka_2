$(document).ready(function(){

    $('.burger_button').click(function(event){
        $('.header_menu_mobile').addClass('active')
        $('body').addClass('lock')
    }); 
    $('.menu_exit').click(function(event){
        $('.header_menu_mobile').removeClass('active')
        $('body').removeClass('lock')
    }); 

    $('.equipment_content_zag').click(function(event){
      $(this).parents().toggleClass('active')
  }); 

  $('.main_top_block').slick({
     vertical: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          vertical: false,
        }
      }
    ]
    
  });

  $("#phone").mask("+7(999)999-99-99");
  $("#phone_bottom_form").mask("+7(999)999-99-99");

  $('.specialists_block').slick({
    prevArrow: $('.specialists_left_button'),
    nextArrow: $('.specialists_right_button'),
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
   
 });


      
  
 
      var header = $(".header_v");
    var scrollChange;
        var w = $(window).width();
    if(w > 1600){
        scrollChange = 250;
    }
    if(w <= 1600 && w > 1440){
        scrollChange = 210;
    }
    if(w <= 1440 && w > 1199){
        scrollChange = 210;
    }
    if(w <= 1199 && w > 991){
        scrollChange = 185;
    }
    if(w <= 991 && w > 767){
        scrollChange = 210;
    }
    if(w <= 767 && w > 575){
      scrollChange = 125;
    }
    if(w <= 575 && w > 400){
      scrollChange = 125;
    }
    if(w <= 400 && w > 340){
      scrollChange = 120;
    }
    if(w <= 340){
      scrollChange = 110;
    }


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        header.addClass('header_none');
    } else {
        header.removeClass("header_none");
    }
});

});

