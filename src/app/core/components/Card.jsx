import React from 'react';
import PropTypes from 'prop-types';

const Card = props => (
  <div className="card card-center">
    <h1>{props.card.title}</h1>
    <p>{props.card.description}</p>
  </div>
);

Card.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
