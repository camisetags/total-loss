jest.mock('../../../src/app/data/deck/api');

import { createStore } from 'redux';
import DeckApi from '../../../src/app/data/deck/api';
import * as actionTypes from '../../../src/app/data/deck/actionTypes';
import * as actions from '../../../src/app/data/deck/actions';
import { Api } from '../../../src/app/data/types';
import { Deck, Card } from '../../../src/app/data/deck/types';

import { eventually, expectTypes } from '../../__utils__/utils';

const api: jest.Mocked<Api> = DeckApi as any;

describe('Deck actions', () => {
  const store = () => {
    const reducer = jest.fn();
    const { dispatch } = createStore(reducer);
    reducer.mockReset();
    return { dispatch, reducer };
  };

  const deckObject: Deck = {
    id: 4,
    selected: false,
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

  describe('Deck select action', () => {
    beforeEach(() => {
      deckObject.selected = true;
      deckObject.cards = [
        {
          title: 'Titulo',
          description: 'Descricao',
          acceptChallenge: 2,
          refuseChallenge: -2,
        },
        {
          title: 'Titulo 2',
          description: 'Descricao 2',
          acceptChallenge: 2,
          refuseChallenge: -2,
        },
      ];
      const deckSelectResponse = { data: deckObject };
      api.getById.mockReturnValue(Promise.resolve(deckSelectResponse));
    });

    it('sends an API request', () => {
      actions.selectDeck(4)(jest.fn());
      expect(api.getById.mock.calls.length).toEqual(1);
    });

    it('dispatches SELECT_DECK action', () => {
      const { dispatch, reducer } = store();
      actions.selectDeck(4)(dispatch);

      return eventually(expectTypes(reducer, [actionTypes.SELECT_DECK]));
    });
  });
});
