// @flow
import type { DeckState } from './deck/state';

export type RootState = {
  deck: DeckState,
};

export type Action = {
  type: string,
  data: Object,
};

export type Dispatch = (action: Action) => void;
