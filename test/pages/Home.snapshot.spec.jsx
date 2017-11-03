import React from 'react';
import renderer from 'react-test-renderer';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../../src/app/pages/Home';

describe('Home Page', () => {
  const App = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={() => <HomePage />} />
      </Switch>
    </BrowserRouter>
  );

  it('should render Home page', () => {
    const rendered = renderer.create(<App />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
