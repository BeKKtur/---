import Card from "./Card";
import {Rank, Suit} from "./types";

const ranks: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
const suits: Suit[] = ['diams', 'spades', 'clubs', 'hearts'];

class CardDeck {
    private cards: Card[];

    public constructor() {
        this.cards = [];
        for (let i = 0; i < ranks.length; i++) {
            for (let j = 0; j < suits.length; j++) {
                this.cards.push(new Card(ranks[i], suits[j]));
            }
        }
    }

    public shuffle(): void {
        this.cards.sort(() => Math.floor(Math.random() * 2 - 1));
    }

    public draw(): Card {
        return <Card>this.cards.shift();
    }

    getCard(): Card {
        const random = Math.floor(Math.random() * this.cards.length);
        const spliced = this.cards.splice(random, 1);
        return spliced[0];
    }

    getCards(howMany: number): Card[] {
        const cards: Card[] = [];
        for(let i = 0; i < howMany; i++) {
            cards.push(this.getCard());
        }
        return cards;
    }
}

const deck = new CardDeck();
deck.shuffle();
export default CardDeck;