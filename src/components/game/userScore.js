import React from 'react';

const UserScore = (props) => (
  <div className="col s12 l2">
    <b>{props.user.name}: {props.user.score}</b>
  </div>
);

export default UserScore;