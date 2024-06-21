const rockBtn = document.querySelector('#rock')

const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')



//callback for the selection
function playerSelection() {
    let allbuttons = document.querySelectorAll('button')
    btns = Array.from(allbuttons)
    btns.forEach(bt =>
        bt.addEventListener('click', (e) => {


            alert(e.target)
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
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors"

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
// -------End---PlayRound---Declaration-------//


//playGame's job is to let the game played five rounds and then dertiming the winner
function playGame() {
    let humanScore = 0
    let computerScore = 0
    let computerChoice
    let humanChoice

    let roundCounter = 0
    //--------playRound---Declaration----------//



    computerChoice = getComputerChoice()
    humanChoice = getHumanChoice()

    playRound(computerChoice, humanChoice)
    roundCounter++



    if (humanScore > computerScore) {
        console.log("You are a winner")
    } else if (humanScore < computerScore) {
        console.log("Sorry, You lost")
    } else {
        console.log("Game ends in a Draw!")
    }
}
playGame()