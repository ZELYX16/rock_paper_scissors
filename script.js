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

const getHumanChoice = () => {
    let choice = prompt("Enter your choice")
    return choice
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

}

const playGame = () => {
    let i = 0;
    while (i < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        i++
    }

    if (humanScore > computerScore) {
        console.log("You win !!!")
    }
    else console.log("Computer wins !!!");

}

playGame();



