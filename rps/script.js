
    const buttons = document.querySelectorAll('button');
    const results = document.querySelector('.results');
    const score = document.querySelector('.score');
    const scoreBoard = document.querySelector('.scoreboard');
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');
    const playAgain = document.querySelector('.playagain');
    const gameOver = document.querySelector('.gameover');
    var condition = "";
    var playerScore = 0;
    var computerScore = 0;
    scoreBoard.textContent = "0 - 0";

    buttons.forEach(button => button.addEventListener('click', singleRound));
    playAgain.addEventListener('click', reset);

    function computerPlay() {
        let guess = Math.floor(Math.random() * 3 + 1);
        if (guess === 1) {
            return "Rock"
        }
        else if (guess === 2) {
            return "Paper"
        }
        else if (guess === 3) {
            return "Scissors"
        }             
    }
    
    function singleRound(e){
        let playerSelection = this.className;
        //playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
        var computerSelection = computerPlay();
        let proof = "";

        if ((computerSelection === "Rock") && (playerSelection === "Scissors") || (computerSelection === "Paper") && (playerSelection === "Rock") || 
            (computerSelection === "Scissors") && (playerSelection === "Paper")) {
            condition = "Lose";
            computerScore ++;
            proof = `${computerSelection} beats ${playerSelection}`;
            results.textContent = `${condition} - ${proof}`;
            scoreBoard.textContent = `${playerScore} - ${computerScore}`;
        }
        else if ((computerSelection === "Scissors") && (playerSelection === "Rock") || (computerSelection === "Rock") && (playerSelection === "Paper") || 
            (computerSelection === "Paper") && (playerSelection === "Scissors")) {
            condition = "Win";
            playerScore ++;
            proof = `${playerSelection} beats ${computerSelection}`;
            results.textContent = `${condition} - ${proof}`;
            scoreBoard.textContent = `${playerScore} - ${computerScore}`;
        }
        else {
            condition = "Tie"
            proof = `${playerSelection} ties ${computerSelection}`;
            results.textContent = `${condition}`;
        }
        
        if (playerScore >= 5) {
            gameOver.textContent = "Game Over! Player wins!";
            buttons.forEach(button => button.style.display = 'none');
            playAgain.style.display = 'inline';
        }
        else if (computerScore >= 5) {
            gameOver.textContent = "Game Over! Computer wins!";
            buttons.forEach(button => button.style.display = 'none');
            playAgain.style.display = 'inline';
        }
    }

    function reset() {
        playerScore = 0;
        computerScore = 0;
        condition = '';
        proof = '';
        results.textContent = 'Results: ';
        scoreBoard.textContent = '0 - 0';
        buttons.forEach(button => button.style.display = 'initial');
        playAgain.style.display = 'none';
        gameOver.textContent = '';
    }