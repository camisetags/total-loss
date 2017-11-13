/* eslint react/prop-types:0 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import renderer from 'react-test-renderer';
import requireDecks from '../../../src/app/data/filters/requireDecks';

describe('requireDecks middleware', () => {
  const simpleCompoenent = props => (
    <div>
      Simple Compoenent
      {props.selected.name}
    </div>
  );

  it('should return RedirectComponent', () => {
    const deckState = {
      selected: {
        name: '',
        description: '',
        cards: [],
      },

      list: [
        {
          name: '',
          description: '',
        },
      ],
    };
    const filter = requireDecks(simpleCompoenent)(deckState);

    expect(JSON.stringify(filter)).toEqual(JSON.stringify(<Redirect to="deck-select" />));
  });

  it('should return NextComponent', () => {
    const deckState = {
      selected: {
        name: '',
        description: '',
        cards: [],
      },

      list: [
        {
          name: '',
          description: '',
        },
        {
          name: '',
          description: '',
        },
      ],
    };

    const filter = requireDecks(simpleCompoenent)(deckState);
    const rendered = renderer.create(filter);

    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
