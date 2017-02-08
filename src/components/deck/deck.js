import React from 'react';
import { Link } from 'react-router';

const Deck = (props) => (
	<div className="col s12 l4">
		<div className="card">
			<div className="card-content">
				<span className="card-title">{props.title}</span>
				{props.description}
			</div>
			<div className="card-action">
				<div className="row">
					<Link 
						to="/game" 
						onClick={() => props.handleStartGame()} 
						className="btn waves-effect col l12 s12 m12">
						Escolher
					</Link>
				</div>
			</div>
		</div>
	</div>
);

export default Deck;