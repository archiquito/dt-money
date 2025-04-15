import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const ModalOverlay = styled(Dialog.Overlay)`
  background-color: ${({ theme }) => theme["black-900"]};
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ModalContent = styled(Dialog.Content)`
  background-color: ${({ theme }) => theme["gray-800"]};
  border-radius: 6px;
  box-shadow: 2px 2px 10px ${({ theme }) => theme["gray-900"]};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 500px;
  max-height: 85vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ModalTitle = styled(Dialog.Title)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.white};
  margin-bottom: 1rem;
`;

export const IconButtonClose = styled.button`
  all: unset;
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme["gray-400"]};
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${({ theme }) => theme["gray-700"]};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme["gray-600"]};
  }
  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme["green-300"]};
  }
  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
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
  }
`;

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  border-radius: 6px;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: color 0.2s;
  font-weight: bold;
`;

export const BtnTransactionRegister = styled(BaseButton)`
  background: ${({ theme }) => theme["green-500"]};
  color: ${({ theme }) => theme.white};
  &:hover {
    background: ${({ theme }) => theme["green-500"]};
    color: ${({ theme }) => theme.white};
    border-color: ${({ theme }) => theme["green-500"]};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: ${({ theme }) => theme["green-700"]};
  }
`;

export const ContainerBtnInOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const BtnInOut = styled(BaseButton)`
  background: ${({ theme }) => theme["gray-700"]};
  color: ${({ theme }) => theme["gray-300"]};
  width: 50%;
  font-weight: normal !important;
  font-size: 1rem !important;
  &.entries {
    background: ${({ theme }) => theme["gray-600"]};
    & svg {
      color: ${({ theme }) => theme["green-300"]};
    }
  }
  &.exits {
    background: ${({ theme }) => theme["gray-600"]};
    & svg {
      color: ${({ theme }) => theme["red-300"]};
    }
  }
  &:hover {
    background: ${({ theme }) => theme["gray-600"]};
    color: ${({ theme }) => theme.white};
    border-color: ${({ theme }) => theme["gray-600"]};
  }
`;
