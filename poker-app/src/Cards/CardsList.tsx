import React from 'react';
import Card from "../lib/Card";
import CardItem from "./CardItem";

interface CardListProps {
    cards: Card[]
}

const CardsList: React.FC<CardListProps> = ({cards}) => {
    return (
        <div className="playingCards faceImages">
            {cards.map((card,index) => (
                <CardItem key={index} rank={card.rank} suit={card.suit}/>
            ))}
        </div>
    );
};

export default CardsList;