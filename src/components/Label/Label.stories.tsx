import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  argTypes: {
    color: { control: "color" },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = { args: { text: "Username" } };
export const Disabled: Story = { args: { text: "Disabled Label", disabled: true } };
