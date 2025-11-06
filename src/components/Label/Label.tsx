import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ color?: string; disabled?: boolean }>`
  color: ${({ color }) => color || 'black'};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

export const Label: React.FC<LabelProps> = ({
  text,
  color,
  disabled = false,
}) => {
  return (
    <StyledLabel color={color} disabled={disabled}>
      {text}
    </StyledLabel>
  );
};
