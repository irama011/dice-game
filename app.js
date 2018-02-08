var currentScore=0,roundScore=0,p1totalScore=0,p2totalScore=0;
function play(player){
      currentScore = Math.floor(Math.random()*6)+1
    //document.getElementById('local').innerHTML = currentScore;
    showDice(currentScore);
    if(currentScore!==1){
        roundScore+=currentScore;
        console.log('Round Score:',roundScore);
    }else{
        roundScore = 0;
        switchPlayer(player);
        document.getElementById(player).lastElementChild.disabled = true;
        document.getElementById(player).lastElementChild.previousElementSibling.disabled = true;
    }
    document.getElementById(`${player}score`).innerHTML = roundScore;
    return roundScore;
}

function hold(player){
    //console.log('Round Score:',roundScore);
    document.getElementById(player).lastElementChild.disabled = true;
    document.getElementById(player).lastElementChild.previousElementSibling.disabled = true;
    switchPlayer(player);
    if(player==='p1'){
        p1totalScore+=roundScore;
        console.log('Total Score:',p1totalScore);
         document.getElementById(`${player}totalscore`).innerHTML = p1totalScore;
         roundScore=0;
         declareWinner(player,p1totalScore);
         

    } else {
        p2totalScore+=roundScore;
        console.log('Total Score:',p2totalScore);
        document.getElementById(`${player}totalscore`).innerHTML = p2totalScore;
        roundScore=0;
       declareWinner(player,p2totalScore);
    }
    
    //document.getElementById(`${player}totalscore`).innerHTML = totalScore;
}

function declareWinner(player,totalScore){
    if(totalScore>=100){
        document.getElementById(player).firstElementChild.innerHTML = 'Winner';
         
    }
}


function switchPlayer(player){
    if(player==='p1'){
        player='p2';
        document.getElementById(player).lastElementChild.disabled = false;
        document.getElementById(player).lastElementChild.previousElementSibling.disabled = false;
    }
    else {
        player='p1';
        document.getElementById(player).lastElementChild.disabled = false;
        document.getElementById(player).lastElementChild.previousElementSibling.disabled = false;
    }
}

function showDice(num){
    document.getElementById('local').setAttribute('src',`Dice-${num}.png`);
}

function startNewGame(){
    
    currentScore=0;
    roundScore=0;
    p1totalScore=0;
    p2totalScore=0;
    document.getElementById('p1score').innerHTML = "";
    document.getElementById('p2score').innerHTML = "";
    document.getElementById('p1totalscore').innerHTML = "";
    document.getElementById('p2totalscore').innerHTML = "";
    document.getElementById('local').setAttribute('src',"");
}
