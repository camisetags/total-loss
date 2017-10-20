import React from 'react';
import renderer from 'react-test-renderer';
import Card from 'components/Card';

describe('Card component', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(<Card />);

    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
