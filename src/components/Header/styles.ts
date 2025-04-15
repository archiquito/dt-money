import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme["gray-900"]};
  padding: 2rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonTransaction = styled.button`
  background: ${({ theme }) => theme["green-500"]};
  border: 0;
  border-radius: 6px;
  color: ${({ theme }) => theme.white};
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  &hover {
    background: ${({ theme }) => theme["green-700"]};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: ${({ theme }) => theme["green-700"]};
  }
`;
