$(window).scroll(function() {

	if ($(window).scrollTop() > 100 ){

 		$('.header').addClass('show');

  } else {

    $('.header').removeClass('show');

 	};
});

$('.scroll').on('click', function(e){
		e.preventDefault()

  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});
