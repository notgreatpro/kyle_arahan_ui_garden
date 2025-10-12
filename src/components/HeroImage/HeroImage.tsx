import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const HeroWrapper = styled.div<{ src: string; height?: string }>`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  height: ${({ height }) => height || "400px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin: 8px 0 0;
`;

export const HeroImage: React.FC<HeroImageProps> = ({ src, title, subtitle, height }) => {
  return (
    <HeroWrapper src={src} height={height}>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </HeroWrapper>
  );
};
