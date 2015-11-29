
$(function() {
// wait for DOM to load before running JS
console.log("Sanity Check: JS is working!");
$("iframe").hide();
    
var player1 = 0;
var player2 = 0;
    
    $(window).on("keypress", function handler(event) {
      
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
      if (player1 >= 11) {
  $(".boxwinner").text("Player One Wins!")

}
  else if (player2 >=11) {
    $(".boxwinner").text("Player Two Wins!")
  }
    });



    $("button").click(function handleClick(event){
    location.reload();

});
});