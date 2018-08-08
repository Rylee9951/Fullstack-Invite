import React, { Component } from 'react'
import {getGoing} from '../actions/action'
import {connect} from 'react-redux'

class Going extends Component {

    componentDidMount() {
        getGoing()
    }

    render() {
        return (
            <div>
                <h1>Going</h1>
                <div className="responded">
                    {this.props.going.map(user => (
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

Going.defaultProps = {
  going:[]
}

function mapStateToProps(appState) {
  return {going:appState.going}
}

export default connect(mapStateToProps)(Going)
