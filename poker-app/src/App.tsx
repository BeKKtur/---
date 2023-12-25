import './App.css';
import cardDeck from "./lib/CardDeck";
import Card from './lib/Card'
import {useState} from "react";
import CardsList from "./Cards/CardsList";
import PokerHand from "./lib/PokerHand";

const deck = new cardDeck();

function App() {
    const [cards, setCards] = useState<Card[]>([])
    return (
        <>
            {cards.length > 0 ?
                <>
                    <CardsList cards={cards.filter(Boolean)}/>
                    <p>{new PokerHand(cards.filter(Boolean)).getOutCome()}</p>
                </> :
                <button onClick={() => setCards(deck.getCards(5))}>Раздать карты</button>
            }
        </>
    );
}

export default App
