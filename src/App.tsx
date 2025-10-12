import React, { useState } from "react";
import { Button } from "./components/Button";
import { Label } from "./components/Label";
import { Dropdown } from "./components/Dropdown";
import { RadioButton } from "./components/RadioButton";
import { Image } from "./components/Image";
import { HeroImage } from "./components/HeroImage";

const App: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("Male");

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Component Library Demo</h1>

      {/* 🔹 Button Component */}
      <div style={{ marginBottom: "2rem" }}>
        <Label text="Button Example:" />
        <Button label="Click Me" onClick={() => alert("Button clicked!")} />
      </div>

      {/* 🔹 Dropdown Component */}
      <div style={{ marginBottom: "2rem" }}>
        <Label text="Dropdown Example:" />
        <Dropdown
          options={["Option 1", "Option 2", "Option 3"]}
          onChange={(value) => setSelectedOption(value)}
        />
        {selectedOption && <p>Selected: {selectedOption}</p>}
      </div>

      {/* 🔹 Radio Button Component */}
      <div style={{ marginBottom: "2rem" }}>
        <Label text="Radio Button Example:" />
        <RadioButton
          name="gender"
          options={["Male", "Female", "Other"]}
          selectedValue={selectedRadio}
          onChange={(value) => setSelectedRadio(value)}
        />
        <p>Selected: {selectedRadio}</p>
      </div>

      {/* 🔹 Image Component */}
      <div style={{ marginBottom: "2rem" }}>
        <Label text="Image Example:" />
        <Image
          src="https://placekitten.com/300/200"
          alt="Example"
          width="300px"
          height="200px"
        />
      </div>

      {/* 🔹 Hero Image Component */}
      <div style={{ marginBottom: "2rem" }}>
        <Label text="Hero Image Example:" />
        <HeroImage
          src="https://placekitten.com/1200/400"
          title="Welcome to the Component Library"
          subtitle="Reusable UI components built with React and TypeScript"
        />
      </div>
    </div>
  );
};

export default App;
