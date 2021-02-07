import {useState } from 'react'
import axios from 'axios';
import React  from 'react';
import { Spin } from 'antd';
import { LoadingOutlined, CheckCircleTwoTone } from '@ant-design/icons';


const library = {
    'BTC': 'bitcoin',
    'ETH': 'ethereum',
    'USDT':'tether',
    'XRP':'xrp',
    'DOT':'polkadot',
    'ADA':'cardano',
    'LINK':'chainlink',
    'LTC':'litecoin',
    'BCH':'bitcoin-cash',
    'UNI':'uniswap',
    'DOGE':'dogecoin',
    'AAVE':'aave',
    'SUSHI':'sushi',
    'YFI':'yearn-finance',

}




const NewCurrencyForm = () => {


    const [currency, setCurrency] = useState(`...`)
    const [fiat, setFiat] = useState(`usd`)
    const [price, setPrice] = useState(``)
    const [error, setError] = useState(``)
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const [loading, setLoading] = useState(false)
  


    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        
        if (library[currency] == undefined){
            setError('Please enter a relevant Ticker')
            return console.error('error');
        }

        else{
        setError('')
        console.log(loading)

        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=` + library[currency] + `&vs_currencies=` + fiat)
        
        .then(response => {
            setPrice(response.data[library[currency]].usd)
            console.log(price)
            
        }); 
        setLoading(true);

        }
    }


    return(
        <div>
           <input  type = 'text' placeholder = 'Enter ticker here...'  onChange={(e) => setCurrency(e.target.value.toUpperCase())}  required />
            <button onClick = {handleSubmit}>Search</button>
            <p className = 'error'>{error} </p>
            <p >{currency} price (USD): ${price}</p>
            {/* <p >{loading? "":<Spin indicator={antIcon} /> }</p> */}
        </div>
    );
}

export default NewCurrencyForm






