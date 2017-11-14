import { switchCase } from '../../helpers/utils';
import * as types from './actionTypes';
import models from '../models';

const deckReducer = (state, action) => {
  const sess = models.orm.session(state);
  const { Deck } = sess;

  return switchCase(action.type)({
    [types.LIST_DECKS]: () => {
      action.data.forEach((deck) => {
        Deck.create(deck);
      });
      return sess.state.Deck;
    },

    [types.SELECT_DECK]: () => {
      Deck.withId(action.data.id).update(action.data);
      return sess.state.Deck;
    },
  })(() => sess.state.Deck);
};

export default deckReducer;
