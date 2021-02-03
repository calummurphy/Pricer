import PriceList from './components/PriceList'
import NewCurrencyForm from './components/CurrencyForm';
import {useState} from 'react'
import ReactLogo from './Pricer written logo.svg';



function App() {



  return (
    <div className="App">      
      <header className="App-header">

        <h1 className = "Heading" >
          <div className = 'logo'>
            <img  src={ReactLogo} alt="Logo" />
          </div>
        </h1>

        {/* <div>
          <p className = 'instructions-LABEL'>ENTER CURRENCY TICKER: </p>
        </div> */}

        <div className = 'CurrencySearch'>
          <NewCurrencyForm></NewCurrencyForm>
          {/* <PriceList></PriceList> */}
        </div>

        <div className = 'BottomBlock'>

        </div>

      </header>
    </div>
  );
}

export default App;



