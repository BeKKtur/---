import {Rank, Suit} from "./types";

class Card {
    public readonly rank: Rank;
    public readonly suit: Suit

    public constructor(rank: Rank, suit: Suit) {
        this.rank = rank
        this.suit = suit
    }
}

export default Card;