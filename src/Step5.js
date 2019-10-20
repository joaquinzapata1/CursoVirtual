import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import avatar from './assets/tutor-circ.png';

export default class Step5 extends Component {
    render() {
        return (
            <>
            <article className="row mt-md-5 pt-md-5 pt-md-1">
                <section className="col-md-2 col-12 slide-in-left ml-auto tutor-avatar mb-2 mb-md-0">
                    <Image src={avatar} roundedCircle />
                </section>
                <section className="col-md-5 col-12 fade-in-fwd mr-auto my-auto">
                    <p className="speech-bubble bubble-right py-3 px-4 mb-0 py-md-2">
                        Felicitaciones {this.props.name}, has llegado al final del módulo!
                        Te enviaremos el diploma por correo electrónico.
                        Gracias por participar de nuestro curso virtual!
                    </p>
                </section>
            </article>
            <article className="row mt-md-5 mt-2 pb-5">
                <section className="col-12 col-md-4 mx-auto fade-in-fwd pdf my-auto">
                    <p className="h5">Volver al principio</p>
                    <button className="btn btn-info mt-1 btn-md btn-md-lg" onClick={this.props.goHome}>Volver</button>
                </section>
            </article>
            </>
        
        )
    }
}
