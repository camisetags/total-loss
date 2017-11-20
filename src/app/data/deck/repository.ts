import sift, { SiftQuery, ExternalQuery } from 'sift';
import { Deck } from './types';
import store from '../store';

export class DeckRepository {
  private deckList: Deck[];

  constructor() {
    this.deckList = Object.values(store.getState());
  }

  public getSelectedDeck(): Deck[] {
    // const query: SiftQuery<any[]> = ;
    return sift({ selected: true } as any, this.deckList);
  }
}

const repository: DeckRepository = new DeckRepository();

export default repository;
