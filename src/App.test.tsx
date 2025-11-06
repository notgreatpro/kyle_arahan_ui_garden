import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Assignment12 React Component/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders HeroImage title', () => {
  render(<App />);
  const heroTitle = screen.getByText(/Welcome to the Component Library/i);
  expect(heroTitle).toBeInTheDocument();
});
