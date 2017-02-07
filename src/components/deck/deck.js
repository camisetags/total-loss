import React from 'react';
import DeckButton from './deckButton';

const Deck = (props) => (
	<div className="col s12 l4">
		<div className="card">
			<div className="card-content">
				<span className="card-title">{props.title}</span>
				{props.description}
			</div>
			<div className="card-action">
				<DeckButton 
					startGame={props.startGame} 
					users={props.users} 
					deckId={props.deckId}/>
			</div>
		</div>
	</div>
);

export default Deck;