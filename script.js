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

  //button choice via datachoice
  function getHumanChoice(button){
    return button.dataset.choice;
  }

  // Winner alert 
  function someoneWins() {
    if (humanScore === 5) {
      alert("Human wins!");
    }
  
    if (computerScore === 5) {
      alert("Computer wins!");
    }
  }
  

  //round logic, might change later
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
  
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } 
    else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
    }
     else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
    } 
    else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
    } 
    else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
    }
     else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
    } 
    else if(humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
    } 
  }

  //RPS button eventListener
  const buttons = document.querySelectorAll("button");
  const humanScoreSpan = document.querySelector("#human-score");
  const computerScoreSpan = document.querySelector("#computer-score");


  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const humanChoice = getHumanChoice(button);
      const computerChoice = getComputerChoice();
  
      playRound(humanChoice, computerChoice);
      someoneWins();

      humanScoreSpan.textContent = humanScore;
      computerScoreSpan.textContent = computerScore;
    });
  });


  //eventListener for scores div

  



  
  
  
