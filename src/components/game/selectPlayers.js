import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../actions/userActions';
import SelectPlayersActions from './selectPlayerActions';

class SelectPlayers extends Component {

	constructor(props) {
		super(props);
		this.state = {
			playerNum: 1
		};
	}

	handleDispatchUser() {
		this.props.addUserToTheGame(
			this.refs.userName.value,
			this.state.playerNum
		);
		this.refs.userName.value = '';
		this.setState({
			playerNum: ++this.state.playerNum
		});
	}

	render() {
		return (
			<div className="row">
		    <div className="col s12 m12">
		      <div className="card">
		        <div className="card-content">
		        	<input type="hidden" ref="playerNum" />
		          <span className="card-title">Digite o nome do Jogador {this.state.playerNum}</span>	
							
							<div className="input-field">
			          <input id="player_name" type="text" ref="userName" className="validate" />
			          <label htmlFor="player_name">Player Name</label>
			        </div>
		        </div>

		        <div className="card-action">
		        	<SelectPlayersActions handleDispatchUser={() => this.handleDispatchUser()} />
		        </div>
		      </div>
		    </div>
		  </div>	
		);
	}
}

function mapStateToProps(state) {
	return { 
		playerNum: state.playerNum,
		userName: state.userName
	};
}

export default connect(mapStateToProps, Actions)(SelectPlayers);