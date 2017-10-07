import React from 'react';
import PropTypes from 'prop-types';

const Card = props => (
  <div className="card card-center">
    <h1>{props.content.title}</h1>
    <p>{props.content.description}</p>
  </div>
);

Card.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
