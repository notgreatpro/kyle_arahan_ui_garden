import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Image } from "./Image";

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    rounded: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: "https://placehold.co/300x200",
    alt: "Sample image",
  },
};
export const Rounded: Story = {
  args: {
    src: "https://placehold.co/200x200",
    alt: "Rounded image",
    rounded: true,
  },
};
