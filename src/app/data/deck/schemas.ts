import { schema } from 'normalizr';

export const cardSchema = new schema.Entity('cards');
export const deckSchema = new schema.Entity('decks', {
  cards: [cardSchema],
});
