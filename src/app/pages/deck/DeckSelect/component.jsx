// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../../components/Card';
import type { DeckSelectProps } from './props';

const DeckSelect = (props: DeckSelectProps): React.Node => {
  const selectDeck = props.selectDeck;
  return (
    <div>
      <h1 className="main-title">Escolha um dos Decks</h1>
      <div className="cards-container">
        {props.decks &&
          props.decks.map(deck => (
            <Card key={`deck-${deck.id}`} content={deck}>
              <Link
                to="players-select"
                onClick={() => selectDeck(deck.id)}
                className="button small"
              >
                Escolher
              </Link>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default DeckSelect;
