import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

test("renders text", () => {
  render(<Text content="Hello" />);
  expect(screen.getByText("Hello")).toBeVisible();
});

test("text is greyed out when disabled", () => {
  render(<Text content="Disabled" disabled />);
  expect(screen.getByText("Disabled")).toHaveStyle("opacity: 0.5");
});
