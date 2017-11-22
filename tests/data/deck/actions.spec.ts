import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';

import requestHandler from '../../../src/app/data/requestHandler';
import * as DeckActions from '../../../src/app/data/deck/actions';
import * as DeckTypes from '../../../src/app/data/deck/actionTypes';
import { DeckState, Deck } from '../../../src/app/data/deck/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockAdapter = new MockAdapter(requestHandler);

describe('Deck actions', () => {
  const deckInitialState: DeckState = {
    0: {
      id: 0,
      name: '',
      description: '',
      selected: true,
      cards: [],
    },
  };

  const deckObject: Deck = {
    id: 4,
    selected: false,
    name: 'O ditador!',
    description: 'Faça essas prendas fingindo ser um ditador.',
    cards: [],
  };

  beforeEach(() => {
    // moxios.install();
  });

  afterEach(() => {
    // store.clearActions();
    // moxios.uninstall();
    // mockAdapter.restore();
  });

  describe('DeckList action', () => {
    it('should return a function', () => {
      expect(DeckActions.getDeckList()).toBeInstanceOf(Function);
    });

    it('should dispatch DeckList action', async () => {
      const store = mockStore({ deck: deckInitialState });

      mockAdapter.onGet('/api/deck/').reply(200, {
        results: [deckObject],
      });

      // moxios.wait(() => {
      //   const request = moxios.requests.mostRecent();
      //   request.respondWith({
      //     status: 200,
      //     response: {
      //       results: [deckObject],
      //     },
      //   });
      // });

      const expectedActions = [{ type: DeckTypes.LIST_DECKS, data: { 4: deckObject } }];
      await store.dispatch(DeckActions.getDeckList());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('SelectDeck action', () => {
    it('should return a function', () => {
      expect(DeckActions.selectDeck(1)).toBeInstanceOf(Function);
    });

    it('should dispatch SelectDeck action', () => {
      const store = mockStore({ deck: deckInitialState });
      deckObject.cards = [
        {
          title: 'Loucuras',
          description: 'Vire o dedo indicador até encostar nas costas da sua mão.',
          accept_challenge: 1,
          refuse_challenge: -1,
        },
      ];
      delete deckObject.id;
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: deckObject,
        });
      });
      const expectedActions = [{ type: DeckTypes.SELECT_DECK, data: deckObject }];
      store.dispatch(DeckActions.selectDeck(1));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
