const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

const RULES = {
    [ROCK]: SCISSORS,
    [PAPER]: ROCK,
    [SCISSORS]: PAPER,
  };
  
  const inputRock = document.getElementById("rock");
  const inputPaper = document.getElementById("paper");
  const inputScissors = document.getElementById("scissors");
  
  inputRock.addEventListener("click", () => selectWinner(ROCK));
  inputPaper.addEventListener("click", () => selectWinner(PAPER));
  inputScissors.addEventListener("click", () => selectWinner(SCISSORS));
  
  function computerSelection() {
    const computerSelection = [ROCK, PAPER, SCISSORS];
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];
  }
  
  function selectWinner(userChoice) {
    const playerTwoChoice = computerSelection();
    const outcome = determineWinner(userChoice, playerTwoChoice);
  
    if (outcome === "draw") {
      showResults(`You use ${userChoice} against ${playerTwoChoice}. It's a draw!`);
    } else if (outcome === "playerOne wins") {
      showResults(`You use ${userChoice} against ${playerTwoChoice}. You win!`);
    } else {
      showResults(`You use ${userChoice} against ${playerTwoChoice}. You lose!`);
    }
  }
  
  function determineWinner(playerOneChoice, playerTwoChoice) {
    if (playerOneChoice === playerTwoChoice) {
      return "draw";
    }
  
    if (RULES[playerOneChoice] === playerTwoChoice) {
      return "playerOne wins";
    }
  
    return "playerTwo wins";
  }
  
  function showResults(results) {
    clearPreviousResult();
  
    const paragraph = document.createElement("p");
    const text = document.createTextNode(results);
    paragraph.appendChild(text);
    paragraph.classList.add("result-text");
  
    const div = document.getElementById("results");
    div.appendChild(paragraph);
  }
  
  function clearPreviousResult() {
    const div = document.getElementById("results");
    const text = document.getElementsByClassName("result-text");
  
    if (div.hasChildNodes()) {
      for (let i = 0; i < text.length; i++) {
        div.removeChild(text[i]);
      }
    }
  }
  