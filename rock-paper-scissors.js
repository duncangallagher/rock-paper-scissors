playAgain = () => {
    let human_wants_again = confirm("Play again?");
    if (human_wants_again == true) {
        playGame();
    } else {
        alert('Thanks for playing.');
    }
}

playGame = () => {
    let computer_score = 0;
    let human_score = 0;

    playRound = () => {

        getRandomInt = (max) => {
            return Math.floor(Math.random() * max + 1);
        }

        getComputerChoice = () => {
            let num_roll = getRandomInt(3);
            let computer_roll;
            switch (num_roll) {
                case 1:
                    computer_roll = 'rock';
                    break;
                case 2:
                    computer_roll = 'paper';
                    break;
                case 3:
                    computer_roll = 'scissors';
                    break;
            }
            return computer_roll;
        }

        promptUser = () => {
            let human_input = prompt('Rock, Paper, or Scissors?');
            let human_iput_sanitized = human_input.toLowerCase();
            return human_iput_sanitized;
        }

        getHumanChoice = () => {
            let human_roll = promptUser();
            while (human_roll != 'rock' && human_roll != 'scissors' && human_roll != 'paper') {
                console.log('invalid input');
                human_roll = promptUser();
            }
            if (human_roll == 'rock' || human_roll == 'scissors' || human_roll == 'paper') {
                let human_roll_result = human_roll;
                return human_roll_result;
            }
        }

        compareRolls = (computer_result, human_result) => {
            console.log('Computer rolls ' + computer_result);
            console.log('Human rolls ' + human_result);
            let result;
            if (computer_result == 'rock' && human_result == 'rock') {
                console.log('Tie!');
            }
            else if (computer_result == 'paper' && human_result == 'paper') {
                console.log('Tie!');
            }
            else if (computer_result == 'scissors' && human_result == 'scissors') {
                console.log('Tie!');
            }
            else if (computer_result == 'rock' && human_result == 'paper') {
                human_score++;
            }
            else if (computer_result == 'rock' && human_result == 'scissors') {
                computer_score++;
            }
            else if (computer_result == 'paper' && human_result == 'rock') {
                computer_score++;
            }
            else if (computer_result == 'scissors' && human_result == 'rock') {
                human_score++;
            }
            else if (computer_result == 'scissors' && human_result == 'paper') {
                human_score++;
            }
            else if (computer_result == 'paper' && human_result == 'scissors') {
                human_score++;
            }
            else {
                result = 'UNKNOWN RESULT';
            }
        }

        let computer_result = getComputerChoice();
        let human_result = getHumanChoice();
        compareRolls(computer_result, human_result);
    }
    // Game goes 5 rounds
    for (round = 1; round < 6; round++) {
        playRound();
        if (human_score > computer_score) {
            console.log("Human  wins Round " + round);
        } else if (computer_score > human_score) {
            console.log("Computer wins Round " + round);
        }
        console.log('Human Score: ' + human_score);
        console.log('Computer Score: ' + computer_score);
        if (round == 5) {
            if (human_score > computer_score) {
                console.log("Human  wins the game!");
            }
            else if (computer_score > human_score) {
                console.log("Computer wins the game!");
            }
            else if (computer_score == human_score) {
                console.log('Tie game!')
            }
        }
    }
    playAgain();
}

window.addEventListener('load', playGame); 