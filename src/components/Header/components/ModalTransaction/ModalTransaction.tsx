import * as Dialog from "@radix-ui/react-dialog";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useContext } from "react";
import { transactionContext } from "../../../../context/contextTransaction";

const transactionFormSchema = z.object({
  description: z.string().min(1, "Informe uma descrição"),
  price: z.number().min(0, "Informe um valor"),
  category: z.string().min(1, "Informe uma categoria"),
  date: z.string().min(1, "Informe uma data"),
  type: z.enum(["income", "outcome"]),
});

type TransactionFormInputs = z.infer<typeof transactionFormSchema>;

export function ModalTransaction() {
  const { createTransaction } = useContext(transactionContext)

  const { register, handleSubmit, reset, control } =
    useForm<TransactionFormInputs>({
      resolver: zodResolver(transactionFormSchema),
      defaultValues: {
        description: "",
        price: 0,
        category: "",
        date: "",
        type: "income",
      }, 
    });

  const handleCreateNewTransaction = async (data: TransactionFormInputs) => {
    const { description, price, category, date, type } = data;
    const transactionData = {
      description,
      price,
      category,
      createdAt: new Date(date),
      type,
    };
    await createTransaction(transactionData);
        reset();
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonTransaction type="button">Nova transação</ButtonTransaction>
      </Dialog.Trigger>
      <Dialog.Portal>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>Nova transação</ModalTitle>
          <FormContainer onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input
              type="text"
              placeholder="Descrição"
              required
              {...register("description")}
            />
            <input
              type="number"
              placeholder="Valor"
              required
              {...register("price", { valueAsNumber: true })}
            />
            <input
              type="text"
              placeholder="Categoria"
              required
              {...register("category")}
            />
            <input
              type="date"
              placeholder="Data"
              required
              {...register("date")}
            />
            <Controller
              control={control}
              name="type"
              render={(props) => {
                return (
                  <ContainerBtnInOut
                    onValueChange={props.field.onChange}
                    value={props.field.value}
                  >
                    <BtnInOut variant="income" value="income">
                      <ArrowCircleUp size={20} weight="bold" /> Entrada
                    </BtnInOut>
                    <BtnInOut variant="outcome" value="outcome">
                      <ArrowCircleDown size={20} weight="bold" /> Saída
                    </BtnInOut>
                  </ContainerBtnInOut>
                );
              }}
            />
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
