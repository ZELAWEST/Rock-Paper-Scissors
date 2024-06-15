

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
    let humanChoice = prompt("Rock Paper Or Scissors !")

    return humanChoice.toLowerCase()




}

const computerChoice = getComputerChoice()
const humanChoice = getHumanChoice()

function playRound(comChoice, humChoice) {

    comChoice = comChoice.toLowerCase()
    if(comChoice == humChoice){
        console.log(comChoice)
        console.log(humChoice)
        console.log("its  a draw")
    }
    else if (comChoice == 'rock' && humChoice == 'scissors' ||
        comChoice == 'scissors' && humChoice == 'paper' ||
        comChoice == 'paper' && humChoice == 'rock') {


        console.log(comChoice)
        console.log(humChoice)
        console.log("you lose")

    }else if (humChoice == 'rock' && comChoice == 'scissors' ||
              humChoice == 'scissors' && comChoice == 'paper' ||
              humChoice == 'paper' && comChoice == 'rock') {


        console.log(comChoice)
        console.log(humChoice)
        console.log("you win")
    }else{
        console.log("wrong input")
    }
}


playRound(computerChoice, humanChoice)