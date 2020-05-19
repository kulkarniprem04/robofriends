import React, { Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
//import { robots } from './robots'
import ErrorBoundry from '../components/ErrorBoundry';
import Searchbox from '../components/Searchbox';
import './App.css';

import { setSearchField, requestRobots } from '../Actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchchange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }
    
    render () {
        const { searchField, onSearchchange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
         <h1>LOADING</h1> :
         (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <Searchbox Searchchange={onSearchchange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={ filteredRobots } />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );

    }
    
};

export default connect(mapStateToProps, mapDispatchToProps)(App);