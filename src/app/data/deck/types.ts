export interface Card {
  title: string;
  description: string;
  acceptChallenge: number;
  refuseChallenge: number;
}

export interface Deck {
  id: number;
  selected: boolean;
  name: string;
  description: string;
  cards?: Card[];
}

export type DeckState = {
  [id: number]: Deck;
};
