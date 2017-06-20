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
      // case 40:
      // $('babadook').attr('src', 'imgs/Jump.png');
      //
  });
});



//
//
//
// var babadook = function (x, y) {
//   this.x = x;
//   this.y = y;
//   this.img = ('./imgs/Babadook.png');
// };
//
// babadook.bounce = function(){
//   this.img = ('./imgs/Jump.png');
//   this.y -= 10;
// };
//
// $(document).ready(function() {
//   $(document).keydown(function(e){
//     if (e.keyCode === 38) {
//
//     }
//   }
// })
