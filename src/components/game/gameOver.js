import React from 'react';
import { Link } from 'react-router';
import { clearUsersAndGame } from '../../utils/storage';
import { connect } from 'react-redux';
import * as GameActions from '../../actions/gameActions';
import * as CommomActions from '../../actions/commonActions';
import BaseComponent from '../baseComponent';

class GameOver extends BaseComponent {

  componentDidMount() {
    console.log(`Game and users data were deleted!`);
    this.props.clearAllStates();
    clearUsersAndGame();
  }
  
  render() {
    const textAlign = {
      "textAlign": "center"
    };

    return (
      <div className="col s12 l12 animated rotateIn" style={textAlign}>
        <h3>Meus parabéns {this.props.params['username']}!</h3>
        <h3>Você está lokão!</h3>
        <Link to="/select-players" 
          onClick={() => this.handleVibrate()}
          className="btn waves-effect">
          Jogar novamente
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
		game: state.game,
		users: state.users,
		deck: state.deck
	};
};

const Actions = { ...GameActions, ...CommomActions };

export default connect(mapStateToProps, Actions)(GameOver);