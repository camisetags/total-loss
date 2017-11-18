// @flow
import * as React from 'react';

import CardUser from '../../../components/CardUser';
import type { UsersListProps } from './props';

const UserList = (props: UsersListProps): React.Node => {
  const users = props.collection.listOfUsers;
  return (
    <div>
      <h1 className="main-title">Escolha um dos Decks</h1>
      <div className="cards-container">
        {users && users.map(user => <CardUser key={`${user.id}`} content={user} />)}
      </div>
    </div>
  );
};

export default UserList;
