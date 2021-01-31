import axios from 'axios';
import React  from 'react';


// const API_Key = `?ids=bitcoin&vs_currencies=usd`
const Currency = `ethereum`
const Fiat = `usd`
const API_Key = `?ids=`+Currency+`&vs_currencies=`+Fiat


export default class PriceList extends React.Component {

    state = {
        prices:[],
    }

    componentDidMount(){
        // axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd`)
        axios.get(`https://api.coingecko.com/api/v3/simple/price` + API_Key)
        
        

        .then(res => {
            console.log(res.data);
            this.setState({prices: res.data.[Currency].usd}); //By setting the state will have access to this in render. 
            // this.setState({prices: res.data.ethereum.usd});
        })
    }
    
    render(){
        return(
            <ul>
                {Currency} Price (USD): ${this.state.prices}
             {/* {this.state.prices.map(price => (
                <li>{price.usd}</li>))         */}
            </ul>

        )
    }
}


