import React from "react";
import {Rank, Suit} from "../lib/types";

interface CardItemProps {
    rank: Rank;
    suit: Suit;
}

const suitMap = {
    'diams': '♦',
    'hearts': '♥',
    'clubs': '♣',
    'spades': '♠'
}


const CardItem: React.FC<CardItemProps> = ({rank, suit}) => {
    return (
        <span className={`card rank-${rank} ${suit}`}>
            <span className="rank">{rank.toUpperCase()}</span>
            <span className="suit">{suitMap[suit]}</span>
        </span>
    );
};

export default CardItem;