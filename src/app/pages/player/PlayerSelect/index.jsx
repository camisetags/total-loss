// @flow
import React from 'react';
import { connect } from 'react-redux';

import { updateUsers, updateInputChange, postUser } from '../../../data/player/actions';
import { randomElement } from '../../../helpers/utils';
import type { PlayerSelectPropsContainer } from './props';
import type { RootState } from '../../../data/types';
import UserListComponent from './component';
import SideButton from './Components/sideButtons';
import usersRandom from '../../../data/player/users';

class PlayerSelect extends React.Component<PlayerSelectPropsContainer> {
  componentDidMount() {
    const { users, fetchUpdateUsers } = this.props;

    users.push(randomElement(usersRandom), randomElement(usersRandom));
    fetchUpdateUsers(users);
  }

  onClickAddUserHandler() {
    const { users, fetchUpdateUsers } = this.props;
    const userUnique = true;
    while (userUnique) {
      const randomNumber = Math.floor(Math.random() * usersRandom.length) + 1;

      if (
        !users.find(element => element.id === randomNumber) &&
        users.length < this.props.MAX_USERS
      ) {
        const newUser = usersRandom.find(element => element.id === randomNumber);
        users.push(newUser);
        fetchUpdateUsers(users);
        return;
      }
    }
  }

  onClickRemoveUserHandler() {
    const { users } = this.props;
    if (users.length > this.props.MIN_USERS) {
      users.pop();
      this.props.fetchUpdateUsers(users);
    }
  }

  onClickEditUser(event) {
    const id = Number(event.target.id);
    const user = this.props.users.find(element => element.id === id && element !== undefined);
    const foundIndex = this.props.users.findIndex(x => x.id === id);

    if (user) {
      if (user.inputChange) {
        user.inputChange = false;
      } else {
        user.inputChange = true;
      }
      this.props.users[foundIndex] = user;
    }
    this.props.fetchUpdateUsers(this.props.users);
  }
  handleSubmit(event) {
    event.preventDefault();

    const nome = event.target[0].value;
    const descricao = event.target[1].value;

    const user = this.props.users.find(elemente => elemente.id === Number(event.target.id));
    const foundIndex = this.props.users.findIndex(x => x.id === Number(event.target.id));

    if (user) {
      user.name = nome;
      user.description = descricao;
      user.inputChange = false;
      this.props.users[foundIndex] = user;
    }
    this.props.fetchUpdateUsers(this.props.users);
  }
  render() {
    return (
      <div>
        <h1 className="main-title">Quem vai jogar?</h1>
        <div className="players-container">
          <SideButton
            users={this.props.users}
            onClickAddUserHandler={() => {
              this.onClickAddUserHandler();
            }}
            onClickRemoveUserHandler={() => {
              this.onClickRemoveUserHandler();
            }}
          />

          <UserListComponent
            onClickEditUser={(event) => {
              this.onClickEditUser(event);
            }}
            collection={this.props.users}
            handleSubmit={(event) => {
              this.handleSubmit(event);
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): Object => ({
  users: state.user.listOfUsers,
  usersRandom,
  MAX_USERS: 5,
  MIN_USERS: 2,
});

const mapDispatchToProps = (dispatch: Function): Object => ({
  fetchUpdateUsers: user => dispatch(updateUsers(user)),
  fetchInputChange: inputChange => dispatch(updateInputChange(inputChange)),
  fetchOnChange: values => dispatch(postUser(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSelect);
