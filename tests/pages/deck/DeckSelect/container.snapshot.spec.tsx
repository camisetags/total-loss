import * as React from 'react';
import * as renderer from 'react-test-renderer';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter, Link } from 'react-router-dom';

import { DeckSelect as Container } from '../../../../src/app/pages/deck/DeckSelect/container';
import { Deck, DeckState } from '../../../../src/app/data/deck/types';

describe('DeckSelect Container', () => {
  const deckInitialState = {
    1: {
      id: 1,
      name: 'Test deck 1',
      description: 'Description deck one',
    },
    2: {
      id: 2,
      name: 'Test deck 2',
      description: 'Description deck on 2',
    },
    3: {
      id: 3,
      name: 'Test deck 3',
      description: 'Description deck 3',
    },
  };

  const mockFetchDecks = jest.fn();
  const mockFetchDeck = jest.fn();
  const componentDidMountSpy = jest.spyOn(Container.prototype, 'componentDidMount');

  beforeEach(() => {
    Enzyme.configure({ adapter: new Adapter() });
  });

  afterEach(() => {
    componentDidMountSpy.mockClear();
  });

  it('should render loading component', () => {
    const wrapper = Enzyme.mount(
      <Container
        decks={[deckInitialState[0] as Deck]}
        fetchDeck={() => mockFetchDeck()}
        fetchDecks={() => mockFetchDecks()}
      />,
    );

    const loading = wrapper.find('.loading');
    expect(loading.text()).toBe(' Carregando... ');
  });

  it('should render deckSelect page component inside container', () => {
    const rendered = renderer.create(
      <MemoryRouter>
        <Container
          decks={(Object as any).values(deckInitialState) as Deck[]}
          fetchDeck={() => mockFetchDeck()}
          fetchDecks={() => mockFetchDecks()}
        />
      </MemoryRouter>,
    );

    expect(rendered.toJSON).toMatchSnapshot();
  });

  it('should call fetch decks on componentDidMount', () => {
    const wrapper = Enzyme.mount(
      <Container
        decks={[deckInitialState[0]]}
        fetchDeck={() => mockFetchDeck()}
        fetchDecks={() => mockFetchDecks()}
      />,
    );

    wrapper.instance().componentDidMount();

    expect(componentDidMountSpy).toHaveBeenCalled();
    expect(mockFetchDecks.mock.calls.length).toBeGreaterThanOrEqual(1);
  });

  it('should call fetch single deck', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter>
        <Container
          decks={(Object as any).values(deckInitialState) as Deck[]}
          fetchDeck={() => mockFetchDeck()}
          fetchDecks={() => mockFetchDecks()}
        />
      </MemoryRouter>,
    );

    wrapper
      .find(Link)
      .at(0)
      .simulate('click');

    expect(mockFetchDeck.mock.calls.length).toEqual(1);
  });
});
