import React, { Component } from 'react';
import avatar from './assets/tutor-circ.png';
import Image from 'react-bootstrap/Image';

export default class Step4 extends Component {
    render() {
        return (
            <>
                <article className="row mb-4">
                    <section className="fade-in-fwd col-md-5 col-12 ml-auto my-auto order-2 order-md-1">
                        <p className="speech-bubble bubble-left py-4 px-4 mb-0 py-md-2 text-justify">
                            Seleccione la respuesta que considere correcta.
                        </p>
                    </section>
                    <section className="col-md-2 col-12 slide-in-right mr-auto tutor-avatar order-1 order-md-2 mb-2 mb-md-0">
                        <Image src={avatar} roundedCircle />
                    </section>
                </article>
                <div className="row text-md-left text-center mt-2 pb-5">
                    {this.props.evaluation}
                </div>
            </>
        )
    }
}
