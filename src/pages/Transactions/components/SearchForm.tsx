import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    
    <SearchFormContainer>
        <input type="text" placeholder="Busque por transações" />
        <button type="submit"><MagnifyingGlass />  Buscar</button>
    </SearchFormContainer>
  );
}
// Compare this snippet from src/pages/Transactions/styles.ts:
