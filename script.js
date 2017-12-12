/*Array storing all of the cards in the deck */
var deck = ["CardA.PNG", "CardB.PNG", "CardC.PNG", "CardD.PNG", "CardE.PNG", "CardF.PNG", "CardG.PNG", "CardH.PNG", "CardA.PNG", "CardB.PNG", "CardC.PNG", "CardD.PNG", "CardE.PNG", "CardF.PNG", "CardG.PNG", "CardH.PNG"];


/* Variables */     
var DeckPosOne = "";
var DeckPosTwo = "";
var gameScore = 0;
var pairCount = 0;
var cardList = [];
var cardCount = 0;
var finalTime = 0;

    
/* Start of game, shuffle deck and display the deck array to help with debugging */
    
function startGame() {
   shuffle(deck);
   deck.toString();
   //alert(deck);
   //document.getElementById("demo").innerHTML = deck;
   //document.getElementById('card4').src = deck[3];
   //console.log(deck[]);
    //start();
   return deck;

}
/* shuffle function */
function shuffle(array) {
var i = 0
var j = 0
var temp = null

for (i = array.length - 1; i > 0; i -= 1) {
   j = Math.floor(Math.random() * (i + 1))
   temp = array[i]
   array[i] = array[j]
   array[j] = temp
}
}
    
/* Function that comes from the onclick of a card 
Takes card id and aligns it with card in the array
then in theory displays the card before going to do a card comparison */
    
function CardClick(item){ 
            if (cardCount === 0){
                cardList[0] = $(item).attr("id");
                //alert(cardCount);
                cardCount ++;
                DeckPosOne = cardList[0].match(/\d/g).join("");
                document.getElementById(cardList[0]).src = deck[DeckPosOne-1];
                
                return DeckPosOne, cardList[0];

            } else if (cardCount === 1) {
             
                cardList[1] = $(item).attr("id");
                //alert(cardList[1], cardList[0]);
                /* Check to see if the card is the same one clicked twice*/
                  if (cardList[0] === cardList[1]){
                    alert("Cards Are The Same - click again");
                    return;
                }
             
                DeckPosTwo = cardList[1].match(/\d/g).join("");
                document.getElementById("score").innerHTML = gameScore;
                <!---The line of code bleow is not executing --->
                document.getElementById(cardList[1]).src = deck[DeckPosTwo-1];
                
                
                //alert(cardCount);
                cardCount = 0;
                gameScore ++;
                //displayClicks();
                compareCards();
                document.getElementById("score").innerHTML = gameScore;
              
                    if (pairCount === 8){
                        endGame();
                    }
                
                return DeckPosTwo;
            }
        
    
  
}
    
  /* Function to compare the cards, if the same Snap and display a match png file, or no match return to cardBack */
    
function compareCards(){
    
    if (deck[DeckPosOne-1] == deck[DeckPosTwo-1]){
        //alert(deck[DeckPosTwo-1], deck[DeckPosOne-1] );
        alert("SNAP");
        document.getElementById(cardList[0]).src = "Match.PNG";
        document.getElementById(cardList[1]).src = "Match.PNG";
        pairCount ++;
    } else {
        document.getElementById(cardList[0]).src = "cardBack.PNG";
        document.getElementById(cardList[1]).src = "cardBack.PNG";
    }
}
    
/*    
function displayClicks(){
    for (var arraycount = 0; arraycount < cardList.length; arraycount++) {
        alert("card " + cardList[arraycount]);
    }
}
*/
  
    
function endGame(){
    //alert("Into End game function");
    //Need a pop up to show Final Score
    //Time and Play again button.
    stopTimer();
    starRating();
    $('#popModal').show();
    document.getElementById("final-score").innerHTML += gameScore;
    document.getElementById("time").innerHTML += finalTime;
}


    
/* Code for timer */
function changeValue() {
  document.getElementById("testTimer").innerHTML = ++value;
}

var timerInterval = null;
function start() {
  stop(); // stoping the previous counting (if any)
  value = 0;
  timerInterval = setInterval(changeValue, 1000);  
}
    
function stopTimer() {
  clearInterval(timerInterval);
  finalTime = value;
    //alert(finalTime);
    
  return finalTime;
}
    
    
function starRating(){
    if (gameScore < 20){
       document.getElementById("rating").innerHTML += "3 Stars!";
    } else if (gameScore >= 20 & gameScore <= 60){
        document.getElementById("rating").innerHTML += "2 Stars!";
    } else {
        document.getElementById("rating").innerHTML += "1 Star!";
    }
}
    
    
function reStart(){
    //reset all cards and scores and reshuffle the deck
    //alert("You want to restart?")
    stopTimer();
    gameScore = 0;
    document.getElementById("score").innerHTML = gameScore;
    document.getElementById("testTimer").innerHTML = 0;
    document.getElementById('popModal').style.display='none';
    var numberCards = 1;
    while (numberCards < 17){
        //alert(numberCards);
     document.getElementById('card'+numberCards).src = "cardBack.PNG"; 
    numberCards++;
    }
    
}
    
    
    