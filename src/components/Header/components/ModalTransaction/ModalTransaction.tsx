import * as Dialog from "@radix-ui/react-dialog";
import { ButtonTransaction } from "../../styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import {
  BtnTransactionRegister,
  FormContainer,
  IconButtonClose,
  ModalContent,
  ModalOverlay,
  ModalTitle,
  BtnInOut,
  ContainerBtnInOut,
} from "./styles";

// interface ModalTransactionProps {
//   open: boolean;
//   asChild?: boolean;
//   onOpenChange?: (open: boolean) => void;
//   button: React.ReactNode;

// }

export function ModalTransaction() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonTransaction type="button">Nova transação</ButtonTransaction>
      </Dialog.Trigger>
      <Dialog.Portal>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>Nova transação</ModalTitle>
          <FormContainer>
            <input type="text" placeholder="Descrição" required />
            <input type="number" placeholder="Valor" required />
            <input type="text" placeholder="Categoria" required />
            <input type="date" placeholder="Data" required />
            <ContainerBtnInOut>
              <BtnInOut type="button" variant="income" value="income"><ArrowCircleUp size={32} /> Entrada</BtnInOut>
              <BtnInOut type="button" variant="outcome" value="outcome"><ArrowCircleDown size={32} />Saída</BtnInOut>
            </ContainerBtnInOut>
            <BtnTransactionRegister type="submit">
              Cadastrar
            </BtnTransactionRegister>
          </FormContainer>
          <Dialog.Close asChild>
            <IconButtonClose>
              <X size={20} aria-label="Close" />
            </IconButtonClose>
          </Dialog.Close>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
