import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.findAllByLabelText(/First Name/i);
  expect(linkElement).toBeTruthy();
});