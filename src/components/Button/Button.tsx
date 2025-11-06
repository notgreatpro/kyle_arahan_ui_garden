import React from 'react';
import styled from 'styled-components';
import { ButtonProps  from './Button.types';

const StyledButton = styled.button<{
  backgroundColor?: string;
  disabled?: boolean;
}>`
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#ccc' : backgroundColor || '#007bff'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  disabled = false,
  backgroundColor,
  onClick,
}) => (
  <StyledButton
    disabled={disabled}
    backgroundColor={backgroundColor}
    onClick={onClick}
  >
    {label}
  </StyledButton>
);
