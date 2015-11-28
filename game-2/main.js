
$(function() {

// wait for DOM to load before running JS
console.log("Sanity Check: JS is working!");
    
var player1 = 0;
var player2 = 0;
    
    $(window).on("keypress", function handler(event) {
      
       if (event.which === 97) {
        if (player1 < 11) {
          $(".box").eq(player1).text("");
            player1 ++;
            $(".box").eq(player1).text("X");
          } else if (ply1 <= 10) {
        }      


        


});
});