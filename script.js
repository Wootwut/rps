let computerSelection = getComputerChoice();
let playerSelection ;
let playerPoints = 0;
let computerPoints = 0;
let text = document.querySelector(".text");
let score = document.querySelector(".score")

const buttons = document.querySelectorAll("button");
buttons.forEach(button =>{
    button.addEventListener("click", () =>{
        playerSelection = button.id;
        computerSelection = getComputerChoice()
        playRound(playerSelection,computerSelection)
    })
})



function getComputerChoice(){
    const rockPaperScissors = ["rock","paper","scissors"];
    let computerWeapon = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    return computerWeapon;
}

function playRound(playerSelection, computerSelection){
   
   
    if (playerSelection === computerSelection ){
        result ="It's a draw! Play again !";
    }
    else if  (playerSelection === "rock" && computerSelection == "scissors" 
            || playerSelection == "scissors" && computerSelection == "paper"
            || playerSelection == "paper" && computerSelection == "rock"    ){
                playerPoints ++
                result =`You win, ${playerSelection} crushes ${computerSelection}`;
            } else {
            computerPoints++;
    result =`You loose! ${computerSelection} beats ${playerSelection}`;
            }
    gameResult(result)
   
        }    

    function gameResult(result) {
        text.innerText = result;
        score.innerText = "Your score: " + playerPoints + " -- Computer's score: " + computerPoints;
        
            if (computerPoints >= 5 || playerPoints >= 5) {
                gameOver();
            }
        }
function gameOver(){
  
   if (playerPoints > computerPoints ){
    text.innerText = "You're the winner of this epic battle"
   }
   else {
    text.innerText = "You lost the war, mate"
   }
   playerPoints = 0;
   computerPoints = 0;
   score.innerText = "Play again!"
}
    
// function game(){
//     for (let i=0; i<4 ; i++){
//         playerSelection = prompt("Choose your weapon!").toLowerCase();
//         const rockPaperScissors = ["rock","paper","scissors"];
//          rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
//         console.log(playRound(playerSelection,computerSelection));
//     }
//         if (playerPoints>computerPoints){
//             return "You're the winner of this epic battle"
//         }else if (playerPoints === computerPoints){
//             return "There's no winner or looser in this epic battle"
//         } else {
//             return "You lost the war, mate"
//         }
//     }
//console.log(game())
