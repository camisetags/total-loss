import React from 'react';

const textAlign = {
  "text-align": "center"
};

const GameOver = (props) => (
  <div className="col s12 l12 animated rotateIn" style={textAlign}>
    <h3>Meus parabéns {props.params['username']}!</h3>
    <h3>Você está lokão!</h3>
  </div>
);

export default GameOver;