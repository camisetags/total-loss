import React from 'react';
import renderer from 'react-test-renderer';
import { Switch, Route } from 'react-router-dom';
import DeckPage from '../../../../src/app/pages/deck/DeckSelect/component';

describe('DeckList page', () => {
  const deckList = [
    {
      content: {
        name: 'Testing card',
        description: 'Some testing card',
      },
      children: <div> Testing node </div>,
    },
    {
      content: {
        name: 'Testing card',
        description: 'Some testing card',
      },
      children: <div> Testing node </div>,
    },
  ];
  const App = () => (
    <Switch history={history}>
      <Route path="/" component={() => <DeckPage decks={deckList} selectDeck={() => {}} />} />
    </Switch>
  );

  it('renders DeckList page component', () => {
    const rendered = renderer.create();
    expect(rendered.toJSON()).toMatchSnapshot(<App />);
  });
});
