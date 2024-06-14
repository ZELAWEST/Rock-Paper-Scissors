


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
            return"The choice is wrong ,put numbers between 1 and 3"
            
    }
}
let comChoice = getHumanChoice()
console.log(comChoice)