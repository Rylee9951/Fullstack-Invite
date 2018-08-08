import React, { Component } from 'react'
import '../styles/App.css'
import {getUsers, sendStatus} from '../actions/action'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class Home extends Component {

	componentDidMount() {
		getUsers()
	}

	handleGoing = (e) => {
		sendStatus(e.target.value, 'going')
	}

	handleNotGoing = (e) => {
		sendStatus(e.target.value, 'notgoing')	
	}

  render () {
    return (
      <div id="container">
      	<div className="info">
	    		<p><Link to='/going'>Going:</Link> {this.props.going.length}</p>
	    		<p><Link to='/notgoing'>Not Going:</Link> {this.props.notgoing.length}</p>
	    	</div>	
    		<div className="userContainer">
    			<div className="imageContainer">
    				<img  src={this.props.user.image} alt=""/>
    			</div>
    			<div className="infoContainer">
    				<p className="name"><span className="title">Name:</span>{this.props.user.name}</p>
    				<p><span className="title">Phone:</span>{this.props.user.phone}</p>
    				<p><span className="title">Email:</span>{this.props.user.email}</p>
    			</div>
    			<div className="buttonContainer">
    				<button onClick={this.handleGoing} value={this.props.user.id}>Going</button>
    				<button onClick={this.handleNotGoing} value={this.props.user.id}>Not Going</button>
    			</div>
    		</div>
      </div>
    )
  }
}

Home.defaultProps = {
	users: {},
	going: [],
	notgoing: []
}

function mapStateToProps(appState) {
	return {
		user: appState.user,
		going: appState.going,
		notgoing: appState.notgoing
	}

}
export default connect(mapStateToProps)(Home)
