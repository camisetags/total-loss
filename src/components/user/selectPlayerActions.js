import React from 'react';
import { Link } from 'react-router';

const SelectPlayersActions = (props) => (
	<div className="row">
  	<button type="button" 
  		className="btn waves-effect col s12 l3 user-button" 
  		onClick={() => props.handleDispatchUser()}>
			Adicionar jogador
		</button>
		
		<Link to="/select-deck"
			className="btn waves-effect col s12 l3 offset-l6 user-button">
			Escolher deck
		</Link>
	</div>
);

export default SelectPlayersActions;