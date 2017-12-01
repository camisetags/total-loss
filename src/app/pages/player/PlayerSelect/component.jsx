// @flow
import * as React from 'react';

import CardUser from './Components/cardUser';
import type { UsersListProps } from './props';

const UserList = (props: UsersListProps): React.Node => {
  const users = props.collection;
  return (
    <div className="users-cards ">
      {users &&
        users.map(user => (
          <CardUser
            key={`${user.id}`}
            onClickEditUser={props.onClickEditUser}
            handleSubmit={props.handleSubmit}
            content={user}
          />
        ))}
    </div>
  );
};

export default UserList;
