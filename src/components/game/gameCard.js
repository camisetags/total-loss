import React from 'react';

const GameCard = (props) => (
  <div className="col s12 l12">
    <div className="card blue-grey">
      <div className="card-content white-text">
        <span className="card-title">{ props.game.deck.title }</span>
        <p>{ props.game.deck.cards[0].challenge }</p>
        <p>{ props.game.deck.cards[0].challengeResult }</p>
      </div>
      <div className="card-action">
        <div className="row">
          <div className="col l4">
            <a className="btn waves-effect waves-light" onClick={() => props.addPoint(1, 1)} href="#">
              Aceitar +{ props.game.deck.cards[0].accept }
            </a>
          </div>

          <div className="col l4">
            <a className="btn waves-effect waves-light" href="#">
              Passar { props.game.deck.cards[0].pass }
            </a>
          </div>

          <div className="col l4">
            <a className="btn waves-effect waves-light" onClick={() => props.addPoint(1, 1)} href="#">
              Tomar 2 shots +{ props.game.deck.cards[0].drink }
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GameCard;