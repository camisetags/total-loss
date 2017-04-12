import React from 'react';
import { Link } from 'react-router';
import BaseComponent from '../baseComponent';
import drunkStickman from '../../images/drunkStickman.png';

class StartScreen extends BaseComponent {
  render() {
    const textAlign = {
      "textAlign": "center"
    };

    return (
      <div className="col s12 l12 animated rotateIn" style={textAlign}>
        <h4>Bem vindo ao [nome do jogo]</h4>
        <div>
          <img role="presentation" src={drunkStickman} />
        </div>

        <Link to="/select-players" 
          onClick={() => this.handleVibrate()}
          className="btn waves-effect">
          Começar o jogo!
        </Link>
      </div>
    );
  }
}

export default StartScreen;
