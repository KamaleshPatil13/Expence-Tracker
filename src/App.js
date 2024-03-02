import "./App.css";
import { AddTransaction } from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExpence } from "./components/IncomeExpence";
import { TransactionList } from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App full-screen">
      <div className="header">
        <Header />
      </div>
      <GlobalProvider>
        <div className="bal-inc-exp">
          <Balance />
          <IncomeExpence />
        </div>
        <div className="tran-list-newTran">
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
