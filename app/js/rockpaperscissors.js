////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var move;

    if (move) {
        return move;}
    else {
    return getInput()/* Your Expression */;
    } 

}

function getComputerMove(move) {
    var move;

    if (move) {
        return move;}
    else {
    return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;

     if (playerMove == 'rock')
    {        
        if (computerMove == 'rock') winner = 'tie';
        else
        {
            if (computerMove == 'paper') winner = 'computer';
            else winner = 'player';
        }
    }
    else
    {
        if (playerMove == 'paper')
        {
            if (computerMove == 'rock') winner = 'player';
            else
            {
                if (computerMove == 'paper') winner = 'tie';
                else winner = 'computer';
            } 
        }
        else
        {
            if (computerMove == 'rock') winner = 'computer';
            else
            {
                if (computerMove == 'paper') winner = 'player';
                else winner = 'tie';
            } 
        }
    }
    
    return winner;
}

    
    switch(playerMove) 
    {
            
        case 'scissors':
            switch(computerMove)
            {
                case 'rock':
                    winner = 'computer';
                    break;
                case 'paper':
                    winner = 'player';
                    break;
                case 'scissors':
                    winner = 'tie';
                    break;
            }
            break;

            case 'paper': 
            switch(computerMove)
            {
                case 'rock':
                    winner = 'player';
                    break;
                case 'paper':
                    winner = 'tie';
                    break;
                case 'scissors':
                    winner = 'computer';
                    break;
            }
            break;

            case 'rock':
            switch(computerMove)
            {
                case 'rock':
                    winner = 'tie';
                    break;
                case 'paper':
                    winner = 'computer';
                    break;
                case 'scissors':
                    winner = 'player';
                    break;
            }
            break;
    }
    
    
    return winner;
}
} 

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

