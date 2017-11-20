import { Actions as DeckActions } from './deck/actionTypes';
import { DeckState } from './deck/types';

export type RootAction = DeckActions[keyof DeckActions];

export type RootState = {
  deck: DeckState;
};
