// @flow
import type { UserState } from '../../../data/player/state';

export type UsersListProps = {
  collection: UserState,
};
export type PlayerSelectPropsContainer = {
  fetchUsers: Function,
  fetchAddUser: Function,
  users: UserState,
  usersRandom: UserState,
};
