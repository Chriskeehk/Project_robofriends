

import React, { Component } from 'react';
import CardList from './CardList';
import 'tachyons';

const robots_array = [
{
	id: 1,
	name: 'Chris Ho',
	username: 'Chris',
	email: 'chris@hkmouse.com'
},
{
	id: 2,
	name: 'Yanis Ho',
	username: 'Yanis',
	email: 'yanis@hkmouse.com'
},
{
	id: 3,
	name: 'Evellin Ho',
	username: 'Evellin',
	email: 'yanis@hkmouse.com'
},
]

class App extends Component {
	constructor() {
		super()
		this.state = {
			// Var Name : Init Value
			robots: robots_array,
			searchfield: '',
			date1:  new Date()
		};
	}
		// Like a Start
	  	componentDidMount() {
		    setInterval(() => this.tick1(),
		      1000
		    );
	  	}

		tick1() {
		    this.setState({
		      date1: new Date()
		    });
		    //this.setState({ searchfield: "Yanis" })
		  }
	

	mySearchFun = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return (
			<div className = 'tc'>
				<h1>RoboFriends</h1>
				<h2>It is {this.state.date1.toLocaleTimeString()}.</h2>
				<div>
					<input 
						className='pa3 ba b--green bg-lightest-blue'
						type='search' 
						placeholder='search robots' 
						onChange={this.mySearchFun}
					/>
				</div>
				<CardList robots={filteredRobots}/>
			</div>
		);
	}
}

export default App;
