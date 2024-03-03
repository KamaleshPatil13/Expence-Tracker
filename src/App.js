import "./App.css";
import { AddTransaction } from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExpense } from "./components/IncomeExpence";
import { TransactionList } from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div id="app" className="App full-screen">
      <div className="header">
        <Header />
      </div>
      <GlobalProvider>
        <div className="bal-inc-exp">
          <Balance />
          <IncomeExpense />
        </div>
        <div className="tran-list-newTran">
          <AddTransaction />
          <TransactionList />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
