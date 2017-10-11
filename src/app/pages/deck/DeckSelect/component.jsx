import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import Card from '../../../components/Card';

const DeckSelect = props => (
  <div>
    <h1 className="main-title">Escolha um dos Decks</h1>
    <div className="cards-container">
      {props.decks && props.decks.map(deck => <Card key={v4()} content={deck} />)}
    </div>
  </div>
);

DeckSelect.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DeckSelect;
