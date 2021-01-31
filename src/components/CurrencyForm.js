import {useState} from 'react'
import axios from 'axios';
import React  from 'react';

const NewCurrencyForm = () => {

    const [currency, setCurrency] = useState(`ethereum`)
    const [fiat, setFiat] = useState(`usd`)
    const [price, setPrice] = useState(``)


    const handleSubmit = (e) => {
        console.log(currency)
        e.preventDefault();

        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=` + currency + `&vs_currencies=` + fiat)

        .then(response => {
            setPrice(response.data.[currency].usd)
            console.log(price)
    
        }); 
    }

    axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=` + currency + `&vs_currencies=` + fiat)

    .then(response => {
        setPrice(response.data.[currency].usd)
        console.log(price)

    }); 

    
    return(

        <form onSubmit={handleSubmit}>>
            <input id = 'currency' placeholder = 'input crypto' value={currency} onChange={(e) => setCurrency(e.target.value)} required></input>
            <input type="submit" value="Search" /> 

            <br/>
            {currency} price (USD): ${price}

        </form>

    )
}

export default NewCurrencyForm