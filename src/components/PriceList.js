import axios from 'axios';
import React  from 'react';
import {Component} from 'react'

// const API_Key = `?ids=bitcoin&vs_currencies=usd`

// const button = select('submit')
// const currency = `ethereum`
// const Fiat = `usd`
// const API_Key = `?ids=`+currency+`&vs_currencies=`+Fiat


export default class PriceList extends React.Component {


    constructor(){
        super()
        this.state = {
        prices:'',
        currency: `ethereum`,
        Fiat:`usd`,
        }
    }

    
    // state = {
    //     prices:'',
    //     currency:`ethereum`,
    //     Fiat:`usd`,
    //     API_Key: `?ids=`+ this.state.currency +`&vs_currencies=`+ this.state.Fiat,
    // }

    // handleChange = event =>{
    //     event.preventDefault();
    //     this.setState({currency: event.target.value});
    //     console.log(this.state.currency)
    // };

    onSubmit = event =>{

        this.setState({currency: event.target.value});
        console.log(this.state.currency)
    }


    componentDidMount(){
        // axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd`)
        // axios.get(`https://api.coingecko.com/api/v3/simple/price` + this.state.API_Key)

        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=` + this.state.currency + `&vs_currencies=` + this.state.Fiat)

            
        .then(res => {
            // console.log(res.data);
            this.setState({prices: res.data.[this.state.currency].usd}); //By setting the state will have access to this in render. 
        })
    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
            
                {/* <input type = "text" placeholder = 'input crypto' name = "name" onChange = {this.handleChange}/> */}
                <input type = "text" placeholder = 'input crypto' name = "name" onChange={(event) => this.setState({currency: event.target.value})} required/>
                <button type = "submit">Search</button>
                <br/>
                {this.state.currency} price (USD): ${this.state.prices}
                {/* {console.log(this.state.prices)}
                {console.log(this.state.currency)} */}

            </form>
        )
    }
}


