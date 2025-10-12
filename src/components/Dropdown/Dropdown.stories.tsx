import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    options: ["Javascript", "HTML", "Python"],
  },
};

export const Disabled: Story = {
  args: {
    options: ["Option 1", "Option 2"],
    disabled: true,
  },
};
