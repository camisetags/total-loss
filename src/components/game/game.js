import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions/gameActions';

class Game extends Component {

	componentWillMount() {
		console.log('Props from Game compoenent ', this.props);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('Props loaded ', this.props);
	}

	render() {
		return (
			<div className="row">
				{ typeof this.props.game.deck === 'undefined' ? ( 
					<div className="col s1 l5 offset-s5"> 
						<div className="preloader-wrapper big active">
					    <div className="spinner-layer spinner-blue-only">
					      <div className="circle-clipper left">
					        <div className="circle"></div>
					      </div>
					      <div className="gap-patch">
					        <div className="circle"></div>
					      </div>
					      <div className="circle-clipper right">
					        <div className="circle"></div>
					      </div>
					    </div>
					  </div>
					</div>
				) : (
					<div className="col s1 l12 card">
						<h3>
							{ this.props.game.deck.title }
						</h3>
						<p>
							{ this.props.game.deck.cards[0].challenge }
						</p>
					</div>
				) }
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { 
		game: state.game,
		users: state.users,
		deck: state.deck
	};
}

export default connect(mapStateToProps, Actions)(Game);