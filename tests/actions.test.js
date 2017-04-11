import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect';

import * as UserActions from '../src/actions/userActions';
import * as DeckActions from '../src/actions/deckActions';
import * as GameActions from '../src/actions/gameActions';
import * as Types from  '../src/actions/constants';
import randomNames from '../src/utils/randomNames';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const baseUrl = 'http://localhost:3000';

describe('Actions', () => {
  describe('User', () => {
    
    it('should create a ADD_USER action', () => {
      const user = {
        name: 'Test',
        target: false,
        score: 0
      };
      
      const expectedAction = {
        type: Types.ADD_USER,
        user
      }
      
      expect(UserActions.addUserToTheGame(user.name)).toEqual(expectedAction);
    });

    it('should create a ADD_USER action with random name', () => {
      const userRandomName = UserActions.addUserToTheGame('').user.name;
      expect(randomNames.includes(userRandomName)).toBeTruthy();
    });
  });
  
  // TODO: Implement async actions after the server is finished
  // describe('Deck', () => {
  //   beforeEach(() => {
  //     nock.cleanAll();
  //   });
    
  //   it('should create a LOAD_DECKS action when fetching is done', () => {
  //     const serviceResponse = { 
  //       body: { 
  //         decks: [{
  //           id: 2,
  //           title: 'Loucuras',
  //           description: 'Melhor jogar esse na casa do seu colega...',
  //           cards: [
  //             {
  //               challenge: 'Vire o dedo indicador até encostar nas costas da sua mão.',
  //               accept: +2,
  //               pass: -2,
  //               drink: +1,
  //               challengeResult: `Aceitar +2 pontos. Passar -2 pontos. Beber 1 shot +1 ponto`
  //             },
  //           ] 
  //         }] 
  //       }
  //     };
      
  //     nock(baseUrl)
  //       .get('/decks')
  //       .reply(200, serviceResponse);

  //     const store = mockStore({ decks: [] });

  //   });
  // });

  describe('Game', () => {
    it('should create a ADD_POINT action', () => {
      const amountToAdd = 2;
      
      const expectedAction = {
        type: Types.ADD_POINT,
        amountToAdd
      };

      expect(GameActions.addPoint(amountToAdd)).toEqual(expectedAction);
    });
  });
});
