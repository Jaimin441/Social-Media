options = {
  "cursorOuter": "circle-basic",
  "hoverEffect": "circle-move",
  "hoverItemMove": true,
  "defaultCursor": false,
  "outerWidth": 40,
  "outerHeight": 40
};

magicMouse(options);

feather.replace({ width: '3em' });

const tilt = $('#bgImg').tilt();
tilt.on('tilt.mouseLeave', function () {
  $('img').css("transform", "translateZ(0px)");
  $('img').css("filter", "grayscale(100%)");
});


tilt.on('tilt.mouseEnter', function () {
  $('img').css("transform", "translateZ(70px)");
  $('img').css("filter", "grayscale(0%)");
});

$('a, h1').mouseover(function () {
  $('img').css("filter", "grayscale(0%)");
});

$('.facebook').mouseover(function () {
  $('#bgImg').css("background-color", "#3b5998");
});

$('.instagram').mouseover(function () {
  $('#bgImg').css("background-color", "#de1b85");
});

$('.linkedin').mouseover(function () {
  $('#bgImg').css("background-color", "#0e76a8");
});

$('.twitter').mouseover(function () {
  $('#bgImg').css("background-color", "#00acee");
});

$('.github').mouseover(function () {
  $('#bgImg').css("background-color", "#333333");
});

$('a, h1').mouseout(function () {
  $('#bgImg').css("background-color", "#f0f0f0");
  $('img').css("filter", "grayscale(100%)");
});