
$(function() {

// wait for DOM to load before running JS
console.log("Sanity Check: JS is working!");

var p1Distance = 2;
var p2Distance = 2;
var $player1 = $(".player").eq(0);
var $player2 = $(".player").eq(1);


$(window).on("keypress", function handler(event) {
  if (event.which === 97) {
    //Trying to declare a winner when a player hits certain % at the end. 
    if ($player1.css("left") !== "96%") {
      p1Distance += 2;
      $player1.css("left", p1Distance + "%");
    } else if ($player1.css("left") === "96%") {
      console.log("Winner!");
    }
  } else if (event.which === 108) {
    if ($player2.css("left") !== "96%") {
      p2Distance += 2;
      $player2.css("left", p2Distance + "%"); 
    } else if ($player2.css("left") === "96%") {
      console.log("Winner O");
    }
  }
});

var $bothPlayers = $(".player");
// Resets the Game.
$("#reset").click(function clickHandle() {
  $bothPlayers.forEach(function resetHandler(element) {
    element.css("left", "2%");
  });
});  

//$('.player').click(function(elem) {
// $('.player').text("Hi");
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
