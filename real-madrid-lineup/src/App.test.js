import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Real Madrid Starting 11', () => {
  render(<App />);
  const linkElement = screen.getByText(/Real Madrid Starting 11/i);
  expect(linkElement).toBeInTheDocument();
});
