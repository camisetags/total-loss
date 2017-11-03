import deckReducer from '../../../src/app/data/deck/reducer';
import * as DeckTypes from '../../../src/app/data/deck/actionTypes';

describe('Deck reducer', () => {
  const stateSet = {
    list: [
      { id: 4, name: 'Test deck', description: 'testing some test deck' },
      { id: 3, name: 'Other test deck', description: 'Some other test deck' },
    ],
    selected: {
      cards: [],
      description: '',
      name: '',
    },
  };

  it('should return the initial state', () => {
    const state = deckReducer(undefined, {});
    expect(state).toEqual({
      list: [
        {
          description: '',
          name: '',
        },
      ],
      selected: {
        cards: [],
        description: '',
        name: '',
      },
    });
  });

  it('should handle DECK_LIST', () => {
    const state = deckReducer(undefined, {
      type: DeckTypes.LIST_DECKS,
      data: [
        { id: 4, name: 'Test deck', description: 'testing some test deck' },
        { id: 3, name: 'Other test deck', description: 'Some other test deck' },
      ],
    });

    expect(state).toEqual({
      selected: { name: '', description: '', cards: [] },
      list: [
        { id: 4, name: 'Test deck', description: 'testing some test deck' },
        { id: 3, name: 'Other test deck', description: 'Some other test deck' },
      ],
    });
  });

  it('should handle DECK_SELECT', () => {
    const deck = {
      name: 'Testing Deck',
      description: 'Hello test deck!',
      cards: [
        {
          title: 'Loucuras',
          description: 'Vire o dedo indicador até encostar nas costas da sua mão.',
          accept_challenge: 1,
          refuse_challenge: -1,
        },
        {
          title: 'Loucuras',
          description: 'Faça um rolamento.  Se não fizer, perde 2 pontos! Se não ganhe 2.',
          accept_challenge: 2,
          refuse_challenge: -2,
        },
      ],
    };

    const state = deckReducer(stateSet, {
      type: DeckTypes.SELECT_DECK,
      data: deck,
    });

    expect(state).toEqual({
      selected: deck,
      list: [...stateSet.list],
    });
  });
});
