import * as React from 'react';
import { Link } from 'react-router-dom';

import { Deck } from '../../../data/deck/types';
import Card from '../../../components/Card';

type DeckSelectProps = {
  decks: Deck[],
  selectDeck: Function,
};

const DeckSelect = ({ decks, selectDeck }: DeckSelectProps) => {
  const selDeck = selectDeck;
  return (
    <div>
      <h1 className="main-title">Escolha um dos Decks</h1>
      <div className="cards-container">
        {decks &&
          decks.map(deck => (
            <Card key={`deck-${deck.id}`} content={deck}>
              <Link to="players-select" onClick={() => selDeck(deck.id)} className="button small">
                Escolher
              </Link>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default DeckSelect;
