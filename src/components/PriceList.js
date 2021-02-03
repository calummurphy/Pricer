import axios from 'axios';
import React  from 'react';
import {Component} from 'react'


export default class PriceList extends React.Component {


    constructor(){
        super()
        this.state = {
        prices:'',
        currency: `ethereum`,
        fiat:`usd`,
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=` + this.state.currency + `&vs_currencies=` + this.state.fiat)

        .then(response => {
            this.setState(
                {prices: response.data[this.state.currency].usd})
            // console.log(price)
    
        }); 
    }


    render(){
        return(
            <div>
            <input  placeholder = 'input crypto' value = {this.state.currency} onChange={(e) => this.setState({currency: e.target.value})} required />
             <button onClick = {this.handleSubmit}>Search</button>
             <p>{this.state.currency} price (USD): ${this.state.prices}</p>
         </div>
        )
    }
}
