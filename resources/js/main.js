
$(document).ready(function(){
  // MENU FIXO NA TELA
  $('#news').waypoint(function(direction){
    if(direction == "down"){
      $('.top').addClass('sticky');
    }else{
      $('.top').removeClass('sticky');
    }
  });

  // MENU RESPONSIVO
  $('.mobile-nav-icon').click(function(){
    var nav = $('.main-nav');
    nav.slideToggle(200);
  });


  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});
  
$('.none a').click(function(e){
  e.preventDefault();
  var id = $(this).attr('href');
  var targetOffset = $(id).offset().top;

  $('html, body').animate({
    scrollTop: targetOffset
  }, 1000);
  
})

var swiperProducts = new Swiper ('.swiper-products', {
  loop: false,
  effect: 'fade',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})

// GALERIA
$('.portfolio-menu ul li').click(function(){
  $('.portfolio-menu ul li').removeClass('active');
  $(this).addClass('active');
  
  var selector = $(this).attr('data-filter');
  $('.portfolio-item').isotope({
    filter:selector
  });
  return  false;
});
$(document).ready(function() {
var popup_btn = $('.popup-btn');
popup_btn.magnificPopup({
type : 'image',
gallery : {
  enabled : true
}
});
});