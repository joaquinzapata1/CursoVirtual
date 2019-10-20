import React from 'react';
import { Component } from 'react';
import './App.css';
import './Animations.css';
import './Responsive.css';
import Footer from './Footer';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Title from './Title';
import Evaluation from './Evaluation';
import evaluacion from './assets/evaluacion';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
        step: 1,
        title: "Curso virtual",
        name: "",
        age: "",
        email: "",
        level: "",
        sex: "",
        isCorrect0: false,
        isCorrect1: false,
        isCorrect2: false
    }
  }

  handleInputChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  
  }

  handleNextStep = (e) => {
    e.preventDefault();
    if(this.state.step < 5) {
        this.setState({
          step: this.state.step + 1
        })
    }
  }

  handlePrevStep = () => {
    switch (this.state.step) {
      case 4:
        this.setState({
          testPassed: false,
          step: this.state.step -1
        })
        break;
    
      default:
          this.setState({
            step: this.state.step - 1
          })
        break;
    }
  }

  goHome = () => {
    this.setState({
      step: 1
    })
  }

  verifyAnswer = (e) => {
    this.setState({
        ["isCorrect" + e.target.name]: (e.target.value === evaluacion[e.target.name].correct) ? true : false
    });
  }

  render() {
    const titles = ["Curso virtual", "Introducción", "Características", "Evaluación", "Fin del módulo"];
    const evaluation = evaluacion.map((q)=>
          <form className="col-12 col-md-8 mx-auto eval-list pb-2" key={q.id} onChange={this.verifyAnswer}>
              <Evaluation  question={q.question} a={q.a} b={q.b} c={q.c} 
              correct={q.correct} id={q.id} evalState={this.state["isCorrect" + q.id]}/>
          </form>  
        )
    return (
      <>
        <main className="App container-fluid">
          <Title title={titles[this.state.step-1]}/>
          {this.state.step === 1 && 
          <Step1 
            handleInputChange={this.handleInputChange} 
            nextStep={this.handleNextStep} 
            info={this.state}/>}
          {this.state.step === 2 && <Step2 
            handleTitle={this.handleTitle}/>}
          {this.state.step === 3 && <Step3 />}
          {this.state.step === 4 && <Step4 verifyAnswer={this.verifyAnswer} evaluation={evaluation}/>}
          {this.state.step === 5 && <Step5 name={this.state.name} goHome={this.goHome}/>}
          <Footer 
          prevStep={this.handlePrevStep} 
          nextStep={this.handleNextStep} 
          progress={this.state.step * 20}
          step={this.state.step} 
          testPassed={this.state.isCorrect0 && this.state.isCorrect1 && this.state.isCorrect2}/>
        </main>
        
      </>
    )
  }
}

