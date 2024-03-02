import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpence = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  const expense =
    amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => acc + item, 0)
      .toFixed(2);

  return (
    <div>
      <div className="inc-exp-container">
        <div className="income">
          <h4>Income</h4>
          <h4 id="money-plus" className="money plus">
            ${income}
          </h4>
        </div>
        <div className="expence">
          <h4>Expence</h4>
          <h4 id="money-minus" className="money minus">
            ${expense}
          </h4>
        </div>
      </div>
    </div>
  );
};
