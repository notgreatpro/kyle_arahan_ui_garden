import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';

describe('HeroImage component', () => {
  test('renders title and subtitle', () => {
    render(
      <HeroImage
        imageUrl="https://placekitten.com/1200/400"
        title="Welcome to the Component Library"
        subtitle="Reusable UI components built with React and TypeScript"
      />
    );

    // Check title
    expect(
      screen.getByText(/Welcome to the Component Library/i)
    ).toBeInTheDocument();

    // Check subtitle
    expect(
      screen.getByText(
        /Reusable UI components built with React and TypeScript/i
      )
    ).toBeInTheDocument();
  });
});
