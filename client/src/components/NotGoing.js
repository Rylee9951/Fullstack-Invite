import React, { Component } from 'react'
import {getNotGoing} from '../actions/action'
import {connect} from 'react-redux'

class NotGoing extends Component {

    componentDidMount() {
        getNotGoing()
    }

    render() {
        return (
            <div>
                <h1>Not Going</h1>
                <div className="responded">
                    {this.props.notgoing.map(user => (
                        <div key={user.id} className="userContainer">
                            <div className="imageContainer">
                                <img src={user.image} alt='' />
                            </div>
                            <p><span className="title">Name:</span> <span className="name">{user.name}</span></p>
                            <p><span className="title">Phone:</span> {user.phone}</p>
                            <p><span className="title">Email:</span> {user.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

NotGoing.defaultProps = {
  notgoing:[]
}

function mapStateToProps(appState) {
  return {notgoing:appState.notgoing}
}

export default connect(mapStateToProps)(NotGoing)
