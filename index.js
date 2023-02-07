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
        document.getElementsByTagName("h4")[0].textContent = "Draw!";
    }
}

function updateDice(score, player){
    var update = {
        1: [2], // [dotsToAppear]
        2: [1,3],
        3: [1,2,3],
        4: [1,3,4,6],
        5: [1,2,3,4,6],
        6: [1,2,3,4,5,6]
    }

    // update dice to initial condition
    for (var i of [1,2,3,4,5,6]){
        const list = document.getElementById(player + "dot" + i).classList;
        list.remove("addDot");
    }

    // make dots appear with respect to player score
    for (var i of update[score]){
        const list = document.getElementById(player + "dot" + i).classList;
        list.add("addDot")
    }
}

function playDice() {

    // increment game count
    count+=1;
    document.getElementsByTagName("h3")[0].textContent = "Games Played: " + count;

    // get random scores for the two players in range [1,6]
    let player1Score = Math.ceil(Math.random() * 6);
    let player2Score = Math.ceil(Math.random() * 6);

    updateDice(player1Score, 'p1-'); // update dice for player 1
    updateDice(player2Score,'p2-'); // update dice for player 2

    gameResult(player1Score, player2Score); // update the game result on screen
    
}

function resetGame(){

    // reset game count
    count = 0;
    document.getElementsByTagName("h3")[0].textContent = "Games Played: " + count;

    // reset dice
    for (var i of [1,2,3,4,5,6]){
        document.getElementById("p1-" + "dot" + i).classList.remove("addDot");
        document.getElementById("p2-" + "dot" + i).classList.remove("addDot");
    }

    // display the session result
    alert(`
    Player 1 wins ${player1} Games!
    Player 2 wins ${player2} Games!
    `);

    // Reset the Player Scores
    player1 = 0;
    player2 = 0;

    // Update the result board
    document.getElementsByTagName("h4")[0].textContent = "Game About to Start!";

}

