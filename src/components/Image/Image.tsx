import React from 'react';
import styled from 'styled-components';
import { ImageProps } from './Image.types';

const StyledImage = styled.img<{
  width?: string;
  height?: string;
  rounded?: boolean;
  disabled?: boolean;
}>`
  width: ${({ width }) => width || '200px'};
  height: ${({ height }) => height || 'auto'};
  border-radius: ${({ rounded }) => (rounded ? '50%' : '8px')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: 0.3s ease;
  &:hover {
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.03)')};
  }
`;

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  rounded,
  disabled,
}) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      rounded={rounded}
      disabled={disabled}
    />
  );
};
