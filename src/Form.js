import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.handleInputChange = this.props.handleInputChange;
        this.nextStep = this.props.nextStep;
    }
    render() {
        const {name, age, email, level, sex} = this.props.info;
        const enabled = ((name && age && email && level && sex) !== "") 
            && email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ;
        return (
            <form>
                <div className="form-group">

                    <input className="form-control mb-1" type="text" name="name" placeholder="Nombre" 
                    value={name} onChange={this.handleInputChange}/>
                    <input className="form-control mb-1" type="number" name="age" placeholder="Edad"
                    value={age} onChange={this.handleInputChange}/>
                    <input className="form-control" type="email" name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Correo electrónico"
                    value={email} onChange={this.handleInputChange}/>
                    <small id="emailHelp" className="form-text text-muted text-left mt-0 mb-1 ml-2">ejemplo@example.com</small>
                
                    <select className="form-control mb-1" name="level" value={level} onChange={this.handleInputChange}>
                        <option defaultValue value="">Estás cursando</option>
                        <option value="tecnicatura">Tecnicatura</option>
                        <option value="terciario">Terciario</option>
                        <option value="pregrado">Pregrado</option>
                        <option value="grado">Grado</option>
                        <option value="postgrado">Postgrado</option>
                    </select>

                    <select className="form-control" name="sex" value={sex} onChange={this.handleInputChange}>
                        <option defaultValue value="">Sexo</option>
                        <option value="hombre">Hombre</option>
                        <option value="mujer">Mujer</option>
                        <option value="otro">Otro</option>
                    </select>
                
                    <button className="btn btn-success mt-2" 
                        disabled={!enabled} onClick={this.nextStep}>Ingresar
                    </button>

                </div>
            </form>
        )
    }
}
