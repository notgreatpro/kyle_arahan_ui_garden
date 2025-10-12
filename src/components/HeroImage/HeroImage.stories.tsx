import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { HeroImage } from "./HeroImage";

const meta: Meta<typeof HeroImage> = {
  title: "Components/HeroImage",
  component: HeroImage,
  argTypes: {
    src: { control: "text" },
    title: { control: "text" },
    subtitle: { control: "text" },
    height: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: "https://placehold.co/1200x400",
    title: "Welcome to Great Island",
    subtitle: "Explore the beauty of the 51st State",
  },
};
