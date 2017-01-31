import React from 'react';
import logo from '../logo.svg';

const Master = (props) => (
  <div>
    <Header />
    <div className="container">
      { props.children }
    </div>
  </div>
);

export default Master;