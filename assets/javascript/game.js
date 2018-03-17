// initial declearations, wins, loses.
var wins = 0;
var loses = 0;
var randomNumber = 0;
var gm1 = 0;
var gm2 = 0;
var gm3 = 0;
var gm4 = 0;
var score = 0;

resetAndShowNumbers();


function resetAndShowNumbers() {
    //declear a rondom number for computer from 1 - 100
    randomNumber = Math.floor(Math.random() * 100) + 1;
    //assign random number to gyms (lower than number for computer)
    gm1 = Math.floor(Math.random() * randomNumber)+1;
    gm2 = Math.floor(Math.random() * randomNumber)+1;
    gm3 = Math.floor(Math.random() * randomNumber)+1;
    gm4 = Math.floor(Math.random() * randomNumber)+1;
    //set score 0
    score = 0;
    console.log("_________");
    console.log(gm1);
    console.log(gm2);
    console.log(gm3);
    console.log(gm4);
}

function displayRes(){
    //display on page
    $("#rand").html(randomNumber);
    $("#score").html(score);
    $("#wins").html(wins);
    $("#loses").html(loses);
}
displayRes();

function addAndCheck(gm){
    score = score + gm;
//Compare Score with Random Number.
 //1. If Score > Random Number : lose
if(score>randomNumber){
    //lose
    loses++;
 //2. If Score = Random Number : win
 resetAndShowNumbers();
}else if(score===randomNumber){
    //win
    wins++;
    resetAndShowNumbers();
}
}

//button behavior: when pressed increment the score + button value
    //button1

        //increase the total value of score by its value
    $("#gem1").click(function(){
        addAndCheck(gm1);
        displayRes();
    });
        
        //check if its larger then the random number
    
    
    //button2
    $("#gem2").click(function(){
        addAndCheck(gm2);
        displayRes();
    });
    //button3
    $("#gem3").click(function(){
        addAndCheck(gm3);
        displayRes();
    });
    //button4
    $("#gem4").click(function(){
        addAndCheck(gm4);
        displayRes();
    });


