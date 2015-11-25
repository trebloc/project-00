
$(function() {

// wait for DOM to load before running JS
console.log("Sanity Check: JS is working!");

$('.player').click(function(elem) {
$('.player').text("x");
});
});

/*
// elements for gameplay

var $board = $('#board'),
    $boxes1 = $('.box'),
    // $boxes2 = $('.box2'),    
    $reset = $('#reset');

//players
var player1 = "x";
// var player2 = "o";

// counter for reset
var count = 0;

var $player = $(".box");
var leftPosition = $player.offset().left;

$(".boxes1").keypress(function handler() {
  $(".box" + player1).text("");
  player1 ++

  $(".box" + player1).text("O");
});


// Resets the Game.
$reset.click(function clickHandle() {
    count = 0;
    $boxes.empty();
});
*/
