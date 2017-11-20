import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { MemoryRouter, Link } from 'react-router-dom';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import DeckPageComponent from '../../../../src/app/pages/deck/DeckSelect/component';
import { Deck } from '../../../../src/app/data/deck/types';

describe('DeckSelect page', () => {
  const deckList = [
    {
      id: 1,
      name: 'Testing card id 1',
      description: 'Some testing card',
    },
    {
      id: 2,
      name: 'Testing card id 2',
      description: 'Some testing card',
    },
    {
      id: 3,
      name: 'Testing card id 3',
      description: 'Some testing card',
    },
  ];

  beforeEach(() => {
    Enzyme.configure({ adapter: new Adapter() });
  });

  it('renders DeckList page component', () => {
    const mockFunc = jest.fn();
    const rendered = renderer.create(
      <MemoryRouter>
        <DeckPageComponent decks={deckList as Deck[]} selectDeck={() => mockFunc()} />
      </MemoryRouter>,
    );

    expect(rendered).toMatchSnapshot();
  });

  it('should call selectDeck event', () => {
    const mockFunc = jest.fn();

    const pageWrapper = mount(
      <MemoryRouter>
        <DeckPageComponent decks={deckList as Deck[]} selectDeck={deckId => mockFunc(deckId)} />
      </MemoryRouter>,
    );

    pageWrapper
      .find(Link)
      .at(0)
      .simulate('click');

    expect(mockFunc.mock.calls.length).toBe(1);
  });
});
