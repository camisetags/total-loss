import React from 'react';
import { Link } from 'react-router';

const Deck = (props) => {
	const animationDelay = {
		"animationDelay": `${props.target/2}s`
	};

	return (
		<div className="col s12 l4 animated bounceIn" style={animationDelay}>
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
};

export default Deck;