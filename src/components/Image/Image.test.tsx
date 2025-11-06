import { render, screen } from '@testing-library/react';
import { Image } from './Image';

test('renders an image with correct alt text', () => {
  render(<Image src="reactjs.png" alt="React Logo" />);
  expect(screen.getByAltText('React Logo')).toBeVisible();
});
