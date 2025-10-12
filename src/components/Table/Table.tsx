import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

const StyledTh = styled.th`
  background-color: #007bff;
  color: white;
  padding: 10px;
`;

const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;

const StyledFooter = styled.tfoot`
  background-color: #f2f2f2;
`;

export const Table: React.FC<TableProps> = ({ headers, rows, footer }) => {
  return (
    <StyledTable>
      <thead>
        <tr>{headers.map((header, i) => <StyledTh key={i}>{header}</StyledTh>)}</tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>{row.map((cell, j) => <StyledTd key={j}>{cell}</StyledTd>)}</tr>
        ))}
      </tbody>
      {footer && (
        <StyledFooter>
          <tr>{footer.map((cell, i) => <StyledTd key={i}>{cell}</StyledTd>)}</tr>
        </StyledFooter>
      )}
    </StyledTable>
  );
};
