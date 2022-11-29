document.addEventListener('click', autoPlay)
function autoPlay() {
    document.querySelector('audio').play();
    document.removeEventListener('click', autoPlay);
}

const player = {
    currentChoice: null
  }
  const computer = {
    currentChoice: null
  }

  const choices = ['Lapis', 'Papyrus', 'Scalpellus'];

  const div = document.querySelector('#results');
  const counterDiv = document.querySelector('#counter');
  const winDiv = document.querySelector('#counterWin');
  const lossDiv = document.querySelector('#counterLoss');
  const tieDiv = document.querySelector('#counterTie');
  let counterWins = 0;
  let counterLosses = 0;
  let counterTies = 0;

  const rockSound = document.querySelector('#rockWin');
  const paperSound = document.querySelector('#paperWin');
  const scissorsSound = document.querySelector('#scissorsWin');
  
  document.querySelector('#rock').addEventListener('mouseover', playRock);
  document.querySelector('#paper').addEventListener('mouseover', playPaper);
  document.querySelector('#scissors').addEventListener('mouseover', playScissors);
  
  function playRock() {
    rockSound.play();
  }
  function playPaper() {
    paperSound.play();
  }
  function playScissors() {
    scissorsSound.play();
  }

  document.querySelector('#rock').addEventListener('click', chooseRock);
  document.querySelector('#paper').addEventListener('click', choosePaper);
  document.querySelector('#scissors').addEventListener('click', chooseScissors);
  
  function chooseRock() {
    div.innerText = '';
    player.currentChoice = choices[0];
    compareChoices();
  }
  function choosePaper() {
    div.innerText = '';
    player.currentChoice = choices[1];
    compareChoices();
  }
  function chooseScissors() {
    div.innerText = '';
    player.currentChoice = choices[2];
    compareChoices();
  }
  
  function computerChooses() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex];
  }
  
  function compareChoices() {
    computerChooses();
    if (player.currentChoice === computer.currentChoice) {
        div.style.backgroundColor = "rgba(255,255,0,0.6)";
        displayTie();
        displayResult('It\'s a tie! The computer and player both chose '  + computer.currentChoice);
    } else if (computer.currentChoice === choices[0]) {
      if (player.currentChoice === choices[1]) {
        div.style.backgroundColor = "rgba(0,255,0,0.6)";
        displayWin();
        displayResult('The player wins! The computer chose ' + computer.currentChoice + ' and the player chose ' + player.currentChoice);
      } else {
        div.style.backgroundColor = "rgba(255,0,0,0.6)";
        displayLoss();
        displayResult('The computer wins! The computer chose ' + computer.currentChoice + ' and the player chose ' + player.currentChoice);
      }
    } else if (computer.currentChoice === choices[1]) {
      if (player.currentChoice === choices[2]) {
        div.style.backgroundColor = "rgba(0,255,0,0.6)";
        displayWin();
        displayResult('The player wins! The computer chose ' + computer.currentChoice + ' and the player chose ' + player.currentChoice);
      } else {
        div.style.backgroundColor = "rgba(255,0,0,0.6)";
        displayLoss();
        displayResult('The computer wins! The computer chose ' + computer.currentChoice + ' and the player chose ' + player.currentChoice);
      }
    } else if (computer.currentChoice === choices[2]) {
      if (player.currentChoice === choices [0]) {
        div.style.backgroundColor = "rgba(0,255,0,0.6)";
        displayWin();
        displayResult('The player wins! The computer chose ' + computer.currentChoice + ' and the player chose ' + player.currentChoice);
      } else {
        div.style.backgroundColor = "rgba(255,0,0,0.6)";
        displayLoss();
        displayResult('The computer wins! The computer chose ' + computer.currentChoice + ' and the player chose ' + player.currentChoice)
      }
    }
  }
  
  function displayResult(result) {
    const resultText = document.createElement('p');
    resultText.innerText = result;
    div.appendChild(resultText);
  }

function displayWin() {
    winDiv.innerText = '';
    counterWins++;
    const counterText = document.createElement('p');
    counterText.innerText = ("Wins: " + counterWins);
    winDiv.appendChild(counterText);
}
function displayLoss() {
    lossDiv.innerText = '';
    counterLosses++;
    const counterText = document.createElement('p');
    counterText.innerText = ("Losses: " + counterLosses);
    lossDiv.appendChild(counterText);
}
function displayTie() {
    tieDiv.innerText = '';
    counterTies++;
    const counterText = document.createElement('p');
    counterText.innerText = ("Ties: " + counterTies);
    tieDiv.appendChild(counterText);
}

const audioTheme = document.querySelector('.audioTheme')
const muteToggle = document.querySelector('.muteToggle');
const muteButton = document.querySelector('.muteButton');
const unmuteButton = document.querySelector('.unmuteButton');

function muteAudio() {
  audioTheme.muted=true;
  muteToggle.innerText = '';
  muteToggle.appendChild(unmuteButton);
  unmuteButton.addEventListener('click', unmuteAudio);
}
function unmuteAudio() {
  audioTheme.muted=false;
  muteToggle.innerText = '';
  muteToggle.appendChild(muteButton);
  muteButton.addEventListener('click', muteAudio);
}
muteAudio();