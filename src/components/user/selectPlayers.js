import React from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../actions/userActions';
import SelectPlayersActions from './selectPlayerActions';
import BaseComponent from '../baseComponent';
import UserList from './userList';

class SelectPlayers extends BaseComponent {

	handleDispatchUser() {
		this.handleVibrate();
		this.props.addUserToTheGame(
			this.refs.userName.value
		);
		this.refs.userName.value = '';
	}

	render() {
		const style = {
			"marginTop": "-44px"
		};
		
		return (
			<div>
				<div className="row animated fadeIn" style={style}>
					<div className="col s12 m12 l12">
						<div className="card">
							<div className="card-content">
								<input type="hidden" ref="playerNum" />
								<span className="card-title">Adicionar Jogador { this.props.users.length + 1 }</span>	
								
								<div className="input-field">
									<input id="player_name" type="text" ref="userName" required="" />
									<label htmlFor="player_name" data-error="Digite um nome válido">Nick do jogador</label>
								</div>
							</div>

							<div className="card-action">
								<SelectPlayersActions 
									handleDispatchUser={() => this.handleDispatchUser()} 
									handleVibrate={() => this.handleVibrate()} />
							</div>
						</div>
					</div>
				</div>

				<UserList users={this.props.users}/>
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
