// init scores
let humanScore = 0;
let computerScore = 0;


//generate bot choice
function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.33) {
      return "rock";
    } else if (randomNum < 0.66) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  //ask for player choice
  function getHumanChoice(){
    let choice = prompt("choose Rock, Paper or Scissors!")

    return choice
  }

  //round logic
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
  
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors");
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats Rock");
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats Rock");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors beats Paper");
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beats Paper");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors");
      computerScore++;
    } else {
      console.log("Invalid choice!");
    }
  }



  //play the game
  function playGame() {
    for (let i = 0; i < 5; i++) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
    }
  
    if (humanScore > computerScore) {
      console.log("you win!");
    } else if (humanScore < computerScore) {
      console.log("you lose :D");
    } else {
      console.log("tie!");
    }
  }
  
  //finally: play the game :c
  playGame(); 
  
  // final score log
  console.log(`Final: human=${humanScore}, computer=${computerScore}`);