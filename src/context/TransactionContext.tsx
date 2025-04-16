import {  useState, useEffect } from "react";
import { transactionContext } from "./contextTransaction";
import { api } from "../api/axios";

export interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: Date;
}

export interface CreateTransactionProps {
  description: string;
  price: number;
  category: string;
  createdAt: Date;
  type: "income" | "outcome";
}

interface TransactionContextProviderProps {
  children: React.ReactNode;
}

export function TransactionContextProvider({
  children,
}: TransactionContextProviderProps) {
  const [dataTransaction, setDataTransaction] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchTransactions(search: string = "") {
    try {
      const queryString = search ? `?q=${search}` : "";
      setIsLoading(true);
      const response = await api.get(`/transactions${queryString}`, {
        params: {
          _sort: "createdAt",
          _order: "desc",
        },
      });
      setDataTransaction(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  }

  async function createTransaction(data: CreateTransactionProps) {
    const response = await api.post("/transactions", data);
    setDataTransaction((state) => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <transactionContext.Provider
      value={{
        dataTransaction,
        isLoading,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </transactionContext.Provider>
  );
}
