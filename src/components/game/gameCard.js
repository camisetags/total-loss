import React from 'react';

const GameCard = (props) => (
  <div className="col s1 l12">
    <div className="card blue-grey">
      <div className="card-content white-text">
        <span className="card-title">{ props.game.deck.title }</span>
        <p>{ props.game.deck.cards[0].challenge }</p>
        <p>{ props.game.deck.cards[0].challengeResult }</p>
      </div>
      <div className="card-action">
        <a href="#">Aceitar +{ props.game.deck.cards[0].accept }</a>
        <a href="#">Passar { props.game.deck.cards[0].pass }</a>
        <a href="#">Tomar 2 shots +{ props.game.deck.cards[0].drink }</a>
      </div>
    </div>
  </div>
);

export default GameCard;