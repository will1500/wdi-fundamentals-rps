////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
   if (move === "rock"){
   return "rock"; }
   if(move==="paper"){
       return "paper";
   }
   if(move==="scissors"){
       return  "scissors";
   }
   else { 
       return "getInput";
       }}
getPlayerMove("scissors");


   function getComputerMove(move) {
   if (move === "rock"){
   return "rock"; }
   if(move==="paper"){
       return "paper";
   }
   if(move==="scissors"){
       return  "scissors";
   }
   else { 
       return randomPlay();
       }}
getComputerMove();
function getWinner(playerMove,computerMove) {
      var winner = null;
    if (playerMove === computerMove){
        winner = tie;
    }else if (playerMove === "scissors"){
        if(computerMove ==="rock"){
            winner = "computer";
        }else{
            winner = "player";
        }
    }else if (playerMove ==="rock"){
        if (computerMove === "paper" ){
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    else if (playerMove === "paper"){
        if (computerMove === "scissors"){
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    return winner;
}
  function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
     var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
  var playerMove=getPlayerMove
  var computerMove=getComputerMove
    var winner = getWinner(playerMove,computerMove);
    if (winner === 'player') {playerWins ++}
        else {computerWins ++}
        console.log("Player chose" + playerMove + " while computer chose " + computerMove);
        console.log("the score is currently " + playerWins + " to " + computerWins + "\n");
    }
    return [playerWins, computerWins]; 
}
    playToFive();
    
    

