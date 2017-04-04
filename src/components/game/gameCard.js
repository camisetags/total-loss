import React from 'react';

const GameCard = (props) => (
  <div className="col s12 l12 animated rotateIn">
    <div className="card blue-grey">
      <div className="card-content white-text">
        <span className="card-title">{ props.game.deck.title }</span>
        <p>{ props.game.deck.cards[props.cardIndex].challenge }</p>
        <p>{ props.game.deck.cards[props.cardIndex].challengeResult }</p>
      </div>
      <div className="card-action">
        <div className="row">
          <div className="col l4 s12">
            <button className="btn waves-effect waves-light" 
              onClick={() => props.addPoint(props.game.deck.cards[props.cardIndex].accept)}>
              Aceitar +{ props.game.deck.cards[props.cardIndex].accept }
            </button>
          </div>

          <div className="col l4 s12">
            <button className="btn waves-effect waves-light" 
              onClick={() => props.addPoint(props.game.deck.cards[props.cardIndex].pass)}>
              Passar { props.game.deck.cards[props.cardIndex].pass }
            </button>
          </div>

          <div className="col l4 s12">
            <button className="btn waves-effect waves-light" 
              onClick={() => props.addPoint(props.game.deck.cards[props.cardIndex].drink)}>
              Tomar 2 shots +{ props.game.deck.cards[props.cardIndex].drink }
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GameCard;