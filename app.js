//Babadook Pride Game//
'use strict';
$(document).ready(function(){
  $(document).keydown(function(key) {
    switch(parseInt(key.which, 10)) {
    case 38:
      console.log('key pressed ' + key.which);
      $('.babadook').attr('src', 'imgs/Jump.png');
      $('.babadook').animate({top: '-=10px'}, 500);
      break;
    case 39:
      $('.babadook').attr('src', 'imgs/Babadook.png');
      $('.babadook').animate({left: '+=10px'}, 500);
      break;
    case 37:
      $('.babadook').attr('src', 'imgs/Babadook.png');
      $('.babadook').animate({left: '-=10px'}, 500);
      break;
    case 40:
      $('.babadook').attr('src', 'imgs/Babadook.png');
      $('babadook').animate({top: '+=10px'}, 500);
      break;
    }
  });
});

$(document).ready(function(){
  $('div').animate()

})
