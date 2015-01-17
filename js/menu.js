$(window).scroll(function() {

	if ($(window).scrollTop() > 100 ){

 		$('.header').addClass('show');
 		$('.logo').addClass('showlogo');

  } else {

    $('.header').removeClass('show');
    $('.logo').removeClass('showlogo');

 	};
});

$('.scroll').on('click', function(e){
		e.preventDefault()

  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});
