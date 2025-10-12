import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const RadioOption = styled.label<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ disabled }) => (disabled ? "#999" : "black")};
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  options,
  selectedValue,
  disabled = false,
  onChange,
}) => (
  <RadioGroup>
    {options.map((option) => (
      <RadioOption key={option} disabled={disabled}>
        <input
          type="radio"
          name={name}
          value={option}
          checked={selectedValue === option}
          disabled={disabled}
          onChange={() => onChange && onChange(option)}
        />
        {option}
      </RadioOption>
    ))}
  </RadioGroup>
);
