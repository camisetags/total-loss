export interface Deck {
  id: number;
  selected: boolean;
  name: string;
  description: string;
  cards: object[];
}

export type DeckState = {
  [id: number]: Deck;
};
