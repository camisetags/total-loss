// @flow
import React from 'react';
import { connect } from 'react-redux';

import { addUser, listUsersRandom } from '../../../data/player/actions';
import type { PlayerSelectPropsContainer } from './props';
import type { User } from '../../../data/player/state';
import type { RootState } from '../../../data/types';
import UserListComponent from './component';

class PlayerSelect extends React.Component<PlayerSelectPropsContainer> {
  componentDidMount() {
    this.props.fetchUsers();
    console.log(this.props.usersRandom);
  }

  onClickHandler() {
    console.log(this.props.usersRandom);
    const randoms = this.props.usersRandom.listOfUsers;
    const randomNumber = Math.floor(Math.round(randoms.length) + 1);
    const newUser = randoms.find(element => element.id === randomNumber);
    addUser(newUser);
  }

  addUser(user: User) {
    this.props.fetchAddUser(user);
  }

  render() {
    return (
      <div>
        <h1 className="main-title">Quem vai jogar?</h1>
        <div className="players-container">
          <div className="side-buttons">
            <button
              onClick={() => this.onClickHandler()}
              className="button mid side-button button-margin"
            >
              <i className="arrow-icon up" />
            </button>
            <button className="button mid side-button button-margin">
              <i className="arrow-icon down" />
            </button>
          </div>
          <UserListComponent collection={this.props.users} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): Object => ({
  users: state.user.listOfUsers,
  usersRandom: state.user.listUserRandom,
});

const mapDispatchToProps = (dispatch: Function): Object => ({
  fetchUsers: () => dispatch(listUsersRandom),
  fetchAddUser: user => dispatch(addUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSelect);
