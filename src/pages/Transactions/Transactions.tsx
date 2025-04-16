
import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  TransactionsContainer,
  TableContainer,
  PriceHighlight,
} from "./styles";
import { transactionContext } from "../../context/contextTransaction";


export function Transactions() {
    const  dataTransaction  = useContextSelector(transactionContext, (context) => {
      return context.dataTransaction
    });
    const  isLoading  = useContextSelector(transactionContext, (context) => {
      return context.isLoading
    });
    console.log({dataTransaction})
  return (
    <>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TableContainer>
          <tbody>
            <>
            {isLoading && ( 
              <tr>
                <td colSpan={4} style={{ textAlign: "center" }}>
                  Loading...
                </td>
              </tr>
            )}
            {dataTransaction.length > 0 && !isLoading && dataTransaction.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                     {transaction.type === "outcome" && "- "}
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {new Intl.DateTimeFormat("pt-BR").format(
                      new Date(transaction.createdAt)
                    )}
                  </td>
                </tr>
              );
            }
            )}
            
            {dataTransaction.length === 0 && !isLoading && (
              <tr>
                <td colSpan={4} style={{ textAlign: "center" }}>
                  No transactions found.
                </td>
              </tr>
            )}
            </>
          </tbody>
        </TableContainer>
      </TransactionsContainer>
    </>
  );
}
