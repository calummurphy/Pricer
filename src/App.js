import PersonList from './components/PersonList'
import PriceList from './components/PriceList'
import PersonInput from './components/PersonInput'
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
          {/* <input type = "text" name = "Currency" required placeholder = 'Currency Ticker'></input>
          <button onClick> Search</button> */}
          {/* <PersonInput></PersonInput>
          <PersonList></PersonList> */}

          {/* <PriceInput></PriceInput> */}
          <NewCurrencyForm></NewCurrencyForm>
          <PriceList></PriceList>

          </form>

        </div>
      </header>
    </div>
  );
}

export default App;



