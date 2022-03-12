class Deck{
    constructor(){
        this.cards = []
        this.suits = ['diamonds', 'hearts', 'spades', 'clubs']
        this.values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
        this.suits.forEach((suit) => {
            this.values.forEach((value) => {
                this.cards.push(new Card(value, suit));
            });
        });
      this.cards = shuffle(this.cards)  
    }

    compare(p1Card, p2Card) {
        if (this.values.indexOf(p1Card.value) > this.values.indexOf(p2Card.value)) {
            return 'p1wins';
        } else if (this.values.indexOf(p2Card.value) > this.values.indexOf(p1Card.value)) {
            return 'p2wins';
        } else if (this.values.indexOf(p2Card.value) == this.values.indexOf(p1Card.value)) {
            return 'tie';
        }
    }
}


class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
        this.hand = [];
    }
}

class Card{
    constructor(value, suit){
        this.value = value
        this.suit = suit
    }
}
class Menu{
    constructor(){

    }
    start(){
      let player1Name = prompt('enter name for Player 1')
      let player2Name =  prompt('enter name for Player 2')
      let player1 = new Player((player1Name) ? player1Name : 'Player 1')
      let player2 = new Player((player2Name) ? player2Name : 'Player 2')
      let deck = new Deck()
      while (deck.cards.length > 0){
        player1.hand.push(deck.cards.shift())
        player2.hand.push(deck.cards.shift())
      }
      let roundResult = '';
      while(player1.hand.length > 0){
          let player1card = player1.hand.shift()
          let player2card = player2.hand.shift()
          roundResult = `
            ${player1.name} played ${player1card.value} of ${player1card.suit}
            ${player2.name} played ${player2card.value} of ${player2card.suit}
          `;
          let result = deck.compare(player1card, player2card)
          if (result == "p1wins"){
              player1.score++
              roundResult += `\n ${player1.name} won this round`;
          } else if (result == "p2wins"){
              player2.score++
              roundResult += `\n ${player2.name} won this round`;
          } else if (result == "tie"){
            roundResult += `\n This round was a tie`;
          }
          alert(roundResult);
      }
      if(player1.score > player2.score){
          alert(`${player1.name} wins!!`);
      } else if(player2.score > player1.score){
          alert(`${player2.name} wins!!`)
      } else{
          alert("You both lose")
      }
    }
}
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
   
    while (currentIndex != 0) {
  
    
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
let menu = new Menu();
menu.start();
