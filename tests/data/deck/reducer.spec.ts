import deckReducer from '../../../src/app/data/deck/reducer';
import * as DeckTypes from '../../../src/app/data/deck/actionTypes';
import { RootAction } from '../../../src/app/data/types';

describe('Deck reducer', () => {
  const stateSet: any = {
    4: { id: 4, name: 'Test deck', description: 'testing some test deck' },
    3: { id: 3, name: 'Other test deck', description: 'Some other test deck' },
  };

  it('should return the initial state', () => {
    const state = deckReducer(undefined, {} as RootAction);
    expect(state).toEqual({
      0: {
        id: 0,
        selected: false,
        name: '',
        description: '',
        cards: [],
      },
    });
  });

  it('should handle DECK_LIST', () => {
    const state = deckReducer(undefined, {
      type: DeckTypes.LIST_DECKS,
      data: {
        4: { id: 4, name: 'Test deck', description: 'testing some test deck', selected: false },
        3: { id: 3, name: 'Other test deck', description: 'Some other test deck', selected: false },
      },
    } as RootAction);

    expect(state).toEqual({
      4: { id: 4, name: 'Test deck', description: 'testing some test deck', selected: false },
      3: { id: 3, name: 'Other test deck', description: 'Some other test deck', selected: false },
    });
  });

  it('should handle DECK_SELECT', () => {
    const deck = {
      name: 'Testing Deck',
      description: 'Hello test deck!',
      cards: [
        {
          id: 1,
          title: 'Loucuras',
          description: 'Vire o dedo indicador até encostar nas costas da sua mão.',
          accept_challenge: 1,
          refuse_challenge: -1,
        },
        {
          id: 2,
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
      ...stateSet,
      ...deck,
    });
  });
});
