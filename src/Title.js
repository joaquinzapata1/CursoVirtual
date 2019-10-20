import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <div className="row py-2 py-lg-3">
                <div className="col">
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        )
    }
}
