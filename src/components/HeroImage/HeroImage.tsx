import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

export const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  title,
  subtitle,
}) => {
  return (
    <Container imageUrl={imageUrl}>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
  );
};

const Container = styled.div<{ imageUrl: string }>`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 20px;
  border-radius: 12px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
`;

export default HeroImage;
