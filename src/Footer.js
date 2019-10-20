import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default class Footer extends Component {
    render() {
        const enabled = ((this.props.step > 1 && this.props.step < 4) 
                        || (this.props.step === 4 && this.props.testPassed));
                       
        return (
            <footer className="footer py-2 row mt-2">
                    <ul className="pagination mx-auto">
                        {this.props.step > 1 && 
                            <li className="page-item">
                                <button className="page-link" onClick={this.props.prevStep}>Anterior</button>
                            </li>
                        }
                        {enabled &&
                            <li className="page-item">
                                <button className="page-link" 
                                    onClick={this.props.nextStep}>Siguiente
                                </button>
                            </li>
                        }
                    </ul>
                <ProgressBar striped variant="success" now={this.props.progress} />
            </footer>
        )
    }
}
