import sift, { SiftQuery, ExternalQuery } from 'sift';
import { Deck } from './types';
import store from '../store';

export const getSelectedDeck = (deckList: Deck[]): Deck[] =>
  deckList.filter((deck: Deck) => deck.selected === true);

export default getSelectedDeck;
