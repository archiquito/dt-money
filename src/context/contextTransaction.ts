import { createContext } from "react";
import { Transaction, CreateTransactionProps } from "./TransactionContext";

interface TransactionContextType {
    dataTransaction: Transaction[];
    isLoading: boolean;
    fetchTransactions: (search?: string) => Promise<void>;
    createTransaction: (data: CreateTransactionProps) => Promise<void>;
  }

export const transactionContext = createContext({} as TransactionContextType);