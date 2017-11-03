import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import * as DeckActions from '../../../src/app/data/deck/actions';
import * as DeckTypes from '../../../src/app/data/deck/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Deck actions', () => {
  const deckInitialState = {
    selected: {
      name: '',
      description: '',
      cards: [],
    },
    list: [
      {
        name: '',
        description: '',
      },
    ],
  };

  const deckObject = {
    id: 4,
    name: 'O ditador!',
    description: 'Faça essas prendas fingindo ser um ditador.',
  };

  let store;

  beforeEach(() => {
    moxios.install();
    store = mockStore({ deck: deckInitialState });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('DeckList action', () => {
    it('should return a function', () => {
      expect(DeckActions.getDeckList()).toBeInstanceOf(Function);
    });

    it('should dispatch DeckList action', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            results: [deckObject],
          },
        });
      });

      const expectedActions = [{ type: DeckTypes.LIST_DECKS, data: [deckObject] }];

      return store.dispatch(DeckActions.getDeckList()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('SelectDeck action', () => {
    it('should return a function', () => {
      expect(DeckActions.selectDeck()).toBeInstanceOf(Function);
    });

    it('should dispatch SelectDeck action', () => {
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

      return store.dispatch(DeckActions.selectDeck()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
