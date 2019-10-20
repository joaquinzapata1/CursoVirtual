import React, { Component } from 'react';
import avatar from './assets/tutor-circ.png';
import Image from 'react-bootstrap/Image';
import caracteristicas from './assets/caracteristicas';
import Card from './Card';

export default class Step3 extends Component {
    render() {
        const cards = caracteristicas.map((card) => 
            <div className="col-md-2 col-12" key={card.id}>
                <Card title={card.title} content={card.content}/>
            </div>
        )
        return (
            <>
                <article className="row">
                    <section className="fade-in-fwd col-md-5 col-12 ml-auto my-auto order-2 order-md-1">
                        <p className="speech-bubble bubble-left py-4 px-4 mb-0 py-md-2 text-center text-md-justify">
                            La educación virtual se caracteriza por ser: <br/>
                            Haz click en cada titulo!
                        </p>
                    </section>
                    <section className="col-12 col-md-2 slide-in-right mr-auto tutor-avatar order-1 order-md-2 mb-2 mb-md-0">
                        <Image src={avatar} roundedCircle />
                    </section>
                </article>
                <article className="row mx-auto px-0 mt-5 fade-in-fwd ed-cards pb-5">
                    <div className="col-0 col-md-1"></div>
                        {cards}
                    <div className="col-0 col-md-1"></div>
                </article>
            </>
        )
    }
}
