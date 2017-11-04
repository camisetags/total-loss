import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../../src/app/pages/Home';

describe('Home Page', () => {
  it('should render Home page', () => {
    const rendered = renderer.create(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
