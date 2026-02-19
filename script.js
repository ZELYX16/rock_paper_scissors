let humanScore = 0
let computerScore = 0




const getComputerChoice = () => {
    let choice = Math.floor((Math.random() * 3)) 
    console.log(choice)
    if (choice == 1) {
        return "rock"
    }
    else if (choice == 2) {
        return "paper"
    }
    else return "scissors"
}


const playRound = (humanChoice, computerChoice) => {

    let flag = 0
    let humanCh = humanChoice.toLowerCase()

    if (humanCh == "rock") {
        if (computerChoice == "scissors") {
            flag = 1
        }
        else if (computerChoice == "rock") {
            flag = 2
        }
    }
    else if (humanCh == "paper") {
        if (computerChoice == "rock") {
            flag = 1
        }
        else if (computerChoice == "paper") {
            flag = 2
        }
    }
    else if (humanCh == "scissors") {
        if (computerChoice == "paper") {
            flag = 1
        }
        else if (computerChoice == "scissors") {
            flag = 2
        }
    }

    if (flag == 1) {
        humanScore += 1
        console.log(`You win ! ${humanCh} beats ${computerChoice}`);
    }
    else if (flag == 2) {
       
        console.log(`Its a Tie !!!`);
    }
    else  {
        computerScore += 1
        console.log(`You lose ! ${computerChoice} beats ${humanCh}`);
    }

    let user_status = document.querySelector('.user_score');
    user_status.innerHTML = `Human score : ${humanScore}`

    let system_status = document.querySelector('.system_score');
    system_status.innerHTML = `computer score : ${computerScore} `

}

const playGame = (selection) => {

    console.log("Selection : ", selection);
    const computerSelection = getComputerChoice();

    playRound(selection, computerSelection); 
    

    let result_status = document.querySelector('.result_container');
    if (computerScore === 5) { result_status.innerHTML = `Computer wins` }
    else if (humanScore === 5) {
        result_status.innerHTML = `You won !!!`
}
    
}





