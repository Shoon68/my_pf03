const swiper = new Swiper('.swiper-container', {
   // Optional parameters
   // direction: 'vertical',
   effect: 'fade',
   speed: 1000,
   loop: true,
   
   autoplay: {
      disableOnInteraction: false,
      delay: 3000
   },
   fadeEffect: {
      crossFade: true
   }
});

var r_list = $("#r-list");
r_list.hide();
$(window).scroll(function() {
   if($(this).scrollTop() > 200) {
      r_list.fadeIn(300);
   } else {
      r_list.fadeOut(300);
   }
});
var toPagetop = $(".scroll-btn");
toPagetop.click(function() {
   $("body, html").animate({scrollTop : 0}, 500);
   return false;
});

$(".question").on("click", function() {
   $(this).next(".answer").slideToggle(300);
   $(this).toggleClass("active");
   $(".answer").toggleClass("active")
   return false;
});

$(".burger-menu").click(function () {
   $(this).toggleClass('open');
   $(".burger-close").toggleClass('open');
   $(".burger-nav").toggleClass('open');
});

$(".burger-close, .burger-nav-list").on("click", function () {
   $('.burger-close').removeClass('open');
   $(".burger-menu").removeClass('open');
   $(".burger-nav").removeClass('open');
});

$(".burger-nav-list").on("click", function() {
   var adjust = -50;
   var speed = 600;
   var href = $(this).attr("href");
   var target = $(href == "#" || href == "" ? "html" : href);
   var position = target.offset().top + adjust;
   $("body, html").animate({scrollTop : position}, speed, "swing");
   return false;
});

