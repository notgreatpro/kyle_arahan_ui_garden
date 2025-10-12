import { render, screen } from "@testing-library/react";
import { Image } from "./Image";

test("renders an image with correct alt text", () => {
  render(<Image src="test.jpg" alt="Test Image" />);
  expect(screen.getByAltText("Test Image")).toBeVisible();
});
