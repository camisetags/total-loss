import userReducer from '../src/reducers/userReducer';
import * as Types from '../src/actions/constants'; 

describe('Reducers', () => {
  describe('User', () => {
    it('should return the initial state', () => {
      const initial = userReducer(undefined, { type: '' });
      expect(initial).toEqual([]);
    });

    it('should add user to the list', () => {
      const user = {
        name: 'Test',
        target: false,
        score: 0
      };
      
      const action = {
        type: Types.ADD_USER,
        user
      };

      expect(userReducer(undefined, action)).toEqual([user]);
    });
  });
});