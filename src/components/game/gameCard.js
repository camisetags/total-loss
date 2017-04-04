import React from 'react';

const GameCard = (props) => (
  <div className="col s12 l12 animated rotateIn">
    <div className="card blue-grey">
      <div className="card-content white-text">
        <span className="card-title">{ props.game.deck.title }</span>
        <p>{ props.game.deck.cards[props.cardIndex].challenge }</p>
      </div>
      <div className="card-action">
        <div className="row">
          <button className="btn waves-effect waves-light col s12 l3 user-button" 
            onClick={() => props.addPoint(props.game.deck.cards[props.cardIndex].accept)}>
            Aceitar +{ props.game.deck.cards[props.cardIndex].accept }
          </button>
        
          <button className="btn waves-effect waves-light col s12 l3 offset-l6 user-button" 
            onClick={() => props.addPoint(props.game.deck.cards[props.cardIndex].pass)}>
            Passar { props.game.deck.cards[props.cardIndex].pass }
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default GameCard;