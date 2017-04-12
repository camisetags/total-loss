import * as Types from  '../src/actions/constants';

describe('Constants', () => {
  it('should return valid constants values', () => {
    expect(Types.ADD_POINT).toEqual('ADD_POINT');
    expect(Types.ADD_USER).toEqual('ADD_USER');
    expect(Types.CLEAR_ALL).toEqual('CLEAR_ALL');
    expect(Types.START_GAME).toEqual('START_GAME');
    expect(Types.LOAD_DECKS).toEqual('LOAD_DECKS');
  });
});
