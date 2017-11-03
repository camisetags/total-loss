import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../../src/app/components/Card';

describe('Card component', () => {
  const cardData = {
    content: {
      name: 'Testing card',
      description: 'Some testing card',
    },
    children: <div> Testing node </div>,
  };

  it('renders correctly', () => {
    const rendered = renderer.create(<Card {...cardData} />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
