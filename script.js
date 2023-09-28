function getComputerChoice(){
    const rockPaperScissors = ["rock","paper","scissors"];
    let computerWeapon = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    return computerWeapon;
}
let computerSelection = getComputerChoice();
let playerSelection = prompt("Choose your weapon!").toLowerCase();


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection ){
        return "It's a draw! Play again !"
    }
    else if (playerSelection === "rock" && computerSelection == "scissors" 
            || playerSelection == "scissors" && computerSelection == "paper"
            || playerSelection == "paper" && computerSelection == "rock"    ){
                return `You win, ${playerSelection} crushes ${computerSelection}`
            }
}   else {
    return `You loose! ${computerSelection} beats ${playerSelection}`
}