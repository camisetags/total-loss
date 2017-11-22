jest.mock('../../../src/app/data/deck/api');

import { createStore } from 'redux';
import DeckApi from '../../../src/app/data/deck/api';
import * as actionTypes from '../../../src/app/data/deck/actionTypes';
import * as actions from '../../../src/app/data/deck/actions';
import { Api } from '../../../src/app/data/types';
import { Deck } from '../../../src/app/data/deck/types';

const api: jest.Mocked<Api> = DeckApi as any;

describe('Deck actions', () => {
  const store = () => {
    const reducer = jest.fn();
    const { dispatch } = createStore(reducer);
    reducer.mockReset();
    return { dispatch, reducer };
  };

  const eventually = assertFn =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          assertFn();
        } catch (e) {
          return reject(e);
        }
        resolve();
      }, 10);
    });

  const expectTypes = (reducer, types) => () =>
    expect(reducer.mock.calls.map(x => x[1].type)).toEqual(types);

  const deckObject: any = {
    id: 4,
    name: 'O ditador!',
    description: 'Faça essas prendas fingindo ser um ditador.',
  };

  describe('Deck list action', () => {
    beforeEach(() => {
      const deckListResponse = { data: { results: [deckObject] } };
      api.getList.mockReturnValue(Promise.resolve(deckListResponse));
    });

    it('sends an API request', () => {
      actions.getDeckList()(jest.fn());
      expect(api.getList.mock.calls.length).toEqual(1);
    });

    it('dispatches LIST_DECKS action', () => {
      const { dispatch, reducer } = store();
      actions.getDeckList()(dispatch);

      return eventually(expectTypes(reducer, [actionTypes.LIST_DECKS]));
    });
  });
});
