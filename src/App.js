import logo from './logo.svg';
import { Asin } from './components/asin';
import { CaseId } from './components/caseId';
import { OrderId } from './components/orderId';
import { Links } from './components/links';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Asin />
        <CaseId />
        <OrderId />
        <Links />
      </div>
    </div>
  );
}

export default App;
