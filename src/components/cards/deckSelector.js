import React, {Component} from 'react';

class DeckSelector extends Component {
	render() {
		return (
			<div className="row">
		    <div className="col s12 m12">
		      <div className="card">
		        <div className="card-content">
		        	<input type="hidden" ref="playerNum" />
		          <span className="card-title">Escolha o deck</span>

		        </div>

		        <div className="card-action">
		        	<button type="button" className="btn waves-effect">
								Ação 1
							</button>

							<button type="button" className="btn waves-effect">
								Ação 2
							</button>
		        </div>
		      </div>
		    </div>
		  </div>	
		);
	}
}

export default DeckSelector;