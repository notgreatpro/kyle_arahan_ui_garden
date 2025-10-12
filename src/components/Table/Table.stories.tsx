import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
};
export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    headers: ["Name", "Age", "Country"],
    rows: [
      ["Kyle", "24", "Canada"],
      ["Sarah", "29", "USA"],
    ],
    footer: ["End", "", ""],
  },
};
