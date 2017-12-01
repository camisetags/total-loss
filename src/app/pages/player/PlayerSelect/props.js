// @flow
import type { User } from '../../../data/player/state';

export type UsersListProps = {
  collection: Array<User>,
  handleSubmit: Function,
  onClickEditUser: Function,
};
export type PlayerSelectPropsContainer = {
  fetchUpdateUsers: Function,
  users: Array<User>,
  usersRandom: Array<User>,
  MAX_USERS: number,
  MIN_USERS: number,
  fetchInputChange: Function,
};

export type CardUserProps = {
  content: {
    id: number,
    name: string,
    score: number,
    description: string,
    inputChange: boolean,
  },
  onClickEditUser: Function,
  handleSubmit: Function,
};

export type SideButtonProps = {
  onClickAddUserHandler: Function,
  onClickRemoveUserHandler: Function,
  users: Array<User>,
};
