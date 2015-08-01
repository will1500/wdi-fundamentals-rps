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
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
  function getPlayerMove(move) {
   if (move ===5) {
       return 5;
   } if (move === null) {
       return 'getInput()';
   }
}
getPlayerMove(null);

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
   function getComputerMove(move) {
    if (move === 5) {
        return 5;
    } if (move ===null) {
}       return 'randomPlay';
} getComputerMove(5);

function getWinner(playerMove,computerMove) {
      var winner = null;
    if (playerMove === computerMove){
        
        return "tie";
    } 
    
    if (playerMove === "scissors" && computerMove==="rock"){
        return "computer";
       } else if (playerMove==="scissors" & computerMove==="paper"){
           return "player";
       }
    if (playerMove ==="rock" & computerMove==="paper"){
        
            return "computer";
        }
      
     if (playerMove === "paper" && computerMove==="scissors"){
        
            return  "computer";}}
     getWinner("scissors","paper")

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

