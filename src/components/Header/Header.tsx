import {  HeaderContainer, HeaderContent } from "./styles";
import logo from "../../assets/Logo.svg";
import { ModalTransaction } from "./components/ModalTransaction/ModalTransaction";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="dt money" />
       <ModalTransaction />
      </HeaderContent>
    </HeaderContainer>
  );
}
