import { render, screen } from "@testing-library/react";
import { RadioButton } from "./RadioButton";

describe("RadioButton Component", () => {
  test("renders options", () => {
    render(<RadioButton name="test" options={["One", "Two"]} />);
    expect(screen.getByLabelText("One")).toBeVisible();
    expect(screen.getByLabelText("Two")).toBeVisible();
  });

  test("disables all options", () => {
    render(<RadioButton name="test" options={["One"]} disabled />);
    expect(screen.getByLabelText("One")).toBeDisabled();
  });
});
