import PriceList from './components/PriceList'
import PriceInput from './components/PriceInput';

import NewCurrencyForm from './components/CurrencyForm';
import {useState} from 'react'


function App() {



  return (
    <div className="App">
      <header className="App-header">
        <h1 className = "Heading"> PRICER </h1>
        <div>

          <form className = 'CurrencySearch'>
          <NewCurrencyForm></NewCurrencyForm>
          {/* <PriceList></PriceList> */}
          </form>

        </div>
      </header>
    </div>
  );
}

export default App;



