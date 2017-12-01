// @flow

export type User = {
  id: number,
  name: string,
  score: number,
  description: string,
  inputChange: boolean,
};

export type UserState = {
  listOfUsers: Array<User>,
};
