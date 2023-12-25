import Card from "./Card";

class PokerHand {
    public readonly cards: Card[];

    public constructor(cards: Card[]) {
        this.cards = cards
    }

    getOutCome() {
        let countRank = 0;
        let countSuits = 0;
        for (let i = 0; i < this.cards.length; i++) {
            for (let j = i + 1; j < this.cards.length; j++) {
                if (this.cards[i].rank === this.cards[j].rank) {
                    countRank++;
                }
                if (this.cards[i].suit === this.cards[j].suit) {
                    countSuits++;
                }
            }
        }
        if (countRank === 1) {
            return 'Одна пара';
        }
        if (countRank === 2) {
            return 'Две пары';
        }
        if (countRank === 3) {
            return 'Тройка';
        }
        if (countSuits === 5) {
            return 'Флэш';
        } else {
            return 'Старшая карта';
        }
    }
}

export default PokerHand;