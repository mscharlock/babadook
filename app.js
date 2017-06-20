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

//random number range//
function range( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

function redBalloonFloat() {
  for (var i = 0; i < 5; i++) {
    var topRange = range(0, 960);
    var leftRange = range(-1000, 960);

    $('.allTheBalloons').append('<div class="redballoon" id="balloon'+i+'"></div>');
    $('#balloon'+i).css('left', leftRange, 'background-color', 'red', 'top', topRange);
  }
}

redBalloonFloat();

function yellowBalloonFloat() {
  for (var i = 0; i < 9; i++) {
    var topRange = range(0, 960);
    var leftRange = range(-1000, 960);

    $('.allTheBalloons').append('<div class="yellowballoon" id="yballoon'+i+'"></div>');
    $('#yballoon'+i).css('left', leftRange, 'background-color', 'yellow', 'top', topRange);
  }
}

yellowBalloonFloat();

function orangeBalloonFloat() {
  for (var i = 0; i < 10; i++) {
    var topRange = range(0, 960);
    var leftRange = range(-1000, 960);

    $('.allTheBalloons').append('<div class="orangeballoon" id="oballoon'+i+'"></div>');
    $('#oballoon'+i).css('left', leftRange, 'background-color', 'orange', 'top', topRange);
  }
}

orangeBalloonFloat();

function greenBalloonFloat() {
  for (var i = 0; i < 10; i++) {
    var topRange = range(0, 960);
    var leftRange = range(-1000, 960);

    $('.allTheBalloons').append('<div class="greenballoon" id="gballoon'+i+'"></div>');
    $('#gballoon'+i).css('left', leftRange, 'background-color', 'green', 'top', topRange);
  }
}

greenBalloonFloat();

function blueBalloonFloat() {
  for (var i = 0; i < 10; i++) {
    var topRange = range(0, 960);
    var leftRange = range(-1000, 960);

    $('.allTheBalloons').append('<div class="blueballoon" id="bballoon'+i+'"></div>');
    $('#bballoon'+i).css('left', leftRange, 'background-color', 'blue', 'top', topRange);
  }
}

blueBalloonFloat();

function purpleBalloonFloat() {
  for (var i = 0; i < 9; i++) {
    var topRange = range(0, 960);
    var leftRange = range(-1000, 960);

    $('.allTheBalloons').append('<div class="purpleballoon" id="pballoon'+i+'"></div>');
    $('#pballoon'+i).css('left', leftRange, 'background-color', 'purple', 'top', topRange);
  }
}

purpleBalloonFloat();
