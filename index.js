let options = ["rock", "paper", "scissors"];

function getComputerChoice()
{
    let computer = Math.floor(Math.random() * 3);
    return options[computer];
}

function getHumanChoice()
{
    let user = window.prompt("0: Rock, 1: Paper, 2: Scissors");
    user = parseInt(user);
    return options[user];
}

function playRound(humanChoice, computerChoice)
{
    if (humanChoice == "rock")
        {
            if (computerChoice == "paper")
                {
                    console.log("You lose! Paper beats Rock");
                    computerScore++;computerChoice == "paper"
                }
            else if (computerChoice == "scissors")
                {
                    console.log("You win! Rock beats Scissors");
                    humanScore++;
                }
            else
            {
                console.log("Draw!");
            }
        }
    
    else if (humanChoice == "paper")
        {
            if (computerChoice == "rock")
                {
                    console.log("You win! Paper beats Rock");
                    humanScore++;
                }
            else if (computerChoice == "paper")
                {
                    console.log("Draw!");
                }
            else
            {
                console.log("You lose! Scissors beats Paper");
                computerScore++;
            }
        } 
    else if (humanChoice == "scissors")
    {
        if (computerChoice == "rock")
            {
                console.log("You lose! Scissors beats Paper");
                computerScore++;
            }
        else if (computerChoice == "paper")
            {
                console.log("You win! Paper beats Rock");
                humanScore++;
            }
        else
        {
            console.log("Draw!");
        }
    }
}




let humanScore = 0;
let computerScore = 0;

function playGame()
{
    for (let i= 0; i< 5; i++)
        {
            let humanChoice = getHumanChoice();
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        }
    if (humanScore > computerScore)
        {
            console.log("Human Wins! " + humanScore + "x" + computerScore);
            return 0;
        }
    else if (humanScore == computerScore)
        {
            console.log("Draw! " + humanScore + "x" + computerScore);
            return 0;
        }
    console.log("Computer Wins! " + computerScore + "x" + humanScore);
}

playGame()