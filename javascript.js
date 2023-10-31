var globalWins = 0
var globalLosses = 0
var globalTies = 0

function computerMove(userChoice){

 var computerChoice = Math.floor(Math.random() * 3)

if ((userChoice === "r" && computerChoice === 0) 
    || (userChoice === "p" && computerChoice === 1) 
    || (userChoice === "s" && computerChoice === 2)) {
    globalTies++
        //1 equals tie
    return 1
    
} else if ((userChoice === "r" && computerChoice === 2)
    || (userChoice === "p" && computerChoice === 0)
    || (userChoice === "s" && computerChoice === 1)) {
    globalWins++
        //0 equals win
    return 0
    
} else if ((userChoice === "r" && computerChoice === 1)
    || (userChoice === "p" && computerChoice === 2)
    || (userChoice === "s" && computerChoice === 0)){
    globalLosses++
        //2 equals loss
    return 2
}
}

function playerMove(move) {
    var result = computerMove(move)
    if (result === 0) {
        document.getElementById("wins").innerHTML = "Wins: " + globalWins   
    } else if (result === 2){
        document.getElementById("losses").innerHTML = "Losses: " + globalLosses  
    } else if (result === 1){
    document.getElementById("ties").innerHTML = "Ties: " + globalTies
    }
  }



