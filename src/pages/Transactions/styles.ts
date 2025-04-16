import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  & td {
    background: ${({ theme }) => theme["gray-600"]};
    padding: 1.25rem 2rem;
    margin: 10rem;
    text-align: left;
    &:first-child {
      width: 50%;
      text-align: left;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:nth-child(2) {
      width: 20%;
    }
    &:nth-child(3) {
      width: 20%;
    }
    &:last-child {
      width: 10%;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

interface PriceHighlightProps {
  variant: "income" | "outcome"; 
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ theme, variant }) =>
    variant === "income" ? theme["green-300"] : theme["red-300"]};
`;  
