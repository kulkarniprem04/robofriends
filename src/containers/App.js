import React, { Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
//import { robots } from './robots'
import ErrorBoundry from '../components/ErrorBoundry';
import Searchbox from '../components/Searchbox';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots : [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {return response.json();})
        .then(users => this.setState({robots: users}))
    }

    onSearchchange = (event) => {
        this.setState({searchfield: event.target.value })
        
        //console.log(filteredRobots);
    }
    
    render () {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>LOADING</h1>
        }
        else {
            return (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <Searchbox Searchchange={this.onSearchchange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={ filteredRobots } />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );}

    }
    
};

export default App;