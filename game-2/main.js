
$(function() {
// wait for DOM to load before running JS
console.log("Sanity Check: JS is working!");
$("iframe").hide();
    
//Defining Player 1 and 2    
var player1 = 0;
var player2 = 0;
    
//Keypress set for "A" (Player 1) and "L" (Player 2)    
    $(window).on("keypress", function handler(event) {
      
//Player 1 and 2      
       if (event.which === 97) {
        if (player1 < 11) {
          $(".box").eq(player1).text("");
            player1 ++;
            $(".box").eq(player1).text("X");
        }             
      } else if (event.which === 108) {
        if (player2 < 11) {
          $(".box2").eq(player2).text("");
          player2 ++;
          $(".box2").eq(player2).text("O");
        }
      }    
//Win Outcome                  
      if (player1 >= 11) {
  $(".winner").text("Player One Wins!")
  $(window).off("keypress");
}
  else if (player2 >=11) {
    $(".winner").text("Player Two Wins!")
    $(window).off("keypress");    
  }
    });


//Reset
    $("button").click(function handleClick(event){
    location.reload();

});
});