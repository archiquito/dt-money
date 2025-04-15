import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";

export function Summary () {
    return (
        <SummaryContainer>
            <SummaryCard className="entries">
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} />
                </header>
                <strong>R$ 17.400,00</strong>
            </SummaryCard>

            <SummaryCard className="exits">
                <header>
                    <span>Saídas</span>
                   <ArrowCircleDown size={32} />
                </header>
                <strong>- R$ 1.259,00</strong>
            </SummaryCard>

            <SummaryCard className="total">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} />
                </header>
                <strong>R$ 16.141,00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}