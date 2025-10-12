import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    name: "gender",
    options: ["Male", "Female", "Other"],
    selectedValue: "Male",
  },
};

export const Disabled: Story = {
  args: {
    name: "gender",
    options: ["Male", "Female", "Other"],
    disabled: true,
  },
};
