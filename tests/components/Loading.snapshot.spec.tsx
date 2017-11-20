import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Loading from '../../src/app/components/Loading';

describe('Loading', () => {
  it('renders Loading component', () => {
    const rendered = renderer.create(<Loading />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
