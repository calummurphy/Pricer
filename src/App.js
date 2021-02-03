import PriceList from './components/PriceList'
import PriceInput from './components/PriceInput';
import NewCurrencyForm from './components/CurrencyForm';
import {useState} from 'react'
import ReactLogo from './PRICER logo svg.svg';



function App() {



  return (
    <div className="App">      
   
      <header className="App-header">
        
        <h1 className = "Heading" ><img src={ReactLogo} alt="Logo" />  PRICER </h1>
        <div>
          <p className = 'instructions-LABEL'>ENTER CURRENCY TICKER: </p>
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



