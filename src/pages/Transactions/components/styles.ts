import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  & input {
    background: ${({ theme }) => theme["gray-900"]};
    border: 1px solid ${({ theme }) => theme["gray-900"]};
    border-radius: 6px;
    padding: 1rem;
    color: ${({ theme }) => theme.white};
    font-size: 1rem;
    width: 100%;
    &::placeholder {
      color: ${({ theme }) => theme["gray-500"]};
    }
    &:focus {
      box-shadow: none;
      outline: none;
    }
  } & button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    gap: 0.5rem;
    border: 1px solid ${({ theme }) => theme["green-300"]};
    border-radius: 6px;
    padding: 1rem 2rem;
    color: ${({ theme }) => theme["green-300"]};
    cursor: pointer;
    transition: color 0.2s;
    font-weight: bold;
    &:hover {
        background: ${({ theme }) => theme["green-500"]};
        color: ${({ theme }) => theme.white};
        border-color: ${({ theme }) => theme["green-500"]};
        }
  }
`;
