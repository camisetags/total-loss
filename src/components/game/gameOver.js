import React from 'react';
import { clearUsersAndGame } from '../../utils/storage';

class GameOver extends React.Component {

  componentDidMount() {
    console.log(`Game and users data were deleted!`);
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
      </div>
    );
  }
}

export default GameOver;