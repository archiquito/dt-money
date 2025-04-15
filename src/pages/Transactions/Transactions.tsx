import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Summary";
import { SearchForm } from "./components/searchForm";
import {
  TransactionsContainer,
  TableContainer,
  PriceHighlight,
} from "./styles";

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />
    
      <TransactionsContainer>
      <SearchForm />
        <TableContainer>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
              <PriceHighlight variant="outcome">-R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
              <PriceHighlight variant="outcome">-R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
          </tbody>
        </TableContainer>
      </TransactionsContainer>
    </>
  );
}
