// @flow

export type DeckState = {
  selected?: {
    name: string,
    description: string,
    cards: Array<Object>,
  },

  list?: [
    {
      name: string,
      description: string,
    },
  ],
};
