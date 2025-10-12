import React from "react";
import { render, screen } from "@testing-library/react";
import { HeroImage } from "./HeroImage";

describe("HeroImage", () => {
  test("renders title and subtitle", () => {
    render(
      <HeroImage
        imageUrl="https://placekitten.com/800/400"
        title="Test Title"
        subtitle="Test Subtitle"
      />
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });
});
