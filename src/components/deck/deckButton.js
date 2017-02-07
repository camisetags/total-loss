import React from 'react';
import { Link } from 'react-router';

const DeckButton = (props) => (
	<div className="row">
		<Link to={'/game/'+props.deckId} className="btn waves-effect col l12 s12 m12">
			Escolher
		</Link>
	</div>
);

export default DeckButton;