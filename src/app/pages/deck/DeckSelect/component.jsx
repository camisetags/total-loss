import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

import Card from '../../../components/Card';

const DeckSelect = props => (
  <div>
    <h1 className="main-title">Escolha um dos Decks</h1>
    <div className="cards-container">
      {props.decks &&
        props.decks.map(deck => (
          <Card key={v4()} content={deck}>
            <Link
              to="players-select"
              onClick={() => props.selectDeck(deck.id)}
              className="button small"
            >
              Escolher
            </Link>
          </Card>
        ))}
    </div>
  </div>
);

DeckSelect.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DeckSelect;
