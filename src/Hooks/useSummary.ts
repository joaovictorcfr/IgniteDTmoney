import { useMemo } from "react";
import { TransactionsContext } from "../Contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transactions) => {
        if (transactions.type === "income") {
          acc.income += transactions.price;
          acc.total += transactions.price;
        } else {
          acc.outcome += transactions.price;
          acc.total -= transactions.price;
        }

        return acc;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      }
    );
  }, [transactions]);

  return summary;
}
