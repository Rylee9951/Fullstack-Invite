import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../styles/App.css'
import store from '../store'
import {Provider} from 'react-redux'

import Home from './Home'
import Going from './Going'
import NotGoing from './NotGoing'

class App extends Component {
  render () {
    return (
      <Provider store = {store}>
      <Router>
      	<div>
      		<Switch>
      			<Route exact path='/' component={Home} />
      			<Route path="/going" component={Going} />
    				<Route path="/notgoing" component={NotGoing} />
      		</Switch>
      	</div>
      </Router>
      </Provider>
    )
  }
}


export default App
