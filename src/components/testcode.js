// import axios from 'axios';
// import React  from 'react';

// export default class PriceInput extends React.Component {
//     state = {
//         name:" ",
//     };


//     handleChange = event =>{
//         this.setState({name: event.target.value});
//     };

//     handleSubmit = event => {
//         event.preventDefault();

//         const user = {
//             name: this.state.name,
//         };
// //  ?ids=bitcoin&vs_currencies=usd
//         axios
//         .post(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`
//         ,{user})
//         .then(res => {
//             console.log(res);
//             console.log(res.data);
//         });
//     };

//     render(){
//         return(
//             <form onSubmit = {this.handleSubmit}>
//                 <label> Price Name: 
//                     <input type = "text" name = "name" onChange = {this.handleChange}/>
//                 </label>
//                 <button type = "submit">Add</button>
//             </form>
//         )
//     }
// }


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