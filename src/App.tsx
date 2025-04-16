import { TransactionContextProvider } from "./context/TransactionContext";
import { Transactions } from "./pages/Transactions/Transactions";

export function App() {
  return (
    <>
      <TransactionContextProvider>
        <Transactions />
      </TransactionContextProvider>
    </>
  );
}
