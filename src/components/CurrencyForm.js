import {useState, useEffect} from 'react'
import axios from 'axios';
import React  from 'react';

const library = {
    'BTC': 'bitcoin',
    'ETH': 'ethereum',
}


const NewCurrencyForm = () => {


    const [currency, setCurrency] = useState(`ethereum`)
    const [fiat, setFiat] = useState(`usd`)
    const [price, setPrice] = useState(``)


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(library,currency, library[currency])

        // console.log(currency, fiat)
        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=` + library[currency] + `&vs_currencies=` + fiat)

        .then(response => {
            setPrice(response.data[library[currency]].usd)
            console.log(price)
    
        }); 
    }


    return(
        <div>
           <input  placeholder = 'input crypto' value = {currency} onChange={(e) => setCurrency(e.target.value)} required />
            <button onClick = {handleSubmit}>Search</button>
            <p>{currency} price (USD): ${price}</p>
        </div>
    );
}

export default NewCurrencyForm


  // axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=` + currency + `&vs_currencies=` + fiat)

    // .then(response => {
    //     setPrice(response.data.[currency].usd)
    //     console.log(price)

    // }); 

    // useEffect(() => {
    //     async function fetchData () {
    //     const request = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=` + currency + `&vs_currencies=` + fiat)
    //     console.log(request)
    //     return request
    //     }
    //     // .then(response => {
    //     //     setPrice(response.data.[currency].usd)
    //     //     console.log(price, 'orange')
    
    //     // }); 

    // }, [currency])
