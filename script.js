function getComputerChoice(){
    const rockPaperScissors = ["rock","paper","scissors"];
    let computerWeapon = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    return computerWeapon;
}


let computerSelection = getComputerChoice();
let playerSelection = prompt("Choose your weapon!").toLowerCase();
const draw = "It's a draw! Play again !"
const winner = `You win, ${playerSelection} crushes ${computerSelection}`
const looser = `You loose! ${computerSelection} beats ${playerSelection}`
let playerPoints = 0;
let computerPoints = 0;

function playRound(playerSelection, computerSelection){
   
   
    if (playerSelection === computerSelection ){
        return draw
    }
    else if  (playerSelection === "rock" && computerSelection == "scissors" 
            || playerSelection == "scissors" && computerSelection == "paper"
            || playerSelection == "paper" && computerSelection == "rock"    ){
                playerPoints ++
                return winner;
            }
            computerPoints++;
    return looser;
        }        
function game(){
    for (let i=0; i<4 ; i++){
        playerSelection = prompt("Choose your weapon!").toLowerCase();
        const rockPaperScissors = ["rock","paper","scissors"];
         rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
        console.log(playRound(playerSelection,computerSelection));
    }
        if (playerPoints>computerPoints){
            return "You're the winner of this epic battle"
        }else if (playerPoints === computerPoints){
            return "There's no winner or looser in this epic battle"
        } else {
            return "You lost the war, mate"
        }
    }
console.log(game())