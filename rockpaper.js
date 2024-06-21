
const div = document.querySelector('div')
const score = document.querySelector('#score')

let humanScore = 0
let computerScore = 0
let roundCounter = 0


//callback for the selection
function playerSelection() {
    let allbuttons = document.querySelectorAll('button')
    btns = Array.from(allbuttons)
    let temp
    let divText = ''
    btns.forEach(bt =>
        bt.addEventListener('click', (e) => {


            temp = e.target.textContent.toLowerCase()
            let comChoice = getComputerChoice()
            if (computerScore < 5 && humanScore < 5) {
                console.log(computerScore + " " + humanScore)
                playRound(comChoice, temp)
                 score.textContent = 'Computer  ' + computerScore + ' and ' + 'Human  ' + humanScore
            } else if (computerScore == 5) {
                divText = `Computer score is  ${computerScore}  and Human score is  ${humanScore} \n
                                   The winner is the computer`}
            else {
                divText = `Computer score is  ${computerScore}  and Human score is  ${humanScore} \n
                                   The winner is the Human`

            }
            div.textContent = divText
        }
        )
    )



}

playerSelection()

// rockBtn.addEventListener('click', playerSelection)
// paperBtn.addEventListener('click', playerSelection)
// scissorsBtn.addEventListener('click', playerSelection)

//getComputer gets choice of Computer
function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3) + 1
    switch (computerChoice) {
        case 1:
            return "Rock".toLocaleLowerCase()
        case 2:
            return "Paper".toLocaleLowerCase()
        case 3:
            return "Scissors".toLocaleLowerCase()

    }
}

//getHumanChoice get the choice of a Human
function getHumanChoice() {
    // let humanChoice = prompt("Rock Paper Or Scissors !")

    // return humanChoice.toLowerCase()




}

function playRound(comChoice, humChoice) {

    comChoice = comChoice.toLowerCase()
    if (comChoice == humChoice) {

        console.log("its  a draw")
    }
    else if ((comChoice == 'rock' && humChoice == 'scissors') ||
        (comChoice == 'scissors' && humChoice == 'paper') ||
        (comChoice == 'paper' && humChoice == 'rock')) {



        computerScore++


    } else if ((humChoice == 'rock' && comChoice == 'scissors') ||
        (humChoice == 'scissors' && comChoice == 'paper') ||
        (humChoice == 'paper' && comChoice == 'rock')) {


        humanScore++


    } else {
        console.log("wrong input")
    }
}



