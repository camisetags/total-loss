import userReducer from '../src/reducers/userReducer';
import deckReducer from '../src/reducers/deckReducer';
import gameReducer from '../src/reducers/gameReducer';
import * as Types from '../src/actions/constants'; 

describe('Reducers', () => {
  const user = {
    name: 'Test',
    target: false,
    score: 0
  };
  
  const deck = {
    title: 'Test',
    description: 'Test test',
    cards: [
      {
        challenge: 'Vire o dedo indicador até encostar nas costas da sua mão.',
        accept: +2,
        pass: -2,
        drink: +1,
        challengeResult: `Aceitar +2 pontos. Passar -2 pontos. Beber 1 shot +1 ponto`
      },
      {
        challenge: 'Test test test test.',
        accept: +2,
        pass: -2,
        drink: +1,
        challengeResult: `Aceitar +2 pontos. Passar -2 pontos. Beber 1 shot +1 ponto`
      }
    ]
  };

  describe('User', () => {
    it('should return the initial state', () => {
      const initial = userReducer(undefined, { type: '' });
      expect(initial).toEqual([]);
    });

    it('should add user to the list', () => {
      const action = {
        type: Types.ADD_USER,
        user
      };

      expect(userReducer(undefined, action)).toEqual([user]);
    });
  });

  describe('Deck', () => {

    it('should return the initial state', () => {
      const initial = deckReducer(undefined, { type: '' });
      expect(initial).toEqual([]);
    });

    it('should add decks to the list', () => {
      const action = {
        type: Types.LOAD_DECKS,
        decks: [deck]
      };

      expect(deckReducer(undefined, action)).toEqual([deck]);
    });
  });

  describe('Game', () => {
    it('should return the initial state', () => {
      const initial = gameReducer(undefined, { type: '' });
      expect(initial).toEqual({});
    });

    it('should create a new game object', () => {
      delete deck.description;
      const game = {
        deck,
        users: [{ ...user, target: true }, { ...user, name: 'Test 2' }],
        cardIndex: 0,
        userIndex: 0
      };

      const action = {
        type: Types.START_GAME,
        users: game.users,
        deck
      };

      expect(gameReducer(undefined, action)).toEqual(game);
    });

    it('should add point to user inside game object', () => {
      const game = {
        deck,
        users: [{ ...user, target: true }, { ...user, name: 'Test 2' }],
        cardIndex: 0,
        userIndex: 0
      };

      const action = {
        type: Types.ADD_POINT,
        amountToAdd: 2
      };

      const expectedGame = {
        ...game,
        users: [{ ...user, target: false, score: 2 }, { ...user, name: 'Test 2', target: true }],
        cardIndex: 1,
        userIndex: 1
      };

      expect(gameReducer(game, action)).toEqual(expectedGame);
    });
  });
});
