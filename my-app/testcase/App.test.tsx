// App.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';


describe('App component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders header text correctly', () => {
    const { getByText } = render(<App />);
    const headerText = getByText('Employee Information');
    expect(headerText).toBeTruthy();
  });

  test('renders AypPage component', () => {
    const { getByTestId } = render(<App />);
    const aypPageComponent = getByTestId('ayp-page');
    expect(aypPageComponent).toBeTruthy();
  });
});
