// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1 className="main-title"> Me drunk </h1>

    <div className="center-grid">
      <Link to="card-select">
        <button className="button big">Jogar!</button>
      </Link>
    </div>
  </div>
);

export default Home;
