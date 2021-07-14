const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    }else {
      console.log('Please input rock, paper or Scissors');
      }
  }
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return 'rock';
    }else if (randomNumber === 1) {
      return 'paper'
    }else {
      return 'scissors'
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
      return 'The game is a tie!';
    }else if(userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'The Computer won!'
      }else {
        return 'You won!'
      }
    }else if(userChoice === 'paper') {
      if(computerChoice === 'scissors') {
        return 'The Computer won!'
      }else {
        return 'You won!'
      }
    }else if(userChoice === 'scissors') {
      if(computerChoice === 'rock') {
        return 'The Computer won!'
      }else {
        return 'You won!'
      }
    } else if(userChoice === 'bomb') {
      return 'You won!'
    }
  }
  
  const playGame = () => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log(`The user's choice is ${userChoice} and the computer's choice is ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  console.log(playGame());