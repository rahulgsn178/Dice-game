


var scores, currentScore, activePlayer, gamePlaying;

init();

document.querySelector('#btn-roll').addEventListener('click', function(){

    if(gamePlaying){

        // random number 
        var dice = Math.floor(Math.random()*6) + 1;
        console.log(dice);
    
        // display the result
        document.querySelector('img').style.display = 'block';
        document.querySelector('img').setAttribute('src', 'Dice Images/dice-' + dice + '.svg');
        
        if(dice !== 6) {
            // add the score
            currentScore = currentScore + dice;
            document.querySelector('#current-score-' + activePlayer + '>p').textContent = currentScore;
        } else {
            // next player will roll
            nextPlayer();
        
        }   

    }
});


document.querySelector('#btn-hold').addEventListener('click', function(){
    
    if(gamePlaying){
        
        // add current score to the global score
        scores[activePlayer] += currentScore;
    
        // update the UI
        document.querySelector('#global-score-' + activePlayer + '>p').textContent = scores[activePlayer];     
    
        // check if player won the game
        if(scores[activePlayer] >= 20) {
            document.querySelector('#player-' + activePlayer + '>h1').textContent = 'Winner!'
            document.querySelector('img').style.display = 'none';
            document.querySelector('.player-' + activePlayer).classList.remove('active-' + activePlayer);
            gamePlaying = false;
    
        } else {
            // next player 
            nextPlayer();
        }
    }

});

document.querySelector('#btn-new').addEventListener('click', init);

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    currentScore = 0;

    document.querySelector('#current-score-0>p').textContent = '0';
    document.querySelector('#current-score-1>p').textContent = '0';  
    
    document.querySelector('.player-0').classList.toggle('active-0');
    document.querySelector('.player-1').classList.toggle('active-1');
    

    document.querySelector('img').style.display = 'none';    

}


function init() {
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0
    gamePlaying = true;

    document.querySelector('img').style.display = 'none';

    document.querySelector('#global-score-0>p').textContent = '0';
    document.querySelector('#global-score-1>p').textContent = '0';
    document.querySelector('#current-score-0>p').textContent = '0';
    document.querySelector('#current-score-1>p').textContent = '0';
    document.querySelector('#player-0>h1').textContent = 'Player 1'
    document.querySelector('#player-1>h1').textContent = 'Player 2'

    // document.querySelector('.player-0').classList.add('active-0');
    document.querySelector('.player-0').classList.remove('active-0');
    document.querySelector('.player-1').classList.remove('active-1');
    document.querySelector('.player-0').classList.add('active-0');
    
}




























