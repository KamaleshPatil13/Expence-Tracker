import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const [error, setError] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const handleAddTrandaction = (e) => {
    e.preventDefault();
    if (!text.trim() || amount === 0) {
      setError("Please enter both text and amount.");
    } else {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000),
        text: text,
        amount: +amount,
      };
      addTransaction(newTransaction);
      setText("");
      setAmount("");
      setError("");
    }
  };

  return (
    <div className="addTransactiom">
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleAddTrandaction}>
        <div className="form-control">
          <label className="label">Text</label>
          <input
            autoFocus
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label">Amount</span>
            <pre className="note">
              Negative - Expense
              <br />
              Positive - income
            </pre>
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <div className="error">{error}</div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
