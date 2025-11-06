import React, { useState } from 'react';

// Make sure all components are **named exports**
import { Button } from './components/Button';
import { Label } from './components/Label';
import { Dropdown } from './components/Dropdown';
import { RadioButton } from './components/RadioButton';
import { Image } from './components/Image';
import { HeroImage } from './components/HeroImage';

const App: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedRadio, setSelectedRadio] = useState('Male');

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Assignment12 React Component</h1>

      <div style={{ marginBottom: '2rem' }}>
        <Label text="Button Example:" />
        <Button label="Click Me" onClick={() => alert('Button clicked!')} />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <Label text="Dropdown Example:" />
        <Dropdown
          options={['Option 1', 'Option 2', 'Option 3']}
          onChange={setSelectedOption}
        />
        {selectedOption && <p>Selected: {selectedOption}</p>}
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <Label text="Radio Button Example:" />
        <RadioButton
          name="gender"
          options={['Male', 'Female', 'Other']}
          selectedValue={selectedRadio}
          onChange={setSelectedRadio}
        />
        <p>Selected: {selectedRadio}</p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <Label text="Image Example:" />
        <Image src="toronto.jpg" alt="Example" width="300px" height="200px" />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <Label text="Hero Image Example:" />
        <HeroImage
          imageUrl="https://placekitten.com/1200/400"
          title="Welcome to the Component Library"
          subtitle="Reusable UI components built with React and TypeScript"
        />
      </div>
    </div>
  );
};

export default App;
