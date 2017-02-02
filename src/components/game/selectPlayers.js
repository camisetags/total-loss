import React, { Component } from 'react';
import { Link } from 'react-router';

class SelectPlayers extends Component {

	constructor(props) {
		super(props);
		this.state = {
			playerNum: 1,
			playerOneName: this.props.location.query.playerOneName || ''
		};
	}

	componentWillMount() {
		if (this.props.location.pathname === 'player-two') {
			this.state.playerNum++;
		}
	}

	setSelectionButton() {
		if (this.props.location.pathname === 'player-two') {
			return (<Link to="battle">Começar o duelo!</Link>);
		}
		
		const playerLink = {
			pathname: 'player-two', 
			query: { 
				playerOneName: this.state.playerOneName 
			}
		};

		return (<Link to={playerLink}>Selecione outro jogador</Link>);
	}

	render() {
		return (
			<div className="row">
		    <div className="col s12 m12">
		      <div className="card blue-grey darken-1">
		        <div className="card-content white-text">
		          <span className="card-title">Jogador {this.state.playerNum}</span>
								
								<div className="input-field col s12">
			          <input id="player_name" type="text" className="validate" />
			          <label htmlFor="player_name">Player Name</label>
			        </div>
		        </div>

		        <div className="card-action">
		        	{this.setSelectionButton()}
		        </div>
		      </div>
		    </div>
		  </div>	
		);
	}
}

export default SelectPlayers;