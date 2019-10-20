import React, { Component } from 'react';

export default class Card extends Component {
    
    constructor(){
        super();
        this.state = {
            hidden: true
        }
    }

    toggleClass = (e) => {
        const current = this.state.hidden;
        this.setState({ 
            hidden: !current
        });
    };

    render() {
        return (
            <div className="card text-dark mb-3 mb-md-0">
                <h5 className="card-header ed-card-header" onClick={this.toggleClass}>
                    <span className="d-block">
                        {this.props.title}
                    </span>
                </h5>
                <div className={this.state.hidden ? "hidden-card" : "swing-in-top-fwd"}>
                    <div className="card-body">
                        {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
}
