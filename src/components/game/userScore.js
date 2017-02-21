import React from 'react';

const UserScore = (props) => (
  <div className="col s1 l2">
    <b>{props.user}: {props.score}</b>
  </div>
);

export default UserScore;