import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../actions/userActions';
import SelectPlayersActions from './selectPlayerActions';

class SelectPlayers extends Component {

	handleDispatchUser() {
		this.props.addUserToTheGame(
			this.refs.userName.value
		);
		this.refs.userName.value = '';
	}

	render() {
		return (
			<div className="row animated fadeIn">
		    <div className="col s12 m12 l12">
		      <div className="card">
		        <div className="card-content">
		        	<input type="hidden" ref="playerNum" />
		          <span className="card-title">Digite o nome do Jogador { this.props.users.length + 1 }</span>	
							
							<div className="input-field">
			          <input id="player_name" type="text" ref="userName" className="validate" />
			          <label htmlFor="player_name">Player Name</label>
			        </div>
		        </div>

		        <div className="card-action">
		        	<SelectPlayersActions 
								handleDispatchUser={() => this.handleDispatchUser()} />
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
		users: state.users
	};
}

export default connect(mapStateToProps, Actions)(SelectPlayers);