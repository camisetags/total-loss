import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as axios from 'axios';
import MockAdapter = require('axios-mock-adapter');
import * as DeckActions from '../../../src/app/data/deck/actions';
import * as DeckTypes from '../../../src/app/data/deck/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Deck actions', () => {
  const deckInitialState = {
    0: {
      id: 0,
      name: '',
      description: '',
      selected: true,
      cards: [],
    },
  };

  const deckObject: any = {
    id: 4,
    name: 'O ditador!',
    description: 'Faça essas prendas fingindo ser um ditador.',
    cards: [],
  };

  let store;

  beforeEach(() => {
    store = mockStore({ deck: deckInitialState });
  });

  afterEach(() => {});

  describe('DeckList action', () => {
    it('should return a function', () => {
      expect(DeckActions.getDeckList()).toBeInstanceOf(Function);
    });

    it('should dispatch DeckList action', () => {
      const mockAdapter = new MockAdapter(axios as any);

      mockAdapter.onGet(`${process.env.API_ENDPOINT}/api/deck/`).reply(200, {
        results: [deckObject],
      });

      const expectedActions = [{ type: DeckTypes.LIST_DECKS, data: { 4: deckObject } }];

      return store.dispatch(DeckActions.getDeckList()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('SelectDeck action', () => {
    it('should return a function', () => {
      expect(DeckActions.selectDeck(1)).toBeInstanceOf(Function);
    });

    it('should dispatch SelectDeck action', () => {
      const mockAdapter = new MockAdapter(axios as any);
      deckObject.cards = [
        {
          title: 'Loucuras',
          description: 'Vire o dedo indicador até encostar nas costas da sua mão.',
          accept_challenge: 1,
          refuse_challenge: -1,
        },
      ];
      delete deckObject.id;

      mockAdapter.onGet('/api/deck/1').reply(200, {
        ...deckObject,
      });

      const expectedActions = [{ type: DeckTypes.SELECT_DECK, data: deckObject }];

      return store.dispatch(DeckActions.selectDeck(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
