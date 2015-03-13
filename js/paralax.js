var tl = 0;
var magnitude = 0.3;

addEventListener('scroll', function(){
    var top = $(document).scrollTop();
    interp(top);
});

function interp(t){
  var x = t-(tl-t);
  console.log(x);
  $('.banner').css({top: x*magnitude});
  $('.tekst').css({bottom: x*magnitude*1});
  $('.tekst').css({bottom: x*magnitude});
}
