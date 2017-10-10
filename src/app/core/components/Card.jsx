import React from 'react';
import PropTypes from 'prop-types';

const Card = props => (
  <div className="card card-center">
    <h1>{props.content.name}</h1>
    <p>{props.content.description}</p>
  </div>
);

Card.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
