$(function() {

// wait for DOM to load before running JS
console.log("Sanity Check: JS is working!");

// Setting the Variables for distance on the board and the players.
var p1Distance = 2;
var p2Distance = 2;
var $player1 = $(".player").eq(0);
var $player2 = $(".player").eq(1);

// Setup of the Gameboard Width so that PX is stripped and working on Percentages.
var gameBoard = parseInt($(".col-md-12").css("width"), 10);

// Setting the Keypress for "A" and "L" for player 1 and 2 respectively and the Game Outcomes.
$(window).on("keypress", function handler(event) {
  if (event.which === 97) {
    //Trying to declare a winner when a player hits certain % at the end. 
    if ($player1.css("left")) {
      p1Distance += 2;
      $player1.css("left", p1Distance + "%");
      if ( parseInt($player1.css("left"), 10) >= (0.9 * gameBoard)) {
        $(".winner").append("<h1>Player 1 wins</h1>");
        $(window).off("keypress");
      }
    }
  } else if (event.which === 108) {
    if ($player2.css("left")) {
      p2Distance += 2;
      $player2.css("left", p2Distance + "%");
      if ( parseInt($player2.css("left"), 10) >= (0.9 * gameBoard)) {
        $(".winner").append("<h1>Player 2 wins</h1>");
        $(window).off("keypress");
    }
  }
}
});

// Game Reset
var $bothPlayers = $(".player");
//
    $("button").click(function handleClick(event){
    location.reload();

}); 
});