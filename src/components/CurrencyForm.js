import {useState} from 'react';




const NewCurrencyForm = (props) => {

    const [currency, setCurrency] = useState()

    const handleSubmit = (event) => {
        if (!event.key) return
        // setCurrency(event.target.value)
        console.log(currency)
    }

    return(
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder = 'input Crypto' value = {currency} 
                    onChange={(event) => setCurrency(event.target.value)} required /> 
                <input type="submit" value="Search" /> 
            </form>


    )
}

export default NewCurrencyForm