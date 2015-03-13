$(window).scroll(function() {

	if ($(window).scrollTop() > 99 ){

 		$('.header').addClass('show');
 		$('.logo').addClass('showlogo');
 		$('.no-nav').addClass('nav');

  } else {

    $('.header').removeClass('show');
    $('.logo').removeClass('showlogo');
    $('.no-nav').removeClass('nav');

 	};
});

$('.scroll').on('click', function(e){
		e.preventDefault()

  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});
