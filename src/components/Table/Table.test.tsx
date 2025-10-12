import { render, screen } from "@testing-library/react";
import { Table } from "./Table";

test("renders table headers", () => {
  render(<Table headers={["Name", "Age"]} rows={[]} />);
  expect(screen.getByText("Name")).toBeVisible();
});
