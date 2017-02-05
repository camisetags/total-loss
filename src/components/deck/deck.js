import React from 'react';

const Deck = (props) => (
	<div className="col s3">
		<div className="card">
			<div className="card-content">
				<span className="card-title">{props.name}</span>
				{props.description}
			</div>
			<div className="card-action">
				<button type="button" className="btn waves-effect">
					Escolher
				</button>
			</div>
		</div>
	</div>
);

export default Deck;