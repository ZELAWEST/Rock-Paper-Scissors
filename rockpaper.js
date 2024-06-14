

let humanScore = 0
let computerScore = 0
function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3) + 1
    switch (computerChoice) {
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors"

    }
}


function getHumanChoice() {
    let humanChoice = +prompt("Give a number between 1 and 3!")
    switch (humanChoice) {
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors"

        default:
            return "The choice is wrong ,put numbers between 1 and 3"

    }
}
let comChoice = getHumanChoice()

function playRound(comChoice, humChoice) {


    comChoice = comChoice.toLowerCase()
    humChoice = humChoice.toLowerCase()

    if (comChoice == humChoice) {
        console.log("We have a Draw!")
    } else if (comChoice == "rock" && humChoice == "scissors") {
        computerScore += 1
    }
}


}
console.log(comChoice)