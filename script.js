// input and button variables declared
var winScore        = document.querySelector("input[type='number']");
var p1Button        = document.querySelector(".playerOneButton");
var p2Button        = document.querySelector(".playerTwoButton");
var reset           = document.querySelector(".resetButton");

// p1/p2 score and display variables declared
var player1Score    = document.getElementById("player1Score");
var player2Score    = document.getElementById("player2Score");
var p1Score         = 0;
var p2Score         = 0;

// gameOver, score/playing to declared
var playingTo       = document.querySelector(".playingToValue");
var winningScore    = 5;
var gameOver        = false;

// increment p1Score
p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            gameOver = true;
            player1Score.classList.add("winner");
        }
        player1Score.textContent = p1Score;
    }
});

// increment p2Score
p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            gameOver = true;
            player2Score.classList.add("winner");
        }
        player2Score.textContent = p2Score;
    }
});

// reset score
reset.addEventListener("click", function(){    
    resetScore()
});

function resetScore(){
    p1Score = 0;
    p2Score = 0;
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    player1Score.classList.remove("winner");
    player2Score.classList.remove("winner");   
    gameOver = false;
}

// enter new winningScore
winScore.addEventListener("change", function(){
    playingTo.textContent = this.value;
    winningScore = Number(this.value);
    resetScore()
});