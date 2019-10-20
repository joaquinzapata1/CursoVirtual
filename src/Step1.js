import React, { Component } from 'react';
import Form from './Form';
import tutor from './assets/tutor.png';

export default class Step1 extends Component {
    render() {
        return (
                <article className="row mt-3">
                    <section className="slide-in-left col-4 ml-auto d-none d-md-block">
                        <img src={tutor} className="App-logo" alt="logo" />
                    </section>
                    <section className="col-md-5 col-12 fade-in-fwd my-auto mr-auto pb-5 pb-md-0">
                    <p className="welcome">Bienvenido, {this.props.info.name}! <br/>
                    Hoy serás un estudiante virtual!</p>
                        <Form 
                            handleInputChange={this.props.handleInputChange} 
                            nextStep={this.props.nextStep}
                            info={this.props.info} />
                    </section>
                </article>
        )
    }
}
