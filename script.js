function getComputerChoice(){
    const rockPaperScissors = ["rock","paper","scissors"];
    let computerWeapon = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    return computerWeapon;
}
let computerSelection = getComputerChoice();
let playerSelection = prompt("Choose your weapon!").toLowerCase();

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It's a draw play again!"
    }

}
