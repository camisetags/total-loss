import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../../core/components/Card';

const DeckSelect = props => (
  <div>
    <h1 className="main-title">Escolha um dos baralhos</h1>
    <div className="cards-container">{props.decks.map(deck => <Card deck={deck} />)}</div>
  </div>
);

DeckSelect.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DeckSelect;
