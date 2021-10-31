import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Decipher from './components/Decipher';
import AllQuestions from './components/AllQuestions';
import "./App.css"
export default class App extends Component {
	
	render(){		
		return (
			<Router>
				<div className="App h-screen font-lato overflow-y-hidden">
          		<Header/>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/decipher" component={Decipher} />
						<Route exact path="/all-questions" component={AllQuestions} />
					</Switch>
				</div>
			</Router>
		);
	}
}

