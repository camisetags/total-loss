// @flow
import type { DeckState } from './deck/state';
import type { UserState } from './player/state';

export type RootState = {
  deck: DeckState,
  user: UserState,
};

export type Action = {
  type: string,
  data: Object,
};

export type Dispatch = (action: Action) => Promise<Action>;
