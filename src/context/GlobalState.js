import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    // { id: 1, text: "Camera", amount: 300 },
    // { id: 2, text: "Flower", amount: -20 },
    // { id: 3, text: "Salary", amount: 3000 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addTransaction(transaction) {
    dispatch({
      type: "AddTransaction",
      payload: transaction,
    });
  }

  function deleteTransaction(id) {
    dispatch({
      type: "DeleteTransaction",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
