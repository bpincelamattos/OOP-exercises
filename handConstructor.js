class Hand {
    constructor(){
        this.cards = [];

    }

    addCard(card){
        this.cards.push(card);
    }
   

    getPoints(){
        console.log(this.cards.reduce((a, b) => a.point + b.point));
    }
}

class Card{
    constructor(point, suit){
        this.point = point;
        this.suit = suit;
    }
}

var myHand = new Hand();
//addCard is receiving the returned obj from the Card class new instance and adding in the array of Hand's class
myHand.addCard(new Card(5, 'diamonds')); 
myHand.addCard(new Card(13, 'spades'));
myHand.getPoints();