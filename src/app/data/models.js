import { ORM } from 'redux-orm';
import { Deck, Card } from './deck/models';

const orm = new ORM();
orm.register(Card, Deck);

const emptyDBState = orm.getEmptyState();

export default {
  orm,
  emptyDBState,
};
