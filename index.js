var count = 0;
var player1 = 0;
var player2 = 0;

function gameResult(p1, p2){

    if (p1>p2){
        player1+=1;
        document.getElementsByTagName("h4")[0].textContent = "Player 1 Wins!";
    }

    else if(p2>p1){
        player2+=1;
        document.getElementsByTagName("h4")[0].textContent = "Player 2 Wins!";
    }

    else{
        document.getElementsByTagName("h4")[0].textContent = "It was a Draw!";
    }
}

function updateDice(score){
    var update = {
        1: [2,3,4,5,6],
        2: [2,4,5,6],
        3: [4,5,6],
        4: [5,6],
        5: [5],
        6: false
    }

    if (update[score]){
        for (var i in update[score]){
            document.getElementsByClassName("dot"+i)[0].classList.add("removedDot");
        }
    }
}

function playDice() {

    // get random scores for the two players
    let player1Score = Math.ceil(Math.random() * 6);
    let player2Score = Math.ceil(Math.random() * 6);

    updateDice(player1Score); // update dice for player 1
    updateDice(player2Score); // update dice for player 2

    gameResult(player1Score, player2Score); // update the game result

    // increment game count
    count+=1;
    document.getElementsByTagName("h3")[0].textContent = "Games Played: " + count;


    
}

function resetGame(){

    // reset game count
    count = 0;
    document.getElementsByTagName("h3")[0].textContent = "Games Played: " + count;

    for (var i in [1,2,3,4,5,6]){
        document.getElementsByClassName("dot"+i)[0].classList.remove("removedDot");
    }

    alert(`
    Player 1 Score: ${player1}
    Player 2 Score: ${player2}
    `);

    // Reset the Player Scores
    player1 = 0;
    player2 = 0;

}

