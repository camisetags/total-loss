import { Model, attr, many } from 'redux-orm';

export class Card extends Model {
  static modelName = 'Card';

  static fields = {
    id: attr(),
    name: attr(),
    description: attr(),
  };

  toString() {
    return `Card: ${this.name}`;
  }
}

export class Deck extends Model {
  static modelName = 'Deck';

  static fields = {
    id: attr(),
    name: attr(),
    description: attr(),
    cards: many('Card', 'deck'),
  };

  toString() {
    return `Deck: ${this.name}`;
  }
}
