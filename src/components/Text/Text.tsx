import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{
  color?: string;
  size?: string;
  disabled?: boolean;
}>`
  color: ${({ color }) => color || '#333'};
  font-size: ${({ size }) => size || '16px'};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

export const Text: React.FC<TextProps> = ({
  content,
  color,
  size,
  disabled,
}) => {
  return (
    <StyledText color={color} size={size} disabled={disabled}>
      {content}
    </StyledText>
  );
};
