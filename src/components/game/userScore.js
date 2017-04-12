import React from 'react';

const UserScore = (props) => (
  <div className="col s6 l2">
    <div className={props.user.target ? "target-user animated bounce" : ""}>
      { props.user.target && 
        <i className="fa fa-glass" aria-hidden="true"></i>
      }
      <b>{props.user.name}: {props.user.score}</b>
    </div>
  </div>
);

export default UserScore;
