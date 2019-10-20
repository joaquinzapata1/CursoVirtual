import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import avatar from './assets/tutor-circ.png';

export default class Step2 extends Component {
    render() {
        return (
            <>
                <article className="row pt-0 pt-md-1">
                    <section className="col-12 col-md-2 slide-in-left ml-auto tutor-avatar mb-2 mb-md-0">
                        <Image src={avatar} roundedCircle />
                    </section>
                    <section className="col-12 col-md-7 fade-in-fwd mr-auto my-auto">
                        <p className="speech-bubble bubble-right py-4 px-4 mb-0 py-md-2 text-justify">
                            Para comenzar, lo invito a acceder a cualquiera de nuestros materiales que
                            aparecen a continuación: Puede descargar un PDF de 199 páginas, dónde
                            se realiza una introducción a la Cultura Virtual... o puede observar un
                            video de 10 minutos sobre el mismo tema...
                        </p>
                    </section>
                </article>
                <article className="row mt-md-5 mt-2">
                    <section className="col-md-3 col-12 mx-auto fade-in-fwd pdf my-auto">
                        <h2 className="h4">Material en PDF:</h2>
                        <a href={process.env.PUBLIC_URL + '/etnografia-virtual.pdf'} download
                            className="btn btn-success mt-md-5 btn-lg">Descargar</a>
                    </section>
                    <section className="embed-responsive embed-responsive-16by9 col-10 col-md-4 fade-in-fwd ytvid mt-2 mt-md-0 mx-auto mb-md-2 mb-5">
                        <iframe title="TIC-development" className="embed-responsive-item" src="https://www.youtube.com/embed/AoQYKdF3NKc" allowFullScreen></iframe>
                    </section>
                </article>
            </>
        )
    }
}
