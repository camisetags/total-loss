// @flow

export type Deck = {
  name: string,
  description: string,
  cards: Array<Object>,
};

export type DeckState = {
  selected: Deck,

  list: [
    {
      name: string,
      description: string,
    },
  ],
};
