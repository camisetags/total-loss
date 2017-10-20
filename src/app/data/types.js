// @flow

export type Action = {
  type: string,
  data: Object,
};

export type Dispatch = (action: Action) => Promise<Action>;
