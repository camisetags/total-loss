import React from 'react';
import { Link } from 'react-router';

const SelectPlayersActions = (props) => (
	<div className="row">
		<div className="col s6">
    	<button type="button" className="btn waves-effect" onClick={() => props.handleDispatchUser()}>
				Adicionar jogador
			</button>
		</div>
		
		<div className="col s6">
			<Link to="/select-deck" className="btn waves-effect">
				Escolher deck
			</Link>
		</div>
	</div>
);

export default SelectPlayersActions;