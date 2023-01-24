$(function(){
  var html_body = $('html,body');
  var backtotop = $('.back2top');
  var navbar = $('.navbar');


  $(window).on("load",function(){
      $("#preloader").fadeOut(2500);
    
    });

  backtotop.on('click',function(){
      html_body.animate({scrollTop:0},1000);
  });
  
  $(window).on('scroll',function(){
      
      var scrolling = $(this).scrollTop();
      
      if(scrolling > 50){
         $('.navbar').addClass("bg");
         }
      else{
          navbar.removeClass('bg');
      }
      
      if(scrolling > 200){
          backtotop.fadeIn();
         }
      else{
          backtotop.fadeOut();
      }
  });


    //preloader js
    $(window).on("load", function () {
        $("#loadeer_container").fadeOut(500);
    });


    $('.counter_number').counterUp({
        delay: 10,
        time: 2000
      });


      $('.slide_item').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: 'linear'
      });


      $('#bar1').barfiller({ barColor: '#14a2d2', duration: 5000 });
      $('#bar2').barfiller({ barColor: '#232940', duration: 4500 });
      $('#bar3').barfiller({ barColor: '#14a2d2', duration: 4000 });
      $('#bar4').barfiller({ barColor: '#232940', duration: 6500 });

      


});