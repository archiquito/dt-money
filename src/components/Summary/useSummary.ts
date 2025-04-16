import { useContext } from "react";
import { transactionContext } from "../../context/contextTransaction";

export function useSummary() {
    const { dataTransaction } = useContext(transactionContext);

    const summary = dataTransaction.reduce(
        (acc, transaction) => {
            if (transaction.type === "income") {
                acc.income += transaction.price;
                acc.total += transaction.price;
            } else {
                acc.outcome += transaction.price;
                acc.total -= transaction.price;
            }
            return acc;
        },
        {
            income: 0,
            outcome: 0,
            total: 0,
        }
    );

    return summary;
}