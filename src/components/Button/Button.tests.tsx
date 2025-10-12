import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component", () => {
  test("renders the button", () => {
    render(<Button label="Test Button" />);
    const button = screen.getByText("Test Button");
    expect(button).toBeVisible();
  });

  test("changes color when disabled", () => {
    render(<Button label="Disabled" disabled backgroundColor="#007bff" />);
    const button = screen.getByText("Disabled");
    expect(button).toHaveStyle("background-color: #ccc");
  });
});
