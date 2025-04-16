import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { useSummary } from "./useSummary";

export function Summary () {
    const summary = useSummary();

    return (
        <SummaryContainer>
            <SummaryCard className="entries">
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} />
                </header>
                <strong>{new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(summary.income)}</strong>
            </SummaryCard>

            <SummaryCard className="exits">
                <header>
                    <span>Saídas</span>
                   <ArrowCircleDown size={32} />
                </header>
                <strong>- {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(summary.outcome)}</strong>
            </SummaryCard>

            <SummaryCard className="total">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} />
                </header>
                <strong>R$ {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}