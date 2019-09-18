function Card(suit, symbol) {
    this.suit = suit;
    this.symbol = symbol;
}

Card.prototype.toString = function() {
    return `${this.suit}${this.symbol}`;
};

let Poker = function() {
    function suit(number) {
        switch(parseInt((number - 1) / 13)) {
            case 0 : return "桃";
            case 1 : return "心";
            case 2 : return "磚";
            case 3 : return "梅";
        }
    }
    
    function symbol(number) {
        let remain = number % 13;
        switch(remain) {
            case 0 : return 'K ';
            case 1 : return 'A ';
            case 11: return 'J ';
            case 12: return 'Q ';
            default: return remain + 
                new Array(3 - (remain + '').length).join(' ');
        }
    }

    let cards = [];
    for(let i = 0; i < 52; i++) {
        cards.push(new Card(suit(i + 1), symbol(i + 1)));
    }
    
    return {
        shuffle: function() {
            for(let i = 0; i < cards.length; i++) {
                let j = parseInt(Math.random() * cards.length - 1);
                let tmp = cards[i];
                cards[i] = cards[j];
                cards[j] = tmp;
            }
            return cards.slice(0, cards.length);
        }
    };
}();

let cards = Poker.shuffle();
for(let i = 0; i < 52; i += 13) {
    console.log(
        cards.slice(i, i + 13)
             .map(card => card.toString())
             .join(' ')
    );
}