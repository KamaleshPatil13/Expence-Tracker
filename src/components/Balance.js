import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const total = transactions
    .reduce((acc, { amount }) => acc + amount, 0)
    .toFixed(2);

  return (
    <>
      <div >
        <h1>Your Balance</h1>
        <h1>${total}</h1>
      </div>
    </>
  );
};
