import { render, screen } from "@testing-library/react";
import { HeroImage } from "./HeroImage";

test("renders hero image with title", () => {
  render(<HeroImage src="hero.jpg" title="Hero Title" />);
  expect(screen.getByText("Hero Title")).toBeVisible();
});
