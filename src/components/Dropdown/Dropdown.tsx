import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: ${({ disabled }) => (disabled ? '#eee' : 'white')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = 'Select...',
  disabled = false,
  onChange,
}) => (
  <StyledSelect
    disabled={disabled}
    onChange={(e) => onChange && onChange(e.target.value)}
  >
    <option value="">{placeholder}</option>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </StyledSelect>
);
