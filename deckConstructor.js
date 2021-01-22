class Deck {
    constructor(){
        this.cards = [];

        const suit = ['Diamond', 'Clubs', 'Hearts', 'Spades' ];
        const points = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];

        for(let i=0; i<suit.length; i++){
            for(let j=0; j<points.length; j++) {
                //creating my deck of cards, combining points and suits in a obj
                this.cards.push({point: points[j], suit: suit[i]}); 
            }
        }
    
    }

    shuffle(){
        if (this.cards.length === 0){
            return;
        } else {
            var j, x, i;
            //Loop through the array so that we visit every card in the deck
            for (i = this.cards.length - 1; i > 0; i--) {
                //Math.random will get a random number between 0 and 1(excluded) and will multiple by the i value + 1
                //math.floor will round this number down
                //this value is assign to j and with be used as a index position of the cards array
                j = Math.floor(Math.random() * (i + 1)); 
                x = this.cards[i];
                //swap those two cards
                this.cards[i] = this.cards[j];
                this.cards[j] = x;
            }
        }
    }
    

    draw(){
        if(this.cards.length === 0){
            return console.log('No more Cards!')
        } else {
            var drawCard = this.cards[Math.floor(Math.random() * this.cards.length)];
            var indexCard = this.cards.indexOf(drawCard);
            this.cards.splice(indexCard, 1);

            console.log(drawCard);
        }       
    }

    numCardsLeft(){
        console.log(this.cards.length);

    }
}
var myDeck = new Deck()
myDeck.shuffle();
console.log(myDeck);
myDeck.draw();
myDeck.draw();
myDeck.numCardsLeft();