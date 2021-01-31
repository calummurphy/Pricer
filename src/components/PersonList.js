import axios from 'axios';
import React  from 'react';

export default class PersonList extends React.Component {
    state = {
        persons:[],
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            console.log(res);
            this.setState({persons: res.data}); //By setting the state will have access to this in render. 
        })
    }

    render(){
        return(
            <ul>
                {this.state.persons.map(person => (
                <li key = {person.id}>{person.name}</li>))}
            </ul>
        )
    }
}