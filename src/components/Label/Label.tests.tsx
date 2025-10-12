import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

test("renders label text", () => {
  render(<Label text="My Label" />);
  expect(screen.getByText("My Label")).toBeVisible();
});

test("renders disabled label with grey color", () => {
  render(<Label text="Disabled" disabled />);
  expect(screen.getByText("Disabled")).toHaveStyle("color: #aaa");
});
