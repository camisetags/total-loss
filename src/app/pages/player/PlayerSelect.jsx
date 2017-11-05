import React from 'react';

const PlayerSelect = () => (
  <div>
    <h1 className="main-title">Quem vai jogar?</h1>
    <div className="players-container">
      <div className="side-buttons">
        <button className="button mid side-button button-margin">
          <i className="arrow-icon up" />
        </button>
        <button className="button mid side-button button-margin">
          <i className="arrow-icon down" />
        </button>
      </div>

      <div className="users-cards">
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
      </div>
      {/* <input type="text" className="inputfield" placeholder="Jogador" /> */}
    </div>
  </div>
);

export default PlayerSelect;
