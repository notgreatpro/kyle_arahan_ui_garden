import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    imageUrl: 'toronto.jpg',
    title: 'Welcome to the Component Library',
    subtitle: 'Reusable UI components built with React and Storybook',
  },
};
