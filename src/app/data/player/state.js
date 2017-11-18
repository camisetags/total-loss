// @flow

export type User = {
  id: number,
  name: string,
  description: string,
  score: number,
};

export type UserState = {
  listOfUsers: Array<User>,
  listUserRandom: Array<User>,
};
