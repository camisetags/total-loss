import React from 'react';
import { render } from 'enzyme';
import { StartScreen } from '../src/components/startScreen/start';


describe('Components', () => {
  describe('StartScreen', () => {
    function setup() {
      const props = {};
      const enzymeWrapper = render(<StartScreen />);
      return {
        props,
        enzymeWrapper
      }
    }

    it('should render StartScreen component', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('.col.s12.l12').length).toBe(1);
      expect(enzymeWrapper.find('h4').text()).toBe('Bem vindo ao [nome do jogo]');
      expect(enzymeWrapper.find('.btn.waves-effect').text()).toBe('Começar o jogo!');
    });
  });

  describe('Deck', () => {
    it('should render Deck component');
  });

  describe('Game', () => {
    it('should render Game component');
  });

  describe('User', () => {
    it('should render Users component');
  });
});