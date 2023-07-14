const startbttn = document.getElementById('startbttn');
const pregame = document.getElementsByClassName('initalpage')[0];
const gamedisplay = document.getElementsByClassName('gamepage')[0];
const firebttn = document.getElementsByClassName('fire')[0];
const waterbttn = document.getElementsByClassName('water')[0];
const rockbttn = document.getElementsByClassName('rock')[0];
const paperbttn = document.getElementsByClassName('paper')[0];
const scissorbttn = document.getElementsByClassName('scissor')[0];

startbttn.addEventListener('click', function() {
  pregame.style.display = 'none';
  gamedisplay.style.display = 'block';
  gamedisplay.style.color = 'white';
});

const usersidedisplay = document.getElementsByClassName('userclickdisplay')[0];
const compsidedisplay = document.getElementsByClassName('computerdisplay')[0];
const displayedUserImg = document.getElementById("displayedUserImg");
const displayedCompImg = document.getElementById("displayedCompImg");


const imageUrls = {
  fire: './fire.png',
  water: './water.png',
  rock: './rock.png',
  paper: './paper.png',
  scissor: './scissor.png',
};

let userScore = 0;
let computerScore = 0;

displayedUserImg.src = imageUrls.rock;
displayedCompImg.src = imageUrls.rock;

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const result = playRound(userChoice, computerChoice);

  displayedUserImg.src = imageUrls[userChoice];
  displayedCompImg.src = imageUrls[computerChoice];



  updateScores(result);
  updateResultText(result, userChoice, computerChoice);

}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor','fire','water'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    
    return 'draw';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissor') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissor' && computerChoice === 'paper') ||
    (userChoice === 'water' && computerChoice === 'paper' )||
    (userChoice == 'water' && computerChoice == 'fire') ||
    (userChoice == 'rock' && computerChoice == 'fire') ||
    (userChoice == 'rock' && computerChoice == 'water') ||
    (userChoice == 'scissor' && computerChoice == 'water') ||
    (userChoice == 'fire' && computerChoice == 'scissor') ||
    (userChoice == 'fire'&& computerChoice == 'paper')
    
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

function updateScores(result) {
  if (result === 'win') {
    userScore++;
  } else if (result === 'lose') {
    computerScore++;
  }

  useScore.textContent = userScore; //make html element
  document.getElementById('computerScore').textContent = computerScore;
}
//might want to remove this part ()




firebttn.addEventListener('click', function() {
  playGame('fire');
});

waterbttn.addEventListener('click', function() {
  playGame('water');
});

rockbttn.addEventListener('click', function() {
  playGame('rock');
});

paperbttn.addEventListener('click', function() {
  playGame('paper');
});

scissorbttn.addEventListener('click', function() {
  playGame('scissor');
});










