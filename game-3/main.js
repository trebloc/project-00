
$(function() {
// wait for DOM to load before running JS
console.log("Sanity Check: JS is working!");
$("iframe").hide();
    
//Defining Player 1 and 2 Position   
var player1 = 0;
var player2 = 11;

var enterprise = new Image (100, 33);
enterprise.src = "images/enterprise.gif";
var enterprise2 = new Image (100, 33);
enterprise2.src = "images/enterprise.jpg";

$("."+ player1).append(enterprise);
$("."+ player2).append(enterprise2);


    
//Keypress set for "A" (Player 1) and "L" (Player 2)    
    $(window).on("keypress", function handler(event) {
      
//Player 1 and 2      
       if (event.which === 97) {
        if (player1 < 10) {          
            player1 ++;
            $("."+ player1).append(enterprise);
        }             
      } else if (event.which === 108) {
        if (player2 < 21) {          
            player2 ++;
            $("."+ player2).append(enterprise2);
        }   
      }    
//Win Outcome                  
      if (player1 >= 10) {
  $(".winner").text("Player One Wins!")
  $(window).off("keypress");
}
  else if (player2 >=21) {
    $(".winner").text("Player Two Wins!")
    $(window).off("keypress");    
  }
    });


//Reset
    $("button").click(function handleClick(event){
    location.reload();

});
});