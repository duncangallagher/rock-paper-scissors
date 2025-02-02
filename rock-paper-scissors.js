resetGame = () => {

    const buttons = document.querySelectorAll('#buttonsContainer img');
    buttons.forEach(button => button.addEventListener('click', function () {
        playRound(this.getAttribute("value"));
    }));

    playRound = (clicked_button_value) => {

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

        getHumanChoice = () => {
            let human_roll = clicked_button_value;
            return human_roll;
        }

        compareRolls = (computer_result, human_result) => {
            console.log('Computer rolls ' + computer_result);
            console.log('Human rolls ' + human_result);
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
                console.log('Human wins!');
            }
            else if (computer_result == 'rock' && human_result == 'scissors') {
               console.log('Computer wins!');
            }
            else if (computer_result == 'paper' && human_result == 'rock') {
                console.log('Computer wins!');
            }
            else if (computer_result == 'scissors' && human_result == 'rock') {
                console.log('Human wins!');
            }
            else if (computer_result == 'scissors' && human_result == 'paper') {
                console.log('Human wins!');
            }
            else if (computer_result == 'paper' && human_result == 'scissors') {
                console.log('Human wins!');
            }
        }

        let computer_result = getComputerChoice();
        let human_result = getHumanChoice();
        compareRolls(computer_result, human_result);
    }
}

window.addEventListener('load', resetGame); 