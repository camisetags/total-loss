/* eslint react/prop-types:0 */
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import * as renderer from 'react-test-renderer';
import requireDecks, { FilterProps } from '../../src/app/hoc/requireDecks';
import { DeckState } from '../../src/app/data/deck/types';
import { RootState } from '../../src/app/data/types';

describe('requireDecks HOC', () => {
  const simpleCompoenent = props => (
    <div>
      Simple Compoenent
      {props.decks[0].name}
    </div>
  );

  it('should return RedirectComponent', () => {
    const decksFilterProps: FilterProps = {
      decks: [
        {
          id: 0,
          selected: false,
          name: 'Test Component',
          description: '',
          cards: [],
        },
      ],
    };

    // tslint:disable-next-line
    const filter = requireDecks(simpleCompoenent as any)(decksFilterProps);

    expect(JSON.stringify(filter)).toEqual(JSON.stringify(<Redirect to="deck-select" />));
  });

  it('should return NextComponent', () => {
    const deckState: FilterProps = {
      decks: [
        {
          id: 0,
          selected: false,
          name: '',
          description: '',
          cards: [],
        },
        {
          id: 1,
          selected: true,
          name: '',
          description: '',
          cards: [],
        },
      ],
    };

    // tslint:disable-next-line
    const filter = requireDecks(simpleCompoenent as React.ReactType)(deckState);
    const rendered = renderer.create(filter);

    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
