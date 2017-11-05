import React from 'react';
import renderer from 'react-test-renderer';
import PlayerSelect from '../../../src/app/pages/player/PlayerSelect';

describe('PlayerSelect page', () => {
  it('should render the PlayerSelect page', () => {
    const rendered = renderer.create(<PlayerSelect />);

    expect(rendered.toJSON).toMatchSnapshot();
  });
});
