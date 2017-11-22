import { Actions as DeckActions } from './deck/actionTypes';
import { DeckState } from './deck/types';

export interface Api {
  getList(): Promise<any>;
  getById(id: number): Promise<any>;
}

export type RootAction = DeckActions[keyof DeckActions];

export type RootState = {
  deck: DeckState;
};
