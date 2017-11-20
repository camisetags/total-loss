import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import App from '../src/app/app';

describe('App wrapper', () => {
  it('should render app wrapper component', () => {
    const rendered = renderer.create(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('should redirect to deck-select', () => {
    const rendered = renderer.create(
      <MemoryRouter initialEntries={['/deck-select']}>
        <App />
      </MemoryRouter>,
    );

    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
