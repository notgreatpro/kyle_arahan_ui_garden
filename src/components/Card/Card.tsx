import React from "react";
import styled from "styled-components";

interface CardProps {
  title: string;
  content: string;
  image?: string;
}

const StyledCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 16px;
  width: 250px;
  text-align: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Card: React.FC<CardProps> = ({ title, content, image }) => (
  <StyledCard>
    {image && <img src={image} alt={title} style={{ width: "100%", borderRadius: "8px" }} />}
    <h3>{title}</h3>
    <p>{content}</p>
  </StyledCard>
);
