import React from 'react';

const UserList = (props) => (
    <ul className="row">
      { props.users &&
        props.users.map((user, index) =>
          <li key={index} className="animated bounceInDown"> 
            <div className="col l6 s12 card">
              <div className="card-content">
                Jogador: {user.name}
              </div>
            </div>
          </li>
      )}
    </ul>
);

export default UserList;