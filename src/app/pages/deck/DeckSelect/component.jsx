import * as React from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, object, func } from 'prop-types';

import Card from '../../../components/Card';

const propTypes = {
  decks: arrayOf(object).isRequired,
  selectDeck: func.isRequired,
};

const DeckSelect = ({ decks, selectDeck }) => {
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

DeckSelect.propTypes = propTypes;

export default DeckSelect;
